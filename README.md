# vue-angular-chimera

This is a proof of concept of running Vuejs components inside an Angular controller inside the Umbraco backoffice based on the [React Angular Chimera](https://github.com/cssquirrel/React-Angular-Chimera) by [cssquirrel](https://github.com/cssquirrel) doing the same thing but using React.

The purpose of both of these demo projects is to showcase using alternative frameworks inside the Umbraco back office in order to open up extensibility beyond just Angular plugins.

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```

## Deployment

Copy `dist\VueAngularChimera` to your Umbraco `App_Plugins` folder