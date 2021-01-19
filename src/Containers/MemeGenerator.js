import React from "react";

class MemeGenerator extends React.Component {
  state = {
    topText:"", 
    bottomText:"", 
    randomImg: "http://i.imgflip.com/1bij.jpg"
  };

  render() {
    return <h2>THIS IS THE MEME GENERATOR</h2>;
  }
}

export default MemeGenerator;
