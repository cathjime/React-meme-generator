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

  handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randomNum].url;
    this.setState({ randomImg: randMemeImg });
  };

  render() {
    return (
      <>
        <form className="meme-form" onSubmit={this.handleSubmit}>
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
        <div className="meme">
          <img src={this.state.randomImg} alt="randomly generated meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 class="bottom">{this.state.bottomText}</h2>
        </div>
      </>
    );
  }
}

export default MemeGenerator;
