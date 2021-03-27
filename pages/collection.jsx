import Head from 'next/head'
import { useState } from 'react'

export default function Collection() {
  const [shopDropDown, setshopDropDown] = useState(false)
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <header className="main-header">
        <div className="main-header__top">
          <div className="main-header__top-main">
            <p className="main-header__top-text">
              <span>Free shipping worldwide for orders over</span>
              <span className="text__hl"> $600</span>
            </p>
          </div>
          <div className="main-header__top-contact">
            <div className="main-header__top-contact-main">
              <div className="main-header__top-contact-item">
                <img
                  src="./png/mail.png"
                  className="main-header__top-contact-item-img"
                />
                <span className="main-header__top-contact-item-info">
                  shanjairaj@gmail.com
                </span>
              </div>
              <div className="main-header__top-contact-item">
                <img
                  src="./png/phone.png"
                  className="main-header__top-contact-item-img"
                />
                <span className="main-header__top-contact-item-info">
                  (272) 471-2477
                </span>
              </div>
            </div>
            <div className="main-header__top-contact-sub">
              <div className="main-header__top-lang-select-cont">
                <select
                  name="lang"
                  id="cars"
                  className="main-header__top-lang-select"
                >
                  <option value="volvo">USD</option>
                  <option value="saab">FR</option>
                </select>
              </div>
              <div className="main-header__top-socials">
                <img
                  src="./png/yt.png"
                  className="main-header__top-socials-img"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header__top-socials-img"
                />
                <img
                  src="./png/yt.png"
                  className="main-header__top-socials-img"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header__top-socials-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-header__main">
          <div className="main-header__logo-cont">
            <h1 className="main-header__logo">Selential</h1>
          </div>
          <nav className="main-header__nav">
            <ul className="main-header__links">
              <li className="main-header__link">
                <span className="main-header__link-text">Home</span>
              </li>
              <li
                className="main-header__link main-header__link-dd"
                onMouseEnter={() => {
                  setshopDropDown(true)
                }}
                onMouseLeave={() => {
                  setshopDropDown(false)
                }}
              >
                <span className="main-header__link-text">Shop</span>
                <img
                  src="./png/arrow-down.png"
                  alt="arrow down"
                  className="main-header__link-icon"
                />
                {shopDropDown ? (
                  <div className="main-header__shop-dd-wrapper">
                    <div className="main-header__shop-dd">
                      <div className="main-header__shop-dd-row">
                        <div className="main-header__shop-dd-row-item">
                          <div className="common-list">
                            <h4 className="common-list__heading">More Links</h4>
                            <ul className="common-list__items">
                              <li className="common-list__item">My account</li>
                              <li className="common-list__item">
                                Track your order
                              </li>
                              <li className="common-list__item">FAQ</li>
                              <li className="common-list__item">
                                Payment Methods
                              </li>
                              <li className="common-list__item">
                                Shipping Guide
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="main-header__shop-dd-row-item">
                          <div className="main-header__shop-dd-new-arrival">
                            <h4 className="main-header__shop-dd-new-arrival-title">
                              New arrival
                            </h4>
                            <div className="main-header__shop-dd-new-arrival-cont">
                              <div className="main-header__shop-dd-new-arrival-item">
                                <h5 className="main-header__shop-dd-new-arrival-item-name">
                                  Minimal Nicki Chair
                                </h5>
                                <span className="main-header__shop-dd-new-arrival-item-price">
                                  $250
                                </span>
                                <div className="main-header__shop-dd-new-arrival-item-img-cont">
                                  <img
                                    src="./png/chair-bl.png"
                                    alt=""
                                    className="main-header__shop-dd-new-arrival-item-img"
                                  />
                                </div>
                              </div>
                              <div className="main-header__shop-dd-new-arrival-item">
                                <h5 className="main-header__shop-dd-new-arrival-item-name">
                                  Minimal Nicki Chair
                                </h5>
                                <span className="main-header__shop-dd-new-arrival-item-price">
                                  $250
                                </span>
                                <div className="main-header__shop-dd-new-arrival-item-img-cont">
                                  <img
                                    src="./png/chair-bl.png"
                                    alt=""
                                    className="main-header__shop-dd-new-arrival-item-img"
                                  />
                                </div>
                              </div>
                            </div>{' '}
                          </div>
                        </div>
                        <div className="main-header__shop-dd-row-item">
                          <div className="common-list">
                            <h4 className="common-list__heading">More Links</h4>
                            <ul className="common-list__items">
                              <li className="common-list__item">My account</li>
                              <li className="common-list__item">
                                Track your order
                              </li>
                              <li className="common-list__item">FAQ</li>
                              <li className="common-list__item">
                                Payment Methods
                              </li>
                              <li className="common-list__item">
                                Shipping Guide
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="main-header__shop-dd-row-item">
                          <div className="main-header__shop-dd-new-arrival">
                            <h4 className="main-header__shop-dd-new-arrival-title">
                              Sale
                            </h4>
                            <div className="main-header__shop-dd-new-arrival-cont">
                              <div className="main-header__shop-dd-new-arrival-item">
                                <h5 className="main-header__shop-dd-new-arrival-item-name">
                                  Minimal Nicki Chair
                                </h5>
                                <span className="main-header__shop-dd-new-arrival-item-price">
                                  $250
                                </span>
                                <div className="main-header__shop-dd-new-arrival-item-img-cont">
                                  <img
                                    src="./png/chair-bl.png"
                                    alt=""
                                    className="main-header__shop-dd-new-arrival-item-img"
                                  />
                                </div>
                              </div>
                              <div className="main-header__shop-dd-new-arrival-item">
                                <h5 className="main-header__shop-dd-new-arrival-item-name">
                                  Minimal Nicki Chair
                                </h5>
                                <span className="main-header__shop-dd-new-arrival-item-price">
                                  $250
                                </span>
                                <div className="main-header__shop-dd-new-arrival-item-img-cont">
                                  <img
                                    src="./png/chair-bl.png"
                                    alt=""
                                    className="main-header__shop-dd-new-arrival-item-img"
                                  />
                                </div>
                              </div>
                            </div>{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
              <li
                className="main-header__link  main-header__link-dd"
                onMouseEnter={() => {
                  setshopDropDown(true)
                }}
                onMouseLeave={() => {
                  setshopDropDown(false)
                }}
              >
                <span className="main-header__link-text">Collection</span>
                <img
                  src="./png/arrow-down.png"
                  alt="arrow down"
                  className="main-header__link-icon"
                />
              </li>
              <li className="main-header__link">
                <span className="main-header__link-text">Contact</span>
              </li>
            </ul>
          </nav>
          <div className="main-header__actions">
            <div className="main-header__action">
              <img
                src="./png/search.png"
                alt="icon"
                className="main-header__action-icon"
              />
            </div>
            <div className="main-header__action">
              <img
                src="./png/cart.png"
                alt="icon"
                className="main-header__action-icon"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="colln-hero">
        <div className="container colln-hero__container">
          <div className="colln-hero__content">
            <h1 className="colln-hero__title">Accent Chairs</h1>
            <div className="nav-indicator">
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name">Home</span>
                <img
                  src="./png/ico-right-grey.png"
                  alt="icon right"
                  className="nav-indicator__item-icon"
                />
              </div>
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name">Collection</span>
                <img
                  src="./png/ico-right-grey.png"
                  alt="icon right"
                  className="nav-indicator__item-icon"
                />
              </div>
              <div className="nav-indicator__item">
                <span className="nav-indicator__item-name nav-indicator__item-name--active">
                  Chair Name
                </span>
              </div>
            </div>
          </div>
          <div className="colln-hero__img-cont">
            <img
              src="./png/colln-hero-pic.png"
              className="colln-hero__img"
              alt="image"
            />
          </div>
        </div>
      </section>
      <section className="colln-main">
        <div className="container">
          <div className="colln-main__row">
            <div className="colln-main__row-item">
              <div className="colln-main__filters-cont">
                <div className="colln-main__filters-cont-item">
                  <h3 className="colln-main__filters-cont-item-title">
                    Product Categories
                  </h3>
                  <ul className="colln-main__filters-cont-select-filters">
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">All Categories</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">Minimal</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">Armchairs</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">Accent Chairs</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">Recliner Chairs</label>
                    </li>
                  </ul>
                </div>
                <div className="colln-main__filters-cont-item">
                  <h3 className="colln-main__filters-cont-item-title">Price</h3>
                  <ul className="colln-main__filters-cont-select-filters">
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">$0 - $30</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">$100 - $500</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">$500 - $1000</label>
                    </li>
                    <li className="colln-main__filters-cont-select-filter">
                      <input type="checkbox" id="age1" name="age" value="30" />
                      <label for="age1">$1000 - $5000</label>
                    </li>
                  </ul>
                </div>
                <div className="colln-main__filters-cont-item  colln-main__filters-cont-item-products">
                  <h3 className="colln-main__filters-cont-item-title">
                    Best Selling
                  </h3>
                  <div className="colln-main__filters-cont-products">
                    <div className="colln-main__filters-cont-product">
                      <div className="colln-main__filters-cont-product-img-cont">
                        <img
                          src="./png/chair-bl.png"
                          className="colln-main__filters-cont-product-img"
                          alt="chair"
                        />
                      </div>
                      <div className="colln-main__filters-cont-product-content">
                        <h5 className="colln-main__filters-cont-product-name">
                          Minimal Chair Black
                        </h5>
                        <span className="colln-main__filters-cont-product-price">
                          $600
                        </span>
                      </div>
                    </div>
                    <div className="colln-main__filters-cont-product">
                      <div className="colln-main__filters-cont-product-img-cont">
                        <img
                          src="./png/chair-bl.png"
                          className="colln-main__filters-cont-product-img"
                          alt="chair"
                        />
                      </div>
                      <div className="colln-main__filters-cont-product-content">
                        <h5 className="colln-main__filters-cont-product-name">
                          Minimal Chair Black
                        </h5>
                        <span className="colln-main__filters-cont-product-price">
                          $600
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="colln-main__row-item">
              <div className="colln-main__products">
                <div className="products-grid">
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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

                <div className="colln-main__products-end">
                  <div className="colln-main__products-end-design"></div>
                  <div className="colln-main__products-end-text">
                    That's it for Accent Chairs
                  </div>
                  <div className="colln-main__products-end-design"></div>
                </div>
              </div>
              <div className="colln-main__recomm">
                <h2 className="heading heading-section">
                  <span className="heading-section__top">
                    What you might like
                  </span>
                  <span className="heading-section__main">Similar Items</span>
                </h2>
                <div className="products-grid">
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
                  <div className="products-grid__item">
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
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="main-footer__top">
          <div className="container">
            <div className="main-footer__top-row">
              <div className="main-footer__top-row-item">
                <div className="main-footer__brand-details">
                  <h3 className="main-footer__logo">SELENTIAL</h3>
                  <div className="main-footer__socials">
                    <img
                      src="./png/yt.png"
                      className="main-footer__social-img"
                    />
                    <img
                      src="./png/twitter.png"
                      className="main-footer__social-img"
                    />
                    <img
                      src="./png/yt.png"
                      className="main-footer__social-img"
                    />
                    <img
                      src="./png/twitter.png"
                      className="main-footer__social-img"
                    />
                  </div>
                </div>
              </div>
              <div className="main-footer__top-row-item">
                <div className="common-list">
                  <h4 className="common-list__heading">More Links</h4>
                  <ul className="common-list__items">
                    <li className="common-list__item">My account</li>
                    <li className="common-list__item">Track your order</li>
                    <li className="common-list__item">FAQ</li>
                    <li className="common-list__item">Payment Methods</li>
                    <li className="common-list__item">Shipping Guide</li>
                    <li className="common-list__item">Products Support</li>
                    <li className="common-list__item">Gift card Balance</li>
                  </ul>
                </div>
              </div>
              <div className="main-footer__top-row-item">
                <div className="common-list">
                  <h4 className="common-list__heading">Explore the page</h4>
                  <ul className="common-list__items">
                    <li className="common-list__item">About Us</li>
                    <li className="common-list__item">Our Guarantee</li>
                    <li className="common-list__item">Terms and Conditions</li>
                  </ul>
                </div>
              </div>
              <div className="main-footer__top-row-item">
                <div className="main-footer__contact-cont">
                  <div className="common-list">
                    <h4 className="common-list__heading">Contact Us</h4>
                    <div className="main-footer__contact-item">
                      <img
                        src="./png/mail.png"
                        className="main-footer__contact-item-icon"
                      />
                      <h5 className="main-footer__contact-item-name">
                        shanjairaj@gmail.com
                      </h5>
                    </div>
                    <div className="main-footer__contact-item">
                      <img
                        src="./png/phone.png"
                        className="main-footer__contact-item-icon"
                      />
                      <h5 className="main-footer__contact-item-name">
                        (6969)-6969-69
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="main-footer__contact-cont">
                  <div className="common-list">
                    <h4 className="common-list__heading">Find Us</h4>
                    <div className="main-footer__contact-item">
                      <img
                        src="./png/mail.png"
                        className="main-footer__contact-item-icon"
                      />
                      <h5 className="main-footer__contact-item-name">
                        2411 Columbia Boulevard
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom">
          <div className="container main-footer__bottom-container">
            <div className="main-footer__bottom-content">
              2021 © All rights reserved
            </div>
            <div className="main-footer__bottom-img-cont">
              <img src="./png/pay-cards.png" alt="" />
            </div>
          </div>
        </div>{' '}
      </footer>
    </>
  )
}
