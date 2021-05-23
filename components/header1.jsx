import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Header1() {
  const [shopDropDown, setshopDropDown] = useState(false)
  const [collectionDropDown, setCollectionDropDown] = useState(false)
  const [showFullMenu, setshowFullMenu] = useState(false)

  const [showCart, setshowCart] = useState(false)

  function useOutsideAlerter(ref, option) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (option === 'fullMenu') {
          if (ref.current && !ref.current.contains(event.target)) {
            setshowFullMenu(false)
          }
        }
        if (option === 'cart') {
          if (ref.current && !ref.current.contains(event.target)) {
            setshowCart(false)
          }
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const fullMenuRef = useRef(null)
  useOutsideAlerter(fullMenuRef, 'fullMenu')

  const cartRef = useRef(null)
  useOutsideAlerter(cartRef, 'cart')

  return (
    <div className="main-header-wrapper">
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
            <Link href="/">
              <h1 className="main-header__logo">Selential</h1>
            </Link>
          </div>
          <nav className="main-header__nav">
            <ul className="main-header__links">
              <Link href="/">
                <li className="main-header__link">
                  <span className="main-header__link-text">Home</span>
                </li>
              </Link>
              <Link href="/collection">
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
                              <h4 className="common-list__heading">
                                More Links
                              </h4>
                              <ul className="common-list__items">
                                <li className="common-list__item">
                                  My account
                                </li>
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
                              <h4 className="common-list__heading">
                                More Links
                              </h4>
                              <ul className="common-list__items">
                                <li className="common-list__item">
                                  My account
                                </li>
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
              </Link>
              <Link href="/collection">
                <li
                  className="main-header__link  main-header__link-dd"
                  onMouseEnter={() => {
                    setCollectionDropDown(true)
                  }}
                  onMouseLeave={() => {
                    setCollectionDropDown(false)
                  }}
                >
                  <span className="main-header__link-text">Collection</span>
                  <img
                    src="./png/arrow-down.png"
                    alt="arrow down"
                    className="main-header__link-icon"
                  />
                  {collectionDropDown ? (
                    <div className="main-header__colln-dd-wrapper">
                      <div className="main-header__colln-dd">
                        <div className="main-header__colln-dd-row">
                          <div className="main-header__colln-dd-row-item">
                            <div className="main-header__colln-dd-prd-wide-row">
                              <div className="main-header__colln-dd-prd-wide">
                                <div className="main-header__colln-dd-prd-wide-img-cont">
                                  <img
                                    className="main-header__colln-dd-prd-wide-img"
                                    src="./png/chair-bl.png"
                                    alt="chair"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of minimal
                                    furniture
                                  </p>
                                </div>
                              </div>
                              <div className="main-header__colln-dd-prd-wide">
                                <div className="main-header__colln-dd-prd-wide-img-cont">
                                  <img
                                    className="main-header__colln-dd-prd-wide-img"
                                    src="./png/chair-bl.png"
                                    alt="chair"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of minimal
                                    furniture
                                  </p>
                                </div>
                              </div>
                              <div className="main-header__colln-dd-prd-wide">
                                <div className="main-header__colln-dd-prd-wide-img-cont">
                                  <img
                                    className="main-header__colln-dd-prd-wide-img"
                                    src="./png/chair-bl.png"
                                    alt="chair"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of minimal
                                    furniture
                                  </p>
                                </div>
                              </div>
                              <div className="main-header__colln-dd-prd-wide">
                                <div className="main-header__colln-dd-prd-wide-img-cont">
                                  <img
                                    className="main-header__colln-dd-prd-wide-img"
                                    src="./png/chair-bl.png"
                                    alt="chair"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of minimal
                                    furniture
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="main-header__colln-dd-row-item">
                            <div className="common-list">
                              <h4 className="common-list__heading">
                                More Links
                              </h4>
                              <ul className="common-list__items">
                                <li className="common-list__item">
                                  My account
                                </li>
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
                          <div className="main-header__colln-dd-row-item">
                            <div className="common-list">
                              <h4 className="common-list__heading">
                                More Links
                              </h4>
                              <div className="main-header__colln-dd-single-prd">
                                <div className="main-header__colln-dd-single-prd-img-cont">
                                  <img
                                    src="./png/dog-statue.png"
                                    className="main-header__colln-dd-single-prd-img"
                                    alt="product"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of chairs.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="main-header__colln-dd-row-item">
                            <div className="common-list">
                              <h4 className="common-list__heading">
                                More Links
                              </h4>
                              <div className="main-header__colln-dd-single-prd">
                                <div className="main-header__colln-dd-single-prd-img-cont">
                                  <img
                                    src="./png/dog-statue.png"
                                    className="main-header__colln-dd-single-prd-img"
                                    alt="product"
                                  />
                                </div>
                                <div className="main-header__colln-dd-prd-wide-content">
                                  <div className="main-header__colln-dd-prd-wide-content-top">
                                    <h4 className="main-header__colln-dd-prd-wide-title">
                                      Accent Chairs
                                    </h4>
                                    <img
                                      src="./png/arrow-right-theme.png"
                                      className="main-header__colln-dd-prd-wide-content-top-icon"
                                    />
                                  </div>
                                  <p className="main-header__colln-dd-prd-wide-desc">
                                    Check out our collection of chairs.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              </Link>
              <Link href="/contact">
                <li className="main-header__link">
                  <span className="main-header__link-text">Contact</span>
                </li>
              </Link>
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
            <div
              className="main-header__action"
              onClick={() => {
                if (showCart) {
                  setshowCart(false)
                } else {
                  setshowCart(true)
                }
              }}
            >
              <img
                src="./png/cart.png"
                alt="icon"
                className="main-header__action-icon"
              />
            </div>
            <div
              className="main-header__action main-header__ham-menu-cont"
              onClick={() => {
                setshowFullMenu(true)
              }}
            >
              <img
                src="./png/ham-menu.png"
                alt="icon"
                className="main-header__action-icon"
              />
            </div>
            {showCart ? (
              <div className="main-header__cart" ref={cartRef}>
                <div className="main-header__cart-items">
                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header__cart-item">
                    <div className="main-header__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header__cart-item-content">
                      <h5 className="main-header__cart-item-name">
                        69Dollar Chair
                      </h5>
                      <div className="main-header__cart-item-content-bottom">
                        <div className="main-header__cart-item-actions">
                          <span className="main-header__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header__cart-item-qty">5</span>
                          <span className="main-header__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-header__cart-bottom">
                  <div className="main-header__cart-bottom-total">
                    <span className="main-header__cart-bottom-total--sm">
                      Total:
                    </span>
                    <span className="main-header__cart-bottom-total--bg">
                      $58260
                    </span>
                  </div>
                  <button className="main-header__cart-bottom-btn">
                    Checkout
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {showFullMenu ? (
          <div className="main-header__full-menu-cont">
            <div className="main-header__full-menu" ref={fullMenuRef}>
              <ul className="main-header__full-menu-links">
                <Link href="/">
                  <li
                    className="main-header__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/collection">
                  <li
                    className="main-header__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Shop
                  </li>
                </Link>
                <Link href="/collection">
                  <li
                    className="main-header__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Collection
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className="main-header__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="main-header__full-menu-social">
                <img
                  src="./png/twitter.png"
                  className="main-header__full-menu-social-icon"
                />
                <img
                  src="./png/yt.png"
                  className="main-header__full-menu-social-icon"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header__full-menu-social-icon"
                />
                <img
                  src="./png/yt.png"
                  className="main-header__full-menu-social-icon"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header__full-menu-social-icon"
                />
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  )
}
