FROM node:12-alpine as builder
WORKDIR /test-movies
COPY package.json /test-movies/package.json
RUN npm install --only=prod
COPY . /test-movies
RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=builder /test-movies/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"] 