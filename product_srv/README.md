# Product Service 
This is a service about products.

## Run Application with Docker
Execute the command: <br>
`docker-compose up --build`<br>
or <br>
`docker-compose up -d --build` <br>
You can execute with docker only with commands:
<br>
`docker build -t product_srv:1.0 .`
<br>
and
<br>
`docker run -p 8080:8080 product_srv:1.0`