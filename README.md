# rails-ts-react-redux
* Rils
* Typescript
  * awesome-typescript-loader
* React
* Redux

* code splitting

* SSR
  * Hypernova


* Hot Module Replacement
  * react-hot-loader

* CSS in JS
  * aphrodite


install
```
bundle i --path vendor/bundle

cd frontend;
npm i
yarn
```

build
```
cd frontend;
npm run build
```

rails s
access to /counter url

## SSR
```
cd frontend;
node hypernova.js
```

## HMR

start(webpack-dev-server)
```
cd frontend;
npm run start
```

app/views/counter/index.html.erb
add true parameter
```
<%= javascript_tag 'components/Counter', true %
```
