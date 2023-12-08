Online safety is hard - it seems like there's new malware and ransomware every day, and advertisements and cookie popups grow even more obnoxious and invasive.

To stay safe, I've designed The Browser That Cannot Possibly Go Wrong, an amazing page which does the surfing for you. 

It lets you type in a web address, starts a browser, captures a screenshot of the page, and sends the screenshot back to you -- ensuring you are never at risk of being exposed to malware.

For further safety, I've also designed it to only visit pages on dips.no, ensuring that you cannot go anywhere you shouldn't.

Here is [the source code](server.py) for the Browser That Cannot Possibly Go Wrong.

I wish you an extremely safe browsing experience, well away from anywhere that could possibly hold the flag!

Hint 1: Which pages can you go to? What happens if you try and go outside of dips.no?

Hint 2: The check in `browse` in `server.py` stops you from browsing webpages outside of dips.no - but where else could you go? The [documentation](https://docs.python.org/3/library/urllib.parse.html) for `urllib.parse` may be worth a read...

Hint 3: What happens if you try to navigate to `file://`?