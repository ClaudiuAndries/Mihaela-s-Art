FROM neumantm/httpd-npm

WORKDIR /usr/local/apache2/htdocs

# Install git
#RUN apt-get update && apt-get install -y git

# Clone the Git repository
#RUN git clone https://github.com/ClaudiuAndries/Mihaela-s-Art.git .

# Copy the cloned repository into the container
COPY . /usr/local/apache2/htdocs

# Install emailjs/browser package
RUN npm install @emailjs/browser

# Install react and react-dom packages
RUN npm install react react-dom

EXPOSE 80