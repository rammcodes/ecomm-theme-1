import Head from 'next/head'

export default function Collection() {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <section className="product-main">
        <div className="container">
          <div className="product-main__row">
            <div className="product-main__row-item">
              <div className="product-main__visual">
                <div className="product-main__all-images">
                  <div className="product-main__small-img-cont">
                    <img
                      src="./png/prd-small-img.png"
                      alt="product image"
                      className="product-main__small-img"
                    />
                  </div>
                  <div className="product-main__small-img-cont">
                    <img
                      src="./png/prd-small-img.png"
                      alt="product image"
                      className="product-main__small-img"
                    />
                  </div>
                  <div className="product-main__small-img-cont">
                    <img
                      src="./png/prd-small-img.png"
                      alt="product image"
                      className="product-main__small-img"
                    />
                  </div>
                </div>
                <div className="product-main__big-img-cont">
                  <img
                    src="./png/prd-big-img.png"
                    alt="product image"
                    className="product-main__big-img"
                  />
                </div>
              </div>
            </div>
            <div className="product-main__row-item">
              <h2 className="heading heading-section product-main__title">
                <span className="heading-section__top">Orla Kiely</span>
                <span className="heading-section__main">
                  Orla Kiely Laurel Chair
                </span>
              </h2>
              <p className="product-main__desc">
                The furniture we offer are very high quality, than other stores.
                Take a look at our product line of high quality furniture.
              </p>
              <div className="product-main__prices">
                <span className="product-main__price-prev">
                  {' '}
                  <s> $890 </s>{' '}
                </span>
                <span className="product-main__price-curr">$678</span>
              </div>
              <div className="product-main__cart-actions">
                <div className="product-main__cart-counter">
                  <span className="product-main__cart-counter-btn">-</span>
                  <span className="product-main__cart-counter-txt">2</span>
                  <span className="product-main__cart-counter-btn product-main__cart-counter-btn-dark">
                    +
                  </span>
                </div>
                <div className="product-main__cart-main">
                  <button className="product-main__cart-main-btn">
                    Add to cart
                  </button>
                  <button className="product-main__cart-main-btn product-main__cart-main-btn-lt">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="product-main__info">
                <div className="product-main__info-opts">
                  <button className="product-main__info-opt product-main__info-opt--active">
                    Product Details
                  </button>
                  <button className="product-main__info-opt">
                    Specifications
                  </button>
                  <button className="product-main__info-opt">Reviews</button>
                </div>
                <div className="product-main__info-main">
                  <p className="product-main__info-main-para">
                    Most of us are familiar with the iconic design of the egg
                    shaped chair floating in the air. The Hanging Egg Chair is a
                    critically acclaimed design that has enjoyed praise
                    worldwide ever since the distinctive sculptural shape was
                    created by Nanna & Jørgen Ditzel in 1959. sustainable
                    products.
                  </p>
                  <p className="product-main__info-main-para">
                    The design of the Hanging Egg Chair has long since been
                    dubbed timeless whereas the material rattan had its golden
                    age in the 1960s when skilled wicker makers and architects
                    crafted beautifully sculptured furniture out of the
                    challenging material. However, at the moment rattan is
                    becoming more and more popular concurrent with consumer
                    demands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-reviews">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Reviews</span>
          </h2>
          <div className="product-reviews__row">
            <div className="product-reviews__row-item">
              <div className="testimonial unshadow">
                <div className="testimonial__img-cont">
                  <img
                    src="./png/testi1.png"
                    alt="testimonial"
                    className="testimonial__img"
                  />
                </div>
                <div className="testimonial__content">
                  <h4 className="testimonial__name">Ben James</h4>
                  <h6 className="testimonial__prof">CEO of Pornhub</h6>
                  <p className="testimonial__review">
                    "Selential has got everything I need. I was able to get some
                    high quality furniture for my office as well as for my home.
                    Would highly recommend this to many people. Wow what great
                    service, I love it!"
                  </p>
                </div>
              </div>
            </div>
            <div className="product-reviews__row-item">
              <div className="testimonial unshadow">
                <div className="testimonial__img-cont">
                  <img
                    src="./png/testi1.png"
                    alt="testimonial"
                    className="testimonial__img"
                  />
                </div>
                <div className="testimonial__content">
                  <h4 className="testimonial__name">Ben James</h4>
                  <h6 className="testimonial__prof">CEO of Pornhub</h6>
                  <p className="testimonial__review">
                    "Selential has got everything I need. I was able to get some
                    high quality furniture for my office as well as for my home.
                    Would highly recommend this to many people. Wow what great
                    service, I love it!"
                  </p>
                </div>
              </div>
            </div>
            <div className="product-reviews__row-item">
              <div className="testimonial unshadow">
                <div className="testimonial__img-cont">
                  <img
                    src="./png/testi1.png"
                    alt="testimonial"
                    className="testimonial__img"
                  />
                </div>
                <div className="testimonial__content">
                  <h4 className="testimonial__name">Ben James</h4>
                  <h6 className="testimonial__prof">CEO of Pornhub</h6>
                  <p className="testimonial__review">
                    "Selential has got everything I need. I was able to get some
                    high quality furniture for my office as well as for my home.
                    Would highly recommend this to many people. Wow what great
                    service, I love it!"
                  </p>
                </div>
              </div>
            </div>
            <div className="product-reviews__row-item">
              <div className="testimonial unshadow">
                <div className="testimonial__img-cont">
                  <img
                    src="./png/testi1.png"
                    alt="testimonial"
                    className="testimonial__img"
                  />
                </div>
                <div className="testimonial__content">
                  <h4 className="testimonial__name">Ben James</h4>
                  <h6 className="testimonial__prof">CEO of Pornhub</h6>
                  <p className="testimonial__review">
                    "Selential has got everything I need. I was able to get some
                    high quality furniture for my office as well as for my home.
                    Would highly recommend this to many people. Wow what great
                    service, I love it!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-recomm">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">You might Like</span>
          </h2>
          <div className="product-recomm__row">
            <div className="product-recomm__row-item">
              <div className="product-preview">
                <div className="product-preview__img-cont">
                  <img
                    src="./png/product.png"
                    alt=""
                    className="product-preview__img"
                  />
                </div>
                <h4 className="product-preview__name">
                  Orla Kiely Laurel Walnut Feet
                </h4>
                <h5 className="product-preview__price">$290</h5>
              </div>
            </div>
            <div className="product-recomm__row-item">
              <div className="product-preview">
                <div className="product-preview__img-cont">
                  <img
                    src="./png/product.png"
                    alt=""
                    className="product-preview__img"
                  />
                </div>
                <h4 className="product-preview__name">
                  Orla Kiely Laurel Walnut Feet
                </h4>
                <h5 className="product-preview__price">$290</h5>
              </div>
            </div>
            <div className="product-recomm__row-item">
              <div className="product-preview">
                <div className="product-preview__img-cont">
                  <img
                    src="./png/product.png"
                    alt=""
                    className="product-preview__img"
                  />
                </div>
                <h4 className="product-preview__name">
                  Orla Kiely Laurel Walnut Feet
                </h4>
                <h5 className="product-preview__price">$290</h5>
              </div>
            </div>
            <div className="product-recomm__row-item">
              <div className="product-preview">
                <div className="product-preview__img-cont">
                  <img
                    src="./png/product.png"
                    alt=""
                    className="product-preview__img"
                  />
                </div>
                <h4 className="product-preview__name">
                  Orla Kiely Laurel Walnut Feet
                </h4>
                <h5 className="product-preview__price">$290</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
