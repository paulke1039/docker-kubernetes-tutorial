FROM node:8.9.0-alpine

WORKDIR /sandbox/learningdocker

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 4000
