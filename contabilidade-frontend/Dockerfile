FROM mongo:3

# Define default command.
CMD ["mongod"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017

FROM nginx:1.21.0-alpine
# ARG API_BASE_URL
# ENV API_BASE_URL "$API_BASE_URL"

COPY dist/contabilidade-frontend/browser/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d

RUN chmod -R 755 /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]