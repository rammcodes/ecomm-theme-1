import Head from 'next/head'
import Link from 'next/link'
import HomeHero1 from '../components/home-hero1';
import HomeHero2 from '../components/home-hero2';
import HomeHero3 from '../components/home-hero3';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

     {/* <HomeHero1 />
     <HomeHero3 />
      */}
     <HomeHero3 />
      <section className="main-products">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Our New Products</span>
          </h2>
          <div className="products-row">
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="main-offer">
        <div className="container">
          <div className="main-offer__row">
            <div className="main-offer__row-item">
              <div className="offer-item">
                <div className="offer-item__img-cont">
                  <img
                    src="./png/offer-prod.png"
                    alt=""
                    className="offer-item__img"
                  />
                </div>
                <div className="offer-item__content">
                  <h4 className="offer-item__heading">
                    Upto 70% OFF on all Chairs
                  </h4>
                  <p className="offer-item__desc">
                    The furniture we offer are very high quality, than other
                    stores. Take a look at our product line of high quality
                    furniture.
                  </p>
                  <button className="btn-sec">
                    <span className="btn-sec__text">Start Shopping</span>
                    <img
                      src="./png/arrow-right-white.png"
                      alt="arrow"
                      className="btn-sec__icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="main-offer__row-item">
              <div className="offer-item">
                <div className="offer-item__img-cont">
                  <img
                    src="./png/offer-prod.png"
                    alt=""
                    className="offer-item__img"
                  />
                </div>
                <div className="offer-item__content">
                  <h4 className="offer-item__heading">
                    Upto 70% OFF on all Chairs
                  </h4>
                  <p className="offer-item__desc">
                    The furniture we offer are very high quality, than other
                    stores. Take a look at our product line of high quality
                    furniture.
                  </p>
                  <button className="btn-sec">
                    <span className="btn-sec__text">Start Shopping</span>
                    <img
                      src="./png/arrow-right-white.png"
                      alt="arrow"
                      className="btn-sec__icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-products">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Best Selling Products</span>
            <span className="heading-section__bottom">
              Best sellers this week
            </span>
          </h2>
          <div className="products-row">
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
            <div className="products-row__item">
              <Link href="/product">
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
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="testi">
        <div className="container">
          <h2 className="heading heading-section">
            <span className="heading-section__main">
              What customers think about us.
            </span>
            <span className="heading-section__bottom heading-section__bottom--left">
              Our high service has helped us get a lot of valuable clients that
              play a major role in the success of Selential.
            </span>
          </h2>
        </div>
        <div className="testi__wrapper">
          <div className="testi__bg-design">.</div>
          <div className="testi__row">
            <div className="testi__row-item">
              <div className="testimonial">
                <div className="testimonial__img-cont">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
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
            <div className="testi__row-item">
              <div className="testimonial">
                <div className="testimonial__img-cont">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
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
            <div className="testi__row-item">
              <div className="testimonial">
                <div className="testimonial__img-cont">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
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
            <div className="testi__row-item">
              <div className="testimonial">
                <div className="testimonial__img-cont">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/f4f396d63bd5e4abc40e7473d10f6537ca7effce/2db05/assets/client-4.jpg"
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
      <section className="features">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Why Work with Us?</span>
            <span className="heading-section__bottom">
              At Selential, we focus on Quality and Intergrity. So, always want
              our customers to know what they will get.
            </span>
          </h2>
          <div className="features__row">
            <div className="features__row-item">
              <div className="feature feature--active">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>
            <div className="features__row-item">
              <div className="feature">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>

            <div className="features__row-item">
              <div className="feature">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>

            <div className="features__row-item">
              <div className="feature">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>

            <div className="features__row-item">
              <div className="feature">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>

            <div className="features__row-item">
              <div className="feature">
                <div className="feature__img-cont">
                  <img
                    src="./png/truck.png"
                    alt="icon"
                    className="feature__img"
                  />
                </div>
                <h3 className="feature__name">Free Delivery Worldwide</h3>
                <p className="feature__desc">
                  At Selential, we focus on Quality and Intergrity. So, always
                  want our customers to know what they will get.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-preview">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Our New Products</span>
          </h2>
          <div className="blog-preview__row">
            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog-preview__row-item">
              <div className="single-blog-item">
                <div className="single-blog-item__img-cont">
                  <img
                    src="./png/blog-item-preview.png"
                    alt="Blog"
                    className="single-blog-item__img"
                  />
                </div>
                <div className="single-blog-item__content">
                  <div className="single-blog-item__tags">
                    <span className="single-blog-item__tag">Wood</span>
                    <span className="single-blog-item__tag">Wood</span>
                  </div>
                  <p className="single-blog-item__info">Mr.James Apr 2018</p>
                  <h3 className="single-blog-item__title">
                    Guide to Furniture Shopping
                  </h3>
                  <p className="single-blog-item__desc">
                    At Selential, we focus on Quality and Intergrity. So, always
                    want our customers to know what they will get.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="container">
          <div className="cta__news-ltr">
            <div className="cta__news-ltr-cont">
              <h3 className="cta__news-ltr-title">
                Subscribe to our Newsletter
              </h3>
              <p className="cta__news-ltr-desc">
                At Selential, we focus on Quality and Intergrity. So, always
                want our customers to know what they will get.
              </p>
              <form className="cta__news-ltr-form">
                <input
                  type="text"
                  className="cta__news-ltr-input"
                  placeholder="Email Address"
                />
                <button className="cta__news-ltr-submit">Subscribe</button>
              </form>
            </div>
            <div className="cta__news-ltr-img-cont">
              <img
                src="./png/news-ltr-img.png"
                alt="img"
                className="cta__news-ltr-img"
              />
            </div>
          </div>
          <div className="cta__bottom">
            <div className="cta__bottom-cont">
              <h3 className="cta__bottom-title">
                What more are you waiting for?
              </h3>
              <p className="cta__bottom-desc">
                At Selential, we focus on Quality and Intergrity. So, always
                want our customers to know what they will get. Get started
                shopping with all the high quality products that we have on the
                store..
              </p>
              <button className="btn-primary cta__bottom-btn-primary">
                <span className="btn-primary__text">Get started shopping</span>
                <img
                  src="./png/arrow-right-white.png"
                  alt="arrow"
                  className="btn-primary__icon"
                />
              </button>
            </div>
            <div className="cta__bottom-img-cont">
              <img
                src="./png/chair-brown.png"
                alt="chair"
                className="cta__bottom-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
