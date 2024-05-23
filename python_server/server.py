from flask import Flask, request
from flask_cors import CORS
from rembg import remove
from PIL import Image
import io

import tempfile

from flask import send_file
app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return 'No image provided', 400

    file = request.files['image']
    if file.filename == '':
        return 'No selected file', 400

    input_image = Image.open(file)
    output_image = remove(input_image)

    # Save the processed image to a byte buffer
    output_buffer = io.BytesIO()
    output_image.save(output_buffer, format='PNG')
    output_buffer.seek(0)

    # Save the byte buffer to a file
    with open('uploads/output.png', 'wb') as f:
        f.write(output_buffer.getvalue())

    return 'Image uploaded and processed successfully', 200


@app.route("/proccessed_image",methods=['GET'])
def send_image():
    try:
        # Read the processed image file
        with open('uploads/output.png', 'rb') as f:
            image_data = f.read()

        # Create a temporary file to save the processed image
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(image_data)
        temp_file.close()

        # Return the temporary file as a response
        return send_file(
            temp_file.name,
            mimetype='image/png',
            as_attachment=True,
            download_name='processed_image.png'  # Set the download filename
        )
    except FileNotFoundError:
        return 'Processed image not found', 404








if __name__ == '__main__':
    app.run(debug=True,port=7000)



