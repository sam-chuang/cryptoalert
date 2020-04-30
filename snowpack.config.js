const production = process.env.NODE_ENV === "production"

module.exports = {
  installOptions: {
    clean: production,
    optimize: production,
    strict: true,
    sourceMap: true,
  },
  namedExports: {},
  dedupe: [],
  source: "pika",
  rollup: {
    plugins: [],
  },
}
