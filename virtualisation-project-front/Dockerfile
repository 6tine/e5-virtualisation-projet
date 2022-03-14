### STAGE 1: Build ###
FROM node:current-alpine as build 
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/virtualisation-project-front /usr/share/nginx/html
EXPOSE 80