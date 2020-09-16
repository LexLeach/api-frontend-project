import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Characters from "../Character-Cards/Character-Cards";
import Create from "../Create-Character/Create-Character";
import "../css/mystyles.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      characters: [],
      sliderState: "switch is-link is-small",
      lightMode: {
        hero: "hero is-info",
        charCards: "has-background-white",
        cards: "media notification is-danger",
        create: "section has-background-white",
        buttonTrash: "button is-danger",
        buttonGeneral: "button is-primary",
        buttonLikeGroup: "button is-primary is-small",
        buttonPlusMinus: "button is-white is-small",
        buttonCreateChar: "button level-right is-primary",
        textH1: "is-size-1 has-text-primary",
        textH3: "has-text-white",
        unleashed: "has-text-info",
        bar: "has-text-info",
        h1Dark: "is-size-4",
        pDark: "control is-size-7",
        modalHeader: "modal-card-head has-background-danger",
        modalName: "modal-card-title",
        modalSection: "modal-card-body has-text-black",
        modalFooter: "modal-card-foot has-background-danger",
        modalInput: "input is-info",
      },
    };
    this.enableDarkMode = this.enableDarkMode.bind(this);
    this.enableLightMode = this.enableLightMode.bind(this);
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

  toggleSlider() {
    if (this.state.sliderState === "switch is-link is-small") {
      return this.enableDarkMode;
    } else {
      return this.enableLightMode;
    }
  }

  enableDarkMode() {
    this.setState({
      lightMode: {
        hero: "has-background-grey-dark",
        charCards: "has-background-grey-lighter",
        create: "section has-background-grey-lighter",
        cards: "media notification has-background-grey-dark",
        buttonTrash: "button is-warning",
        buttonGeneral: "button is-link",
        buttonLikeGroup: "button is-link is-small",
        buttonCreateChar: "button level-right is-link",
        buttonPlusMinus: "button is-warning is-small",
        textH1: "is-size-1 has-text-link",
        textH3: "has-text-white",
        unleashed: "has-text-link",
        bar: "has-text-link",
        h1Dark: "is-size-4 has-text-link",
        pDark: "control is-size-7 has-text-link",
        modalHeader: "modal-card-head has-background-grey-dark",
        modalName: "modal-card-title has-text-link",
        modalSection:
          "modal-card-body has-text-link has-background-grey-lighter",
        modalFooter: "modal-card-foot has-background-grey-dark",
        modalInput: "input is-link",
      },
    });
    this.setState({ sliderState: "switch is-link is-small DarkMode" });
  }

  enableLightMode() {
    this.setState({
      lightMode: {
        hero: "hero is-info",
        charCards: "has-background-white",
        cards: "media notification is-danger",
        create: "section has-background-white",
        buttonTrash: "button is-danger",
        buttonGeneral: "button is-primary",
        buttonLikeGroup: "button is-primary is-small",
        buttonCreateChar: "button level-right is-primary",
        buttonPlusMinus: "button is-white is-small",
        textH1: "is-size-1 has-text-primary",
        unleashed: "has-text-info",
        bar: "has-text-info",
        h1Dark: "is-size-4",
        pDark: "control is-size-7",
        modalHeader: "modal-card-head has-background-danger",
        modalName: "modal-card-title",
        modalSection: "modal-card-body has-text-black",
        modalFooter: "modal-card-foot has-background-danger",
        modalInput: "input is-info",
      },
    });
    this.setState({ sliderState: "switch is-link is-small" });
  }

  render() {
    return (
      <div className="has-background-white">
        <Hero
          lightMode={this.state.lightMode.hero}
          textH1={this.state.lightMode.textH1}
          textH3={this.state.lightMode.textH3}
          bar={this.state.lightMode.bar}
          unleashed={this.state.lightMode.unleashed}
        />
        <Create
          lightMode={this.state.lightMode.create}
          toggle={this.toggleSlider()}
          slider={this.state.sliderState}
          buttonCreateChar={this.state.lightMode.buttonCreateChar}
          buttonGeneral={this.state.lightMode.buttonGeneral}
          modalHeader={this.state.lightMode.modalHeader}
          modalName={this.state.lightMode.modalName}
          modalSection={this.state.lightMode.modalSection}
          modalFooter={this.state.lightMode.modalFooter}
          modalInput={this.state.lightMode.modalInput}
          buttonPlusMinus={this.state.lightMode.buttonPlusMinus}
        />
        <section className={this.state.lightMode.charCards}>
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
                      skillName={character.skills[0].name}
                      skillDescrp={character.skills[0].description}
                      likes={character.likes}
                      dislikes={character.dislikes}
                      animeName={character.animeName}
                      url={character.url}
                      cards={this.state.lightMode.cards}
                      buttonTrash={this.state.lightMode.buttonTrash}
                      buttonGeneral={this.state.lightMode.buttonGeneral}
                      buttonLikeGroup={this.state.lightMode.buttonLikeGroup}
                      h1Dark={this.state.lightMode.h1Dark}
                      pDark={this.state.lightMode.pDark}
                      modalHeader={this.state.lightMode.modalHeader}
                      modalName={this.state.lightMode.modalName}
                      modalSection={this.state.lightMode.modalSection}
                      modalFooter={this.state.lightMode.modalFooter}
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
