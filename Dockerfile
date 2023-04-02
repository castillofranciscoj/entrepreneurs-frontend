FROM --platform=linux/amd64 node:16
WORKDIR /app
COPY package*.json ./
COPY src ./
RUN yarn
RUN yarn cache clean
COPY . .
EXPOSE 3000

CMD [ "yarn", "dev" ]