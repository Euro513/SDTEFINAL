FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=2784
ENV SECRET=RLAB

EXPOSE 2784

CMD [ "npm", "start" ]
