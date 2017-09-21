// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD_6NUanoEgY8S_aA_FxJRyESrEzkUgUk4",
    authDomain: "torrid-heat-2030.firebaseapp.com",
    databaseURL: "https://torrid-heat-2030.firebaseio.com",
    projectId: "torrid-heat-2030",
    storageBucket: "torrid-heat-2030.appspot.com",
    messagingSenderId: "829342570880"
  },
  api: {
    entry: "QPLOT"
  }
};
