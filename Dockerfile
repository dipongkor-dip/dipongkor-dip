FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

# enable reliable file watching in Docker (for realtime reload)
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true
ENV NEXT_TELEMETRY_DISABLED=1

# dependency files copy
COPY package.json pnpm-lock.yaml ./

# install dependencies inside container
# RUN pnpm install
RUN pnpm install --allow-build=sharp --allow-build=unrs-resolver

# copy source code (used when no bind-mount)
COPY . .

EXPOSE 3000

CMD ["pnpm", "exec", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]