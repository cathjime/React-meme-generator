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

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form>
          <br />
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={this.state.topText}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Bottom Text "
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.changeHandler}
          />

          <br />

          <button>Generate</button>
        </form>
        <h2>{this.state.bottomText}</h2>
        <h2>{this.state.topText}</h2>
      </>
    );
  }
}

export default MemeGenerator;
