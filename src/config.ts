const config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "5000"),
  debug: process.env.APP_DEBUG === "true",
};

export default config;
