FROM quay.io/wildfly/wildfly:27.0.0.Final-jdk17

COPY ./target/product.war /opt/jboss/wildfly/standalone/deployments/

RUN /opt/jboss/wildfly/bin/add-user.sh -u admin -p admin --silent

ADD ./target/product.war /opt/jboss/wildfly/standalone/deployments/

EXPOSE 8080 9990

CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0", "-bmanagement", "0.0.0.0", "-c","standalone.xml"]