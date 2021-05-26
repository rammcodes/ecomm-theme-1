import React from 'react'

const HomeHero4 = () => {
  return (
    <section className="home-hero4">
      <div className="container home-hero4__container">
        <div className="home-hero4__main">
          <div className="home-hero4__main-content">
            <h2 className="hero-heading home-hero4__heading">
              <span className="hero-heading__sub">Best offer of the Day</span>
              <span className="hero-heading__main">
                Stella Accent Chair With Gold Legs
              </span>
            </h2>
            <button className="btn-primary">
              <span className="btn-primary__text">Start Shopping</span>
              <img
                src="./png/arrow-right-white.png"
                alt="arrow"
                className="btn-primary__icon"
              />
            </button>
          </div>
        </div>
        <div className="home-hero4__visual">
          <div className="home-hero4__visual-img-cont">
            <img
              src="./png/chair.png"
              alt="pic"
              className="home-hero4__visual-img"
            />
          </div>
        </div>
      </div>
      <div className="home-hero4__slider-arrow home-hero4__slider-arrow--left">
        <img src="./png/arrow-left.png" alt="" />
      </div>
      <div className="home-hero4__slider-arrow home-hero4__slider-arrow--right">
        <img src="./png/arrow-right.png" alt="" />
      </div>
      <div className="home-hero4__circles">
        <div className="home-hero4__circle home-hero4__circle--active"></div>
        <div className="home-hero4__circle"></div>
        <div className="home-hero4__circle"></div>
        <div className="home-hero4__circle"></div>
      </div>
    </section>
  )
}

export default HomeHero4;
