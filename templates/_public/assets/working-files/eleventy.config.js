import YAML from "yaml";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import filterPlugin from "./src/11ty/filter11tyPlugin.js";
import tailwindPlugin from "./src/11ty/tailwind11thPlugin.js";

export default function (eleventyConfig) {

  // Custom 11ty plugins that consolidate a bunch of config options
  eleventyConfig.addPlugin(filterPlugin);
  eleventyConfig.addPlugin(tailwindPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copies everything from the templates/_public/ folder to the output folder
  eleventyConfig.addPassthroughCopy({ "templates/_public": "/" });

  // Allow using YAML files for data
  eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

  return {
    dir: { 
      input: 'templates',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site'
    },
  };
}