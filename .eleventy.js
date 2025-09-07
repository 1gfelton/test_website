module.exports = function(eleventyConfig) {
    // Copy images to folder output
    eleventyConfig.addPassthroughCopy("src/img")
    eleventyConfig.addPassthroughCopy("src/style.css")

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}