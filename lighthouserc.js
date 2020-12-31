module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: "./out",
      url: [
        "/"
      ]
    },
    "assert": {
      "preset": "lighthouse:no-pwa",
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}