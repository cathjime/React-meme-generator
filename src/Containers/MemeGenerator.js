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
        // console.log(resp.data.memes[0])
        this.setState({ allMemeImgs: resp.data.memes });
      });
  }

  render() {
    return (
      <>
        <form>
          <button>Generate</button>
        </form>
      </>
    );
  }
}

export default MemeGenerator;
