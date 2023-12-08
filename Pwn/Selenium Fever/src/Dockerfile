FROM ubuntu:20.04
EXPOSE 80
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ="Europe/Oslo"
RUN apt-get update && apt-get install -y python3-pip xvfb xserver-xephyr firefox firefox-geckodriver
RUN pip install flask gunicorn selenium pyvirtualdisplay
ENV FLASK_APP=server.py
ADD . /challenge/
WORKDIR /challenge/
CMD ["gunicorn", "-w", "1", "-b", "0.0.0.0:80", "server:app"]