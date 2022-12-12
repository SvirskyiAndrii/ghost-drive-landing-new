FROM node:16.14-slim as build
WORKDIR /app
COPY . /app
RUN npm install
RUN cd ..
RUN npm run build
#
FROM nginx:1.16.0-alpine
COPY conf/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]