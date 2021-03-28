import { useState } from 'react'

export default function MainHeader() {
  const [shopDropDown, setshopDropDown] = useState(false)
  return (
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
  )
}
