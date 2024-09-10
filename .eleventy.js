const yaml = require("js-yaml");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  const markdownItRenderer = new markdownIt();

  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str);
  });

  const md = new markdownIt({
    html: true,
  });
  
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });


  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };

};