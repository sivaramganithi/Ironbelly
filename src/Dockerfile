FROM node:current-alpine3.18

WORKDIR /app

COPY . .

RUN npm install \
 && npm i

EXPOSE 3000

CMD [ "npm", "run", "start" ]