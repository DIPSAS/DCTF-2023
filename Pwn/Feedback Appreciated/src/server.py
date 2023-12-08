from flask import Flask, render_template, request, send_file, send_from_directory
from pyvirtualdisplay import Display
from selenium import webdriver
from urllib.parse import urlparse
import secrets

app = Flask(__name__)
display = Display(visible=0, size=(640, 480))
display.start()

@app.route("/")
def index():
    return render_template("index.html")

@app.get("/review")
def review_complaint():
    customer_name=request.args.get("name", "Customer")
    customer_mail=request.args.get("email", "Email")
    complaint = request.args.get("complaint", "Complaint")
    return render_template("review.html", name=customer_name, email=customer_mail, complaint=complaint)

@app.route('/tickets/<path:path>')
def retrieve_ticket(path):
    return send_from_directory('/tickets/', path)

@app.post("/support")
def complaint():
    customer_name=request.form.get("name", "Customer")
    customer_mail=request.form.get("email", "Email")
    complaint = request.form.get("complaint", "Complaint")

    options = webdriver.FirefoxOptions()
    options.unhandled_prompt_behavior = 'dismiss'
    browser = webdriver.Firefox(options=options)
    browser.get(f"http://localhost:80/review")
    browser.add_cookie({'name': 'user', 'value': 'admin', 'sameSite': 'Lax'})
    browser.add_cookie({'name': 'password', 'value': 'admin', 'sameSite': 'Lax'})
    browser.add_cookie({'name': 'flag', 'value': 'd:ctf{javascript-javascript-everywhere}', 'sameSite': 'Lax'})
    browser.implicitly_wait(2)
    browser.get(f"http://localhost:80/review?name={customer_name}&email={customer_mail}&complaint={complaint}")
    case_id = secrets.token_hex(15)
    browser.save_screenshot(f'/tickets/{case_id}.png')

    browser.quit()
    return render_template("complaint.html", name=request.form.get("name", "Customer"), email=request.form.get("email", "Email"), case_id=case_id)
