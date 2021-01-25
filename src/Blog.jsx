import React from "react";
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from "./components/Hoge";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: true,
      count: 0,
    };
  }

  componentDidMount(){
    //ボタンがクリックされたらいいねを増やす
    document.getElementById("counter").addEventListener("click",()=>this.countUp())
  }

  componentDidUpdate(){
    if(this.state.count >= 10){
      this.setState({count:0})
    }
  }
  componentWillUnmount(){
    document.getElementById("counter").removeEventListener("click",()=>this.countUp())
  }

  //公開状態を変更する関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };
  //いいね数を増やす関数
  countUp = () => {
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <>
        {/* <React.Fragment></React.Fragment>で囲ってもOK */}
        {/* 関数を渡す時に、props名= {somefunc()}としてしまうと関数が評価される時にstateの値が変化し、再度renderがおこり、無限ループになってしまうのでpropsName={()=>somefunc()}と渡し方を工夫する */}
        <Article
          title={"reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    );
  }
}
export default Blog;
