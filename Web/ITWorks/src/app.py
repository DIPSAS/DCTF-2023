from flask import Flask, render_template, request, send_file, make_response, redirect, url_for
from urllib.parse import urlparse

import werkzeug

app = Flask(__name__, static_folder = 'static')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/secret.html")
def secret():
    return render_template("secret.html")

@app.post("/login")
def browse():
    try:
        username = urlparse(request.form['username']).path
        password = urlparse(request.form['password']).path
        if username == 'admin' and password == 'admin123':
            return render_template('admin.html')
        return redirect(url_for('index', _anchor='login'))
    except:
        return redirect(url_for('index', _anchor='login'))
    
@app.route("/special/employee_06.jpg")
def special_employee():
    response = make_response(send_file("special/employee_06.jpg"))
    response.headers["Part-Three"] = 'd:ctf{part-three-flags-you-have}'
    response.headers["Pragma"] = 'no-cache'
    response.expires = 0
    response.cache_control.no_cache = True
    response.cache_control.no_store = True
    
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)