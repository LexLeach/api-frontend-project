import React from "react";

export default function Hero({ lightMode, textH1, textH3, bar, unleashed }) {
  return (
    <section className={lightMode}>
      <div className="hero-body">
        <div className="container">
          <figure className="center">
            <h1 className={textH1}>A</h1>
            <h3 className={textH3}>nimated</h3>
            <h1 className={textH1}>P</h1>
            <h3 className={textH3}>eople</h3>
            <h1 className={textH1}>I</h1>
            <h3 className={textH3}>nitiative</h3>
            <h2 className={bar}>&nbsp;|&nbsp;</h2>
            <h2 className={unleashed}>Unleashed</h2>
          </figure>
        </div>
      </div>
    </section>
  );
}
