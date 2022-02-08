FROM node:12-alpine as builder
WORKDIR /film-catalog
COPY package.json /film-catalog/package.json
RUN npm install --only=prod
COPY . /film-catalog
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=builder /film-catalog/build /usr/share/nginx/html
EXPOSE 90
CMD ["nginx", "-g", "daemon off;"] 