// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "VoxWheels",
  description: "The premium Voxel Car Creators",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      {
        text: "View on OpenSea",
        link: "https://opensea.io/collection/voxwheels"
      },
      {
        text: "View in Cryptovoxels",
        link: "https://cryptovoxels.com/parcels/4177"
      }
    ]
  }
};
