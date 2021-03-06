import Constants from "expo-constants";

const ENV = {
  dev: {
    apiUrl: "CLOUD FUNCTION URL",
    firebase: {
        //app's Firebase configuration
    },
  },
  staging: {
    apiUrl: "CLOUD FUNCTION URL",
    firebase: {
      //app's Firebase configuration,
    },
  },
  prod: {
    apiUrl: "CLOUD FUNCTION URL",
    firebase: {
      //app's Firebase configuration
    },
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars();
