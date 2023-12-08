FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ="Europe/Oslo"
RUN apt-get update -y && apt-get install -y python3-pip
WORKDIR /challenge/
ADD requirements.txt /challenge/
RUN pip install -r requirements.txt
RUN python -c "from transformers import AutoModelSeq2SeqLM; AutoModelForSeq2SeqLM.from_pretrained('allenai/tk-instruct-3b-def-pos')"
ENV FLASK_APP=server.py
ADD . /challenge/
CMD ["gunicorn", "-w", "1", "-b", "0.0.0.0:80", "server:app"]