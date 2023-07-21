FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY . /src

WORKDIR /src
RUN apk add npm --update
RUN npm i; npm i -g @ionic/cli
RUN ionic build --prod

WORKDIR /src/releases
COPY . /usr/share/nginx/html
ENTRYPOINT npm run start