This is a React front-end app for the [MS Focus Shop](https://github.com/sethjeffery/ms-focus).
It is built from [create-react-app](https://github.com/facebookincubator/create-react-app) so that a lot of the setup
is hidden away and using defaults.

## Running the app

```
yarn start
```

It is expecting the API to be running on http://localhost:3000. Therefore the initializer will ask
you if you wish to use a different port to 3000, you should say "Yes"!

## Tests

```
yarn test
```

## Folder structure

The project files here are grouped by _domain_ (`basket`, `products`) rather than _type_ (`components`, `containers`, `tests`, etc).
This is based on [A Better File Structure For React/Redux Applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html).

There's a good argument for separating out tests, but as far components vs containers goes, I find it easier to browse a project
by domain/namespace, not worrying too much about whether a component is wrapped or not. It also makes it easier to use `index.js`
files to import/export an entire folder.

The default output of every component file is its main concern, whether that is a simple component or a wrapped one. In the case
of files containing a container and component, the container is the default export while the component is a named export.
