# Build
FROM maven:3.8.1-openjdk-17-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package -Dmaven.test.skip=true

# Package
FROM openjdk:17-jdk-slim
COPY --from=build /home/app/target/cinemaepul-0.0.1-SNAPSHOT.jar /usr/local/lib/cinemaepul.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/cinemaepul.jar"]
