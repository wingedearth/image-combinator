# image-combinator
A web application allowing a user to add images (by dragging and dropping) and then stitching the images together to create a combined image.

Current deployment: http://image-combinator.herokuapp.com/

Follow Agile progress of the app on my Trello board: https://trello.com/b/yVfofOB8/image-combinator

## Technologies:
1. JavaScript (ES6)
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
13. React-Dropzone

## Server summary
An Express.js server in a Node.js runtime exposes a root route (and a fallback route) to get the skeleton of a main page from the server.

## Client summary
The client consists of a single page expecting a skeleton DOM to be rendered by the server, upon which the client side React application is injected into the page body. The React App renders a header component, and a main page component.

The client's state is managed via React Context API, where the initial state is grabbed from the window object and set to the initial state (with empty data stores), and the StoreProvider component provides the data stores and actions with which to update the data stores.

The main page includes the components, Nav (navigation buttons), Merged (the final merged image, when available), ImageUpload (an area to drag/drop image files), and Preview components for image previews.

The Nav Component uses the same CombinatorButton component for each button element in the Nav, calling each with individual buttontext and clickhandler props. The buttons include options to upload, reset images, and merge images.

The Merged component displays the final Merged image, when it becomes available in the app state.

The ImageUpload component uses the React-Dropzone library to set up a drag and drop area (also clickable to select files) for image file uploading. The component only accepts jpeg and png format files, and the drop area animates via CSS in a hover state and in a drag acceptable file status and a drag rejected file status.

The Preview components each provide an image thumbnail of an uploaded image and a button with which the user can remove the image.

## NPM Scripts
1. clean - deletes build folder
2. start - Calls clean, then uses Webpack to transpile and build front end and back end and uses Node to start server, for production builds
3. start:dev - Calls clean, then uses Webpack to transpile and build front end and back end. Applies Webpack's --watch option and uses a Nodemon plugin to run server and restart when Webpack observes changes. Use for development.
