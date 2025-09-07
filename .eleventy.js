module.exports = function(eleventyConfig) {
    // Copy images to folder output
    eleventyConfig.addPassthroughCopy("src/img")

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}