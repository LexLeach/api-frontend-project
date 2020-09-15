import React from "react";

export default function Hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <figure className="center">
            <h1>API-FrontEnd-Project</h1>
          </figure>
        </div>
      </div>
      <div className="field level-right">
        <input
          id="switch"
          type="checkbox"
          name="switch"
          className="switch is-success"
        ></input>
        <label htmlFor="switch">Dark Mode</label>
      </div>
    </section>
  );
}
