# my-dogbreed-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requirements to Start Application

vue: version "^2.6.12" or above,
axios,
bootstrap,
vue-router,
vuex

Include node modules

### Architectural decisions

I used home page to display images of selected breed from dropdown. If user select a breed(bulldog) which has sub-breed it intimates user to select sub-breed also.

I used Images component as child to populate images in Home page.

In search component user can search a breed and corresponding random image will be generated.

I choose Vuejs for implementing.

### Production ready

A constant API is received and It will be production ready once unit testing and API validation is completed.
