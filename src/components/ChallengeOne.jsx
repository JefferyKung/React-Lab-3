import React, { Component } from 'react';
//import images

class ChallengeOne extends Component {
  //declare the state here
  constructor(props){
    super(props)
    this.state = {src:"/src/assets/look-right.jpeg"}
  }

  //click left/right button handler goes here
  handleImgChange(source){
    this.setState({src:source})
  }


  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src= {this.state.src}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleImgChange("/src/assets/look-left.jpeg")}>⭠</button>
        <button className="btn" onClick={() => this.handleImgChange("/src/assets/look-right.jpeg")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;