FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i -g npm
RUN npm i
RUN npm run build

CMD [ "npm", "run", "preview" ]
