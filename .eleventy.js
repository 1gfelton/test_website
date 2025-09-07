module.exports = function(eleventyConfig) {
    // Copy images to folder output
    eleventyConfig.addPassthroughCopy("src/img")
    eleventyConfig.addPassthroughCopy("src/style.css")
    eleventyConfig.addPassthroughCopy("src/main.js")

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}