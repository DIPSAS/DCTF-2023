import requests
import re

next_url_re = re.compile("id=\"walk-button\" href=\"([^\"]*)\"") 

current_page = "http://localhost:8000/index.html"
while True:
    page = requests.get(current_page)
    content = page.text
    if "d:ctf" in content:
        break
    current_page = "http://localhost:8000/" + next_url_re.search(content).group(1)
    print(current_page)
print(content)
