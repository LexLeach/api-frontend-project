import React, { useState } from "react";

export default function Characters({
  name,
  age,
  bio,
  link,
  likes,
  dislikes,
  skillName,
  skillDescrp,
  animeName,
  url,
  cards,
  buttonTrash,
  buttonGeneral,
  buttonLikeGroup,
  h1Dark,
  pDark,
  modalHeader,
  modalName,
  modalSection,
  modalFooter,
}) {
  const [modalClass, setModalClass] = useState("modal");

  const activateModal = () => {
    setModalClass("modal is-active");
  };

  const closeModal = () => {
    setModalClass("modal");
  };

  return (
    <article className={cards}>
      <div className="media-content">
        <div className="content">
          <img src={link} className="is-128x128" alt="" />
          <div className="field is-grouped mt-4">
            <h1 className={h1Dark}>{name}</h1>
            <div className="level-right">
              <div className="buttons has-addons level-right">
                <button className={buttonTrash}>
                  <span className="icon has-text-danger-dark">
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p className={h1Dark}>Age: {age}</p>
          <div className="field is-grouped is-primary">
            <p className="control">
              <button className={buttonGeneral}>
                <span className="icon is-small has-text-white-ter">
                  <i className="fas fa-heart"></i>
                </span>
              </button>
            </p>
            <p className="control">
              <button className={buttonGeneral} onClick={activateModal}>
                More Info
              </button>
            </p>
          </div>
          <div className="level mt-2">
            <div className="field is-grouped level-left mt-3">
              <p className={pDark}>Likes: {likes}</p>
              <p className={pDark}>Dislikes: {dislikes} </p>
            </div>
            <div className="level-right">
              <div className="buttons has-addons level-right">
                <button className={buttonLikeGroup}>
                  <span className="icon is-small has-text-success">
                    <i className="fas fa-thumbs-up"></i>
                  </span>
                </button>
                <button className={buttonLikeGroup}>
                  <span className="icon is-small has-text-danger-dark">
                    <i className="fas fa-thumbs-down"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={modalClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className={modalHeader}>
            <p className={modalName}>{name}</p>
          </header>
          <section className={modalSection}>
            <p>
              <b>Bio: </b>
              {bio}
            </p>
            <p>
              <b>Skills: </b>
              {skillName}-{skillDescrp}
            </p>
            <p>
              <b>Anime Name: </b>
              {animeName}
            </p>
            <p>
              <b>URL: </b>
              <a href={url} alt="">
                Read More
              </a>
            </p>
          </section>
          <footer className={modalFooter}>
            <button className={buttonGeneral} onClick={closeModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </article>
  );
}
