FROM python:3.12-alpine
LABEL maintainer="https://t.me/ilyag_lifestyle"

WORKDIR /project/server
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY main.py .

EXPOSE 8000

ENTRYPOINT ["fastapi"]

CMD ["dev", "main.py"]