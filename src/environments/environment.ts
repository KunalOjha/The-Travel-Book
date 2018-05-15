// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDxL7EjuVnbMdJe6PmuYY6n__9Bd9tB9Tk",
    authDomain: "travel-blog-app.firebaseapp.com",
    databaseURL: "https://travel-blog-app.firebaseio.com",
    projectId: "travel-blog-app",
    storageBucket: "travel-blog-app.appspot.com",
    messagingSenderId: "693287944296"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
