#!/bin/bash

set -a
if [ -f .env ]; then
  source .env
fi
set +a

PORT=${PB_SERVE_PORT:-30090}
exec ./pocketbase serve --http=0.0.0.0:${PORT} --dev