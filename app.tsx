import Home from "./src/home";
import Layout from "./src/layout";
// import NotFound from "./src/notfound";
// // import Search from "./containers/Search";
import Page from "./src/page";
import Post from "./src/post";
import Posts from "./src/posts";
import React from "react";

// import Posts from "./src/posts";

export default {
  Page,
  Home,
  Layout,
  Posts,
  NotFound: () => <div>hello world - NotFound</div>,
  Post,
  Search: () => <div>hello world - Search</div>, //Search,
};
