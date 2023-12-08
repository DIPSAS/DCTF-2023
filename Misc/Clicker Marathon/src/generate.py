import json
import random
import os
destination = 'static/'
with open('template.html', 'r') as template_file:
    template = template_file.read()
with open('names.json', 'r') as words_file:
    words = list(json.load(words_file))
with open('lyrics.json', 'r') as lyrics_file:
    lyrics = list(json.load(lyrics_file))

docs = 1000
last_page = "index"
page_names = random.sample(words, k=docs)
for i in range(docs):
    next_page = page_names[i]
    content = template.replace("{{ PAGES_LEFT }}", str(docs - i))
    content = content.replace("{{ PAGE_CONTENT }}", lyrics[i % len(lyrics)])
    content = content.replace("{{ NEXT_PAGE }}", f"{next_page}.html")
    content = content.replace("{{ RANDOM_OFFSET }}", str(random.randint(1, 30)))
    with open(os.path.join(destination, last_page + '.html'), 'w') as this_page:
        this_page.write(content)
    last_page = next_page

with open(os.path.join(destination, last_page + '.html'), 'w') as this_page:
    content = template.replace("{{ PAGES_LEFT }}", '0')
    content = content.replace("{{ PAGE_CONTENT }}", "Well done! The flag is d:ctf{i-am-in-the-turbo-team}")
    content = content.replace("{{ NEXT_PAGE }}", "#")
    content = content.replace("{{ RANDOM_OFFSET }}", "0")
    this_page.write(content)