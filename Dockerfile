FROM node:alpine

WORKDIR /app 

COPY package.json /app 

COPY yarn.lock /app

RUN yarn install 

COPY . /app 

EXPOSE 80

CMD yarn run dev -p 80