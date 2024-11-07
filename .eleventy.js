module.exports = function(eleventyConfig) {

    // eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addPassthroughCopy("./src/assets/css/all.min.css");
    eleventyConfig.addPassthroughCopy("./src/assets/css/fontawesome.min.css");






    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };