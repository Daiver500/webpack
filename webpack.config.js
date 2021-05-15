const path = require("path");

module.exports = {
  entry: [
    "./js/main.js",
    "./js/modal.js",
    "./js/slider.js",
    "./js/cardcreate.js",
    "./js/filters.js",
    "./js/validation.js",
    "./js/submit.js",
    "./js/popup.js",
    "./js/photoloading.js",
    "./js/success.js",
    "./js/mistake.js",
    "./js/effects.js",
    "./js/scale.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
