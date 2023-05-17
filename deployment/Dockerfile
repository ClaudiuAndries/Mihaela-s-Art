FROM smebberson/alpine-nginx-nodejs:4.4.0

WORKDIR /usr/src/app

# Install git and openssl
RUN apk update && apk add --no-cache git openssl

# Copy the certificate authority file
COPY services/web/crt/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt

# Clone the Git repository
RUN git clone https://github.com/ClaudiuAndries/Mihaela-s-Art.git .

# Copy the cloned repository into the container
# COPY .. .

# Install emailjs/browser package
RUN npm install @emailjs/browser

# Install react and react-dom packages
RUN npm install react react-dom

# Generate a self-signed SSL certificate
RUN mkdir -p /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

# Remove all other configurations 
RUN rm -rf /etc/nginx/conf.d

# Replace the default NGINX configuration
COPY services/web/nginx/conf.d /etc/nginx/conf.d

EXPOSE 80
EXPOSE 443