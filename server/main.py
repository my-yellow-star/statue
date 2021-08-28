from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='build')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
	if path != '' and os.path.exists(app.static_folder + '/' + path):
		return send_from_directory(app.static_folder, path)
	else:
		return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
	app.run(use_reloader=True, debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
