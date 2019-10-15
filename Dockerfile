FROM node:10-alpine as builder

RUN apk add   \
        python \
        make \
        g++
#    && apk del .gyp

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.14-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx.conf /etc/nginx/conf.d/public.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/site/html





