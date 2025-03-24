module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "babel-plugin-relay",
        {
          src: "./app",
          schema: "./app/schema.graphql",
          language: "typescript",
          excludes: [
            "**/node_modules/**",
            "**/__mocks__/**",
            "**/__generated__/**",
          ],
        },
      ],
    ],
  };
};
