module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      "babel-plugin-styled-components",
      "@babel/plugin-transform-react-display-name",
      "import-graphql"
    ],
    presets: ["module:metro-react-native-babel-preset"]
  };
};
