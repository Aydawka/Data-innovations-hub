import os
from flask import Flask, flash, request, redirect, url_for, Response, jsonify
from werkzeug.utils import secure_filename
from flask import request


app = Flask(__name__)
app.secret_key = "datainnovationshub_key"
UPLOAD_FOLDER = './downloads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif','docx', 'ppt'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/upload', methods=['POST'])
def upload_file():
    files = request.files.getlist("file")

      # check if each file is allowed
        # fir each file in files check allowed_file
    for file in files:
        if not allowed_file(file.filename):
            response = jsonify("catastrophic failure!!!1111!!!!11")
            response.status_code = 422
            return response
    for file in files:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

    return jsonify("Files have been successfully saved.")


@app.route('/test', methods=['GET'])
def test():
    return Response('{"message": "Unprocessable Entity"}', status=422, mimetype='application/json')
    return jsonify({'message': 'test'})



def create_app(test_config=None):

    app = Flask(__name__, instance_relative_config=True)
    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    @app.route('/')
    def innovations_hub():
        return 'initial setup'
    return app