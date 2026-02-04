// site.js
//
// This file contains the configuration for your site.
// It is a JavaScript file so that you can add comments and logic if needed.

export default {

  // The title of your site, used in the <title> tag and other places.
  title: "Crystal Word Chain",

  // A short description of your site, used for SEO and other metadata.
  description: "A collection of word games that includes Crystal Connections.",

  // Information about the site maintainer.
  maintainer: {
    name: "Jim Applegate",
    email: "jimappleg8@gmail.com",
    url: "https://jimapplegate.com/"
  },

  // The license for your site's content.
  license: "CC BY 4.0",

  // Tags for your site, used for categorization and discovery.
  tags: ["website", "word games", "eleventy", "open artifacts"],

  // Important URLs for your site.
  urls: {
    // The home URL for your site.
    home: "http://localhost:8080/",
    // The URL of your site's repository.
    repository: "",
    // The URL for contributing to your site.
    contribute: ""
  },

  // Configuration for the "Needs Doing" feature.
  needsDoing: {
    sourceType: "json",
    url: "http://localhost:8080/needs-doing.json"
  },

  // Social handle (without the '@' symbol) for your "Links in Bio" page.
  // Your link will be like https://example.com/jimapplegate/
  socialHandle: "jimapplegate",

  // Links to social media profiles.
  social: {
    twitter: "https://twitter.com/jimapplegate",
    facebook: "",
    instagram: "",
    linkedIn: "https://www.linkedin.com/in/jimapplegate/"
  },

  // Main Menu configuration.
  mainMenu: [
    { text: "Home", link: "/index.html" },
    { text: "The Project", link: "/project/about-this-project/" },
    { text: "How to Contribute", link: "/how-to-contribute/" }
  ],
  
};