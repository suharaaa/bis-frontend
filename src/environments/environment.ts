// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHost: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyDYFjO8W6dbM0q0owYm_-9TlWyJOFSk_jA',
    authDomain: 'ehanger-mad.firebaseapp.com',
    databaseURL: 'https://ehanger-mad.firebaseio.com',
    projectId: 'ehanger-mad',
    storageBucket: 'ehanger-mad.appspot.com',
    messagingSenderId: '656666918125',
    appId: '1:656666918125:web:20d97a62ed2e8f8f8fa0e4'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
