FROM node:alpine

WORKDIR /app 

ARG SENDGRID_API_KEY="localhost"
ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}

COPY package.json /app 

COPY yarn.lock /app

RUN yarn install 

COPY . /app 

EXPOSE 80

CMD yarn run dev -p 80