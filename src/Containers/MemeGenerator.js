import React from "react";

class MemeGenerator extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ allMemeImgs: resp.data.memes });
      });
  }

  render() {
    return <h2>THIS IS THE MEME GENERATOR</h2>;
  }
}

export default MemeGenerator;
