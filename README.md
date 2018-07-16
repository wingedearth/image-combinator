# image-combinator
A web application allowing a user to add images (by dragging and dropping) and then stitching the images together to create a combined image.

Current deployment: http://image-combinator.herokuapp.com/

Follow Agile progress of the app on my Trello board: https://trello.com/b/yVfofOB8/image-combinator

## Technologies:
1. JavaScript
2. Node.js
3. Express.js
4. Babeljs
5. Webpack
6. MongoDB
7. React
8. React Context API
9. ESLint
10. Sass
11. merge-image
12. base64ArrayBuffer (http://jsperf.com/encoding-xhr-image-data/5)

## Server summary
An Express.js server in a Node.js runtime exposes a root route (and a fallback route) to get the skeleton of a main page from the server.

## Client summary
The client consists of a single page expecting a skeleton DOM to be rendered by the server, upon which the client side React application is injected into the page body. The React App renders a header component, and a main page component.

## NPM Scripts
1. clean - deletes build folder
2. start - Calls clean, then uses Webpack to transpile and build front end and back end and uses Node to start server, for production builds
3. start:dev - Calls clean, then uses Webpack to transpile and build front end and back end. Applies Webpack's --watch option and uses a Nodemon plugin to run server and restart when Webpack observes changes. Use for development.
