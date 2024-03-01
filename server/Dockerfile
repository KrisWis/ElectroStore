FROM python:3.11
LABEL maintainer="https://t.me/ilyag_lifestyle"

WORKDIR /project/server
COPY electrostore .
COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
