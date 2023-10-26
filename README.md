# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Container Image Management

mkdir node-app
cd node-app

vi app.js 

const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Docker Chief\n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://%s:%s/', hostname, port);
});

process.on('SIGINT', function() {
    console.log('Caught interrupt signal and will exit');
    process.exit();
});
# save the file with :wq

vi Dockerfile

# Use an official Node runtime as the parent image
FROM node:6

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Make the container's port 80 available to the outside world
EXPOSE 80

# Run app.js using node when the container launches
CMD ["node", "app.js"]
# save the file with :wq

Create a Container Image
docker build -t node-app:0.1 -f Dockerfile .
docker images
docker images | grep node-app
Creating Version 0.2
Make changes in app.js
        res.end('Hello Simplilearn\n');

docker build -t node-app:0.2 -f Dockerfile .
docker images | grep node-app
docker run --name node-app1 -dt -p 85:80 node-app:0.1
docker run --name node-app2 -dt -p 87:80 node-app:0.2

docker ps
curl http://localhost:85
curl http://localhost:87
docker logs node-app1
docker logs node-app2


Tagging Images

docker tag node-app:0.1 <docker-hub-username>/node-app:0.1
docker images
docker push <docker-hub-username>/node-app:0.1
Above step will fail, without a Login

docker login
docker push <docker-hub-username>/node-app:0.1

docker tag node-app:0.2 <docker-hub-username>/node-app:0.2 
docker push <docker-hub-username>/node-app:0.2

Python Application:
mkdir py-app
cd py-app/

app.py

from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
    return "welcome to Simplilearn!! successfully done !!"
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

Dockerfile

FROM python:2.7
WORKDIR /app
COPY . /app
RUN pip install -r requirement.txt
EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["app.py"]

requirement.txt

flask

docker build -t pyt-app:0.1 .
docker run -dt --name py -p 5000:5000 pyt-app:0.1
Java Application:
git clone https://github.com/sparkmbt/java-multistage.git
cd java-multistage 
docker build -t java-app:0.1 -f Dockerfile.singlestage .
docker build -t java-app:0.2 -f Dockerfile.multistage .
docker images #compare image size
docker run -dt --name hh -p 5005:8080 java-app:0.1
docker run -dt --name hi -p 5006:8080 java-app:0.2
curl http://localhost:5006/hello

MultiStage build

FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
 ENTRYPOINT ["nginx", "-g", "daemon off;"
 
echo "Welcome to Dockerlabs !" > index.html
 
docker build -t imageName:imageTag -f path/to/dockerfile .
docker build -t app01:v1.0 .
docker run --name app01c -dt -p 85:80 app01:v1.0
 
---
#Multi-stage Builds
FROM alpine AS stage1
 RUN echo "Welcome to Docker Labs!" > /opt/index.html
FROM nginx:alpine
 LABEL maintainer="Collabnix"
 COPY --from=stage1 /opt/index.html /usr/share/nginx/html/
 ENTRYPOINT ["nginx", "-g", "daemon off;"]



228  docker ps -q
  229  docker stop $(docker ps -q)
  230  docker ps -aq
  231  docker rm $(docker ps -aq)
  232  docker ps -a


Reference:
https://docs.docker.com/engine/reference/builder/#cmd
