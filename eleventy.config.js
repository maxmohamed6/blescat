export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addCollection("diario", function(collectionApi) {
        return collectionApi
            .getFilteredByTag("diario")
            .sort((a, b) => b.date - a.date);
    });

    return {
        dir: {
            input: "src",
            includes: "../_includes",
            output: "_site"
        }
    };
}