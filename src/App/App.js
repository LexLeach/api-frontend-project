import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Characters from "../Character-Cards/Character-Cards";
import axios from "axios";
import "../css/mystyles.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    const url = "https://lexleach-api-project.herokuapp.com/characters";
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log("==========================");
        console.log(jsonRes);
        console.log("==========================");
        this.setState({ characters: jsonRes });
      })
      .catch((err) => {
        console.log("Something went wrong!");
      });
  }

  createCharacter(char) {
    axios({
      method: "post",
      url: "https://lexleach-api-project.herokuapp.com/characters",
      data: {
        name: "",
        age: 0,
        bio: "",
        skills: [
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
        ],
        animeName: "",
        url: "",
        image: "",
        favorited: true,
        likes: 0,
        dislikes: 0,
      },
    }).then((res) => {
      console.log(res);
    });
    alert("New Character Created!");
  }

  render() {
    return (
      <div>
        <Hero />
        <section className="section has-background-white">
          <div className="level">
            <div className="field level-left has-background-white">
              <input
                id="switch"
                type="checkbox"
                name="switch"
                className="switch is-success is-small"
              ></input>
              <label htmlFor="switch">Dark Mode</label>
            </div>
            <button className="button level-right is-primary">
              Create Character
            </button>
          </div>
          <div className="container">
            <div className="columns is-multiline is-vcentered">
              {this.state.characters.map((character) => {
                return (
                  <div className="column is-one-third" key={character._id}>
                    <Characters
                      link={character.image}
                      name={character.name}
                      age={character.age}
                      bio={character.bio}
                      skills={character.skills}
                      likes={character.likes}
                      dislikes={character.dislikes}
                      animeName={character.animeName}
                      url={character.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
