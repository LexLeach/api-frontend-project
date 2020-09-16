import React, { useState } from "react";
import axios from "axios";

export default function CreateCharacter({
  lightMode,
  toggle,
  slider,
  buttonCreateChar,
  buttonGeneral,
  modalHeader,
  modalName,
  modalSection,
  modalFooter,
  modalInput,
  buttonPlusMinus,
}) {
  const [modalClass, setModalClass] = useState("modal");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillDescr, setSkillDescr] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");

  const handleInput = (e, type) => {
    e.persist();
    const value = e.target.value;
    handleValueUpdates[type](value);
  };

  const handleValueUpdates = {
    name: setName,
    age: setAge,
    bio: setBio,
    animeName: setAnimeName,
    url: setUrl,
    image: setImage,
    skillName: setSkillName,
    skillDescr: setSkillDescr,
  };

  const activateModal = () => {
    setModalClass("modal is-active");
  };

  const closeModal = () => {
    setModalClass("modal");
  };

  const createCharacter = () => {
    axios({
      method: "post",
      url: "https://lexleach-api-project.herokuapp.com/characters",
      data: {
        name: name,
        age: age,
        bio: bio,
        skills: [
          {
            name: skillName,
            description: skillDescr,
          },
          {
            name: "",
            description: "",
          },
        ],
        animeName: animeName,
        url: url,
        image: image,
        favorited: true,
        likes: 0,
        dislikes: 0,
      },
    }).then((res) => {
      console.log(res);
    });
    alert("New Character Created!");
  };

  return (
    <div className={lightMode}>
      <div className="level">
        <div className="field level-left">
          <input
            id="switch"
            type="checkbox"
            name="switch"
            className={slider}
            onClick={toggle}
          ></input>
          <label htmlFor="switch">Dark Mode</label>
        </div>
        <button className={buttonCreateChar} onClick={activateModal}>
          Create Character
        </button>
      </div>
      <div className={modalClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className={modalHeader}>
            <p className={modalName}>Create a Character</p>
          </header>
          <section className={modalSection}>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => handleInput(e, "name")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Age"
                  onChange={(e) => handleInput(e, "age")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Bio"
                  onChange={(e) => handleInput(e, "bio")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Anime Name"
                  onChange={(e) => handleInput(e, "animeName")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Read More URL"
                  onChange={(e) => handleInput(e, "url")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Image"
                  onChange={(e) => handleInput(e, "image")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div className="field is-grouped">
                  <h3>Skill</h3>
                  <div className="level-right">
                    <div className="buttons has-addons level-right">
                      <button className={buttonPlusMinus}>
                        <span className="icon is-small has-text-success">
                          <i className="fas fa-plus-square"></i>
                        </span>
                      </button>
                      <button className={buttonPlusMinus}>
                        <span className="icon is-small has-text-danger-dark">
                          <i className="fas fa-minus-square"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Skill Name"
                  onChange={(e) => handleInput(e, "skillName")}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={modalInput}
                  type="text"
                  placeholder="Skill Description"
                  onChange={(e) => handleInput(e, "skillDescr")}
                ></input>
              </div>
            </div>
          </section>
          <footer className={modalFooter}>
            <div className="buttons">
              <button className={buttonGeneral} onClick={closeModal}>
                Close
              </button>
              <button className={buttonGeneral} onClick={createCharacter}>
                Create Character
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
