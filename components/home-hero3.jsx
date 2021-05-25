import React from 'react'

const HomeHero3 = () => {
  return (
    <section className="home-hero3">
      <div className="container home-hero3__container">
        <div className="home-hero3__main">
          <div className="home-hero3__main-content">
            <h2 className="hero-heading">
              <span className="hero-heading__sub">Best offer of the Day</span>
              <span className="hero-heading__main">
                Stella Accent Chair With Gold Finish Legs.
              </span>
            </h2>
            <button className="btn-primary home-hero3__btn-primary">
              <span className="btn-primary__text">Start Shopping</span>
              <img
                src="./png/arrow-right-white.png"
                alt="arrow"
                className="btn-primary__icon"
              />
            </button>
          </div>
        </div>
       
      </div>
      <div className="home-hero3__slider-arrow home-hero3__slider-arrow--left">
        <img src="./png/arrow-left.png" alt="" />
      </div>
      <div className="home-hero3__slider-arrow home-hero3__slider-arrow--right">
        <img src="./png/arrow-right.png" alt="" />
      </div>
      <div className="home-hero3__circles">
        <div className="home-hero3__circle home-hero3__circle--active"></div>
        <div className="home-hero3__circle"></div>
        <div className="home-hero3__circle"></div>
        <div className="home-hero3__circle"></div>
      </div>
    </section>
  )
}

export default HomeHero3;