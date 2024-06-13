FROM python:3.12-slim
LABEL maintainer="https://t.me/ilyag_lifestyle"

WORKDIR /project/server
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 80

ENTRYPOINT ["uvicorn"]

CMD ["main:app", "--host", "0.0.0.0", "--port", "80"]