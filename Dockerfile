FROM node
WORKDIR /usr/src/app
COPY contabilidade-api/package.json ./
COPY contabilidade-api/build/ ./
RUN npm install
COPY core/build/ ./node_modules/core
RUN ls -lrt
RUN ls ./node_modules -lrt
EXPOSE 4201
RUN echo hostname
CMD ["node", "index.js"]

FROM nginx:1.21.0-alpine
# ARG API_BASE_URL
# ENV API_BASE_URL "$API_BASE_URL"
COPY contabilidade-frontend/dist/contabilidade-frontend/browser/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
RUN chmod -R 755 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]