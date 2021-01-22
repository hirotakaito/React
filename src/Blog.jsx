import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (
      <>
        <Article title = {"reactの使い方"}/>
        <Article title = {"jsxの使い方"}/>
        <Article title = {"環境構築をしてみよう"}/>
       
      </>
    );
  }
}
export default Blog;
