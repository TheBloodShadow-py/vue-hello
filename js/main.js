"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hello there",
      img: "https://picsum.photos/400/600",
    };
  },
}).mount("#app");
