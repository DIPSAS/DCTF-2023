from flask import Flask, render_template, request, send_file
from pyvirtualdisplay import Display
from selenium import webdriver
from urllib.parse import urlparse

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.post("/browse")
def browse():
    # First, make sure that we are trying to access a valid URL:
    try:
        url = urlparse(request.form['URL'])
    except:
        return "ERROR: Not a valid URL."
    
    # Then, make sure we are only accessing pages on dips.no:
    if (url.scheme == 'http' or url.scheme == 'https') and not (url.netloc.startswith('dips.no')):
        return "ERROR: Cannot browse webpages outside dips.no."
    
    # Create a virtual display:
    display = Display(visible=0, size=(1024, 768))
    display.start()

    # Start the browser, navigate to the page and take a screenshot:
    browser = webdriver.Firefox()
    browser.get(url.geturl())
    browser.save_screenshot('screenshot.png')

    # Clean up the browser and shut down the virtual display:
    browser.quit()
    display.stop()

    return send_file('screenshot.png')
