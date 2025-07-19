FROM ubuntu:22.04 AS base

ARG PB_VERSION=0.28.2
ENV PORT=30090

ENV PB_CORS_ENABLED=true
ENV PB_CORS_ORIGINS="*"

RUN apt-get update && apt-get install -y \
  curl \
  unzip \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app/ && rm /tmp/pb.zip
RUN chmod +x /app/pocketbase

RUN chmod +x /app/start.sh

# Mount pb_data directory as a volume for persistent storage
# VOLUME ["/app/pb_data"]

EXPOSE $PORT

# Start the application
CMD ["/app/DockerStart.sh"]