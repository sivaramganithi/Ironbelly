# Ironbelly DevOps Exercise

This exercise is intended to let you demonstrate your knowledge of common DevOps tools in our work environment. In order to do so, you'll have to complete the following tasks:

1. Write a Dockerfile for this application that creates a runnable container image for the application.
2. Write a docker-compose.yaml file with a service definition for the container image created in step #1 that binds the service through so that it can be called outside of docker.
3. Write a Kubernetes service, deployment, and horizontal pod autoscaler definition for the application that will scale up to 10 replicas based on a CPU Utilization exceeding 50%.

## What We're Looking For

In your solution for this, we are looking for the following things:

1. Clear and concise git commit history. Remember, your commits are how you communicate your thoughts about the code to other engineers.
2. Fully functional Dockerfile, docker-compose.yaml, and Kubernetes definitions
3. An npm script definition to build the container image

## Application Details

This application is a simple Node.JS web API. If a GET request is issued to the / route, you will receive back a JSON response with a Hello World object.

It listens on port 3000 by default, and binds to all addresses by default as well. These can be overriden using the environment variables HTTP_LISTENING_PORT and HTTP_LISTENING_ADDRESS.

### Installing dependencies

In order to install the applications dependencies, you will need to have Node.JS installed and run `npm i` in this directory.

### Starting the application

In order to start the application, you can run the `npm run start` script after you have installed dependencies.

### Testing the application

If you have curl installed, you can simply run `curl localhost:3000`. You can also issue a GET request using tools like Postman to the same address.
