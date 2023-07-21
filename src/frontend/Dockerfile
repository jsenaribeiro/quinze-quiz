FROM nginx:alpine
ENV NGX_PATH="/usr/share/nginx"
ENV NGX_CONF="/etc/nginx/conf.d"
ENV IDX_PATH="${NGX_PATH}/assets/json/index.js"
ENV JSON_SVC="json-server --watch ${IDX_PATH} --port 3333"
RUN apk add npm --update
RUN npm i json-server -g
RUN rm -rf ${NGX_PATH}/html/*
COPY ./builds ${NGX_PATH}/html
COPY ./assets ${NGX_PATH}/assets
COPY ./default.conf ${NGX_CONF}/default.conf
#USER 0
ENTRYPOINT chown -R 1000 ${NGX_PATH}/assets; \
           nginx -g 'daemon off;' & ${JSON_SVC}

# ------------ release + build
# FROM node:alpine as BUILD
# COPY . /src
# WORKDIR /src
# RUN npm i
# RUN npm run build

# FROM nginx:alpine as RUN
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=BUILD /src/assets /usr/share/nginx/html/assets
# COPY --from=BUILD /src/releases /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# ------------ original 
# FROM nginx:alpine
# RUN rm -rf /usr/share/nginx/html/*
# WORKDIR /src
# RUN apk add npm --update
# RUN npm i -g @ionic/cli
# RUN ionic build --prod
# WORKDIR /src/releases
# COPY . /usr/share/nginx/html
# ENTRYPOINT npm run start