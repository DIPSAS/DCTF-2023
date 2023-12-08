FROM ubuntu:20.04
EXPOSE 80
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ="Europe/Oslo"
RUN apt-get update
RUN apt-get install -y python3-pip
RUN pip install flask gunicorn
ENV FLASK_APP=app.py
ADD . /challenge/
WORKDIR /challenge/
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:80", "app:app"]