import React from "react";

export default function Characters({
  name,
  age,
  bio,
  link,
  likes,
  dislikes,
  skills,
  animeName,
  url,
}) {
  return (
    <article className="media notification is-danger">
      <div className="media-content">
        <div className="content">
          <img src={link} className="image is-256x256" alt="" />
          <h1 className="is-size-4">{name}</h1>
          <p className="is-size-5">Age: {age}</p>
          <div className="field is-grouped is-primary">
            <p className="control">
              <button className="button is-link">
                <span className="icon is-small has-text-white-ter">
                  <i className="fas fa-heart"></i>
                </span>
              </button>
            </p>
            <p className="control">
              <button className="button is-link">More Info</button>
            </p>
          </div>
          <div className="level mt-2">
            <div className="field is-grouped level-left mt-3">
              <p className="control is-size-7">Likes: {likes}</p>
              <p className="control is-size-7">Dislikes: {dislikes} </p>
            </div>
            <div className="level-right">
              <div className="buttons has-addons level-right">
                <button className="button is-link is-small">
                  <span className="icon is-small has-text-success">
                    <i className="fas fa-thumbs-up"></i>
                  </span>
                </button>
                <button className="button is-link is-small">
                  <span className="icon is-small has-text-danger-dark">
                    <i className="fas fa-thumbs-down"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head has-background-danger">
            <p className="modal-card-title">{name}</p>
          </header>
          <section className="modal-card-body has-text-black">
            <p>
              <b>Bio: </b>
              {bio}
            </p>
            {/* <p>{skills}</p> */}
            <p>
              <b>Anime Name: </b>
              {animeName}
            </p>
            <p>
              <b>URL: </b>
              {url}
            </p>
          </section>
          <footer className="modal-card-foot has-background-danger">
            <button className="button">Close</button>
          </footer>
        </div>
      </div>
    </article>
  );
}
