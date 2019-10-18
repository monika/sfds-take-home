module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: { input: 'src', output: 'dist', data: '_data', includes: '_includes' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
};
