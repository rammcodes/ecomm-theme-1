import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Header3() {
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
    <div className="main-header3-wrapper">
      <header className="main-header3">
        <div className="main-header3__main">
          <div className="main-header3__logo-cont">
            <Link href="/">
              <h1 className="main-header3__logo">Selential</h1>
            </Link>
          </div>
          <nav className="main-header3__nav">
            <ul className="main-header3__links">
              <Link href="/">
                <li className="main-header3__link">
                  <span className="main-header3__link-text">Home</span>
                </li>
              </Link>
              <Link href="/collection">
                <li
                  className="main-header3__link main-header3__link-dd"
                  onMouseEnter={() => {
                    setshopDropDown(true)
                  }}
                  onMouseLeave={() => {
                    setshopDropDown(false)
                  }}
                >
                  <span className="main-header3__link-text">Shop</span>
                  <img
                    src="./png/arrow-down.png"
                    alt="arrow down"
                    className="main-header3__link-icon"
                  />
                </li>
              </Link>
              <Link href="/collection">
                <li
                  className="main-header3__link  main-header3__link-dd"
                  onMouseEnter={() => {
                    setCollectionDropDown(true)
                  }}
                  onMouseLeave={() => {
                    setCollectionDropDown(false)
                  }}
                >
                  <span className="main-header3__link-text">Collection</span>
                  <img
                    src="./png/arrow-down.png"
                    alt="arrow down"
                    className="main-header3__link-icon"
                  />
                </li>
              </Link>
              <Link href="/contact">
                <li className="main-header3__link">
                  <span className="main-header3__link-text">Contact</span>
                </li>
              </Link>
            </ul>
          </nav>
         
          <div className="main-header3__actions">
            <div className="main-header3__action-search-cont">
              <img
                src="./svg/search-gry.svg"
                alt="icon"
                className="main-header3__action-icon"
              />
              <input
                placeholder="Search here..."
                type="text"
                className="main-header3__action-search"
              />
            </div>
          
            <div className="main-header3__action main-header3__action--res">
              <img
                src="./png/search.png"
                alt="icon"
                className="main-header3__action-icon"
              />
            </div>
            <div
              className="main-header3__action"
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
                className="main-header3__action-icon"
              />
            </div>
            <div
              className="main-header3__action main-header3__ham-menu-cont"
              onClick={() => {
                setshowFullMenu(true)
              }}
            >
              <img
                src="./png/ham-menu.png"
                alt="icon"
                className="main-header3__action-icon"
              />
            </div>
            {showCart ? (
              <div className="main-header3__cart" ref={cartRef}>
                <div className="main-header3__cart-items">
                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        Laurel Chair Extra Large
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header3__cart-item">
                    <div className="main-header3__cart-item-img-cont">
                      <img
                        src="./png/chair-bl.png"
                        className="main-header3__cart-item-img"
                        alt="img"
                      />
                    </div>
                    <div className="main-header3__cart-item-content">
                      <h5 className="main-header3__cart-item-name">
                        69Dollar Chair
                      </h5>
                      <div className="main-header3__cart-item-content-bottom">
                        <div className="main-header3__cart-item-actions">
                          <span className="main-header3__cart-item-qty-btn">
                            -
                          </span>
                          <span className="main-header3__cart-item-qty">5</span>
                          <span className="main-header3__cart-item-qty-btn">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-header3__cart-bottom">
                  <div className="main-header3__cart-bottom-total">
                    <span className="main-header3__cart-bottom-total--sm">
                      Total:
                    </span>
                    <span className="main-header3__cart-bottom-total--bg">
                      $58260
                    </span>
                  </div>
                  <button className="main-header3__cart-bottom-btn">
                    Checkout
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          {shopDropDown ? (
            <div className="main-header3__shop-dd">
              <div className="main-header3__shop-dd-row">
                <div className="main-header3__shop-dd-row-item">
                  <div className="common-list">
                    <h4 className="common-list__heading">More Links</h4>
                    <ul className="common-list__items">
                      <li className="common-list__item">My account</li>
                      <li className="common-list__item">Track your order</li>
                      <li className="common-list__item">FAQ</li>
                      <li className="common-list__item">Payment Methods</li>
                      <li className="common-list__item">Shipping Guide</li>
                    </ul>
                  </div>
                </div>
                <div className="main-header3__shop-dd-row-item">
                  <div className="main-header3__shop-dd-new-arrival">
                    <h4 className="main-header3__shop-dd-new-arrival-title">
                      New arrival
                    </h4>
                    <div className="main-header3__shop-dd-new-arrival-cont">
                      <div className="main-header3__shop-dd-new-arrival-item">
                        <h5 className="main-header3__shop-dd-new-arrival-item-name">
                          Minimal Nicki Chair
                        </h5>
                        <span className="main-header3__shop-dd-new-arrival-item-price">
                          $250
                        </span>
                        <div className="main-header3__shop-dd-new-arrival-item-img-cont">
                          <img
                            src="./png/chair-bl.png"
                            alt=""
                            className="main-header3__shop-dd-new-arrival-item-img"
                          />
                        </div>
                      </div>
                      <div className="main-header3__shop-dd-new-arrival-item">
                        <h5 className="main-header3__shop-dd-new-arrival-item-name">
                          Minimal Nicki Chair
                        </h5>
                        <span className="main-header3__shop-dd-new-arrival-item-price">
                          $250
                        </span>
                        <div className="main-header3__shop-dd-new-arrival-item-img-cont">
                          <img
                            src="./png/chair-bl.png"
                            alt=""
                            className="main-header3__shop-dd-new-arrival-item-img"
                          />
                        </div>
                      </div>
                    </div>{' '}
                  </div>
                </div>
                <div className="main-header3__shop-dd-row-item">
                  <div className="common-list">
                    <h4 className="common-list__heading">More Links</h4>
                    <ul className="common-list__items">
                      <li className="common-list__item">My account</li>
                      <li className="common-list__item">Track your order</li>
                      <li className="common-list__item">FAQ</li>
                      <li className="common-list__item">Payment Methods</li>
                      <li className="common-list__item">Shipping Guide</li>
                    </ul>
                  </div>
                </div>
                <div className="main-header3__shop-dd-row-item">
                  <div className="main-header3__shop-dd-new-arrival">
                    <h4 className="main-header3__shop-dd-new-arrival-title">
                      Sale
                    </h4>
                    <div className="main-header3__shop-dd-new-arrival-cont">
                      <div className="main-header3__shop-dd-new-arrival-item">
                        <h5 className="main-header3__shop-dd-new-arrival-item-name">
                          Minimal Nicki Chair
                        </h5>
                        <span className="main-header3__shop-dd-new-arrival-item-price">
                          $250
                        </span>
                        <div className="main-header3__shop-dd-new-arrival-item-img-cont">
                          <img
                            src="./png/chair-bl.png"
                            alt=""
                            className="main-header3__shop-dd-new-arrival-item-img"
                          />
                        </div>
                      </div>
                      <div className="main-header3__shop-dd-new-arrival-item">
                        <h5 className="main-header3__shop-dd-new-arrival-item-name">
                          Minimal Nicki Chair
                        </h5>
                        <span className="main-header3__shop-dd-new-arrival-item-price">
                          $250
                        </span>
                        <div className="main-header3__shop-dd-new-arrival-item-img-cont">
                          <img
                            src="./png/chair-bl.png"
                            alt=""
                            className="main-header3__shop-dd-new-arrival-item-img"
                          />
                        </div>
                      </div>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {collectionDropDown ? (
            <div className="main-header3__colln-dd">
              <div className="main-header3__colln-dd-row">
                <div className="main-header3__colln-dd-row-item">
                  <div className="main-header3__colln-dd-prd-wide-row">
                    <div className="main-header3__colln-dd-prd-wide">
                      <div className="main-header3__colln-dd-prd-wide-img-cont">
                        <img
                          className="main-header3__colln-dd-prd-wide-img"
                          src="./png/chair-bl.png"
                          alt="chair"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of minimal furniture
                        </p>
                      </div>
                    </div>
                    <div className="main-header3__colln-dd-prd-wide">
                      <div className="main-header3__colln-dd-prd-wide-img-cont">
                        <img
                          className="main-header3__colln-dd-prd-wide-img"
                          src="./png/chair-bl.png"
                          alt="chair"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of minimal furniture
                        </p>
                      </div>
                    </div>
                    <div className="main-header3__colln-dd-prd-wide">
                      <div className="main-header3__colln-dd-prd-wide-img-cont">
                        <img
                          className="main-header3__colln-dd-prd-wide-img"
                          src="./png/chair-bl.png"
                          alt="chair"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of minimal furniture
                        </p>
                      </div>
                    </div>
                    <div className="main-header3__colln-dd-prd-wide">
                      <div className="main-header3__colln-dd-prd-wide-img-cont">
                        <img
                          className="main-header3__colln-dd-prd-wide-img"
                          src="./png/chair-bl.png"
                          alt="chair"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of minimal furniture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-header3__colln-dd-row-item">
                  <div className="common-list">
                    <h4 className="common-list__heading">More Links</h4>
                    <ul className="common-list__items">
                      <li className="common-list__item">My account</li>
                      <li className="common-list__item">Track your order</li>
                      <li className="common-list__item">FAQ</li>
                      <li className="common-list__item">Payment Methods</li>
                      <li className="common-list__item">Shipping Guide</li>
                    </ul>
                  </div>
                </div>
                <div className="main-header3__colln-dd-row-item">
                  <div className="common-list">
                    <h4 className="common-list__heading">More Links</h4>
                    <div className="main-header3__colln-dd-single-prd">
                      <div className="main-header3__colln-dd-single-prd-img-cont">
                        <img
                          src="./png/dog-statue.png"
                          className="main-header3__colln-dd-single-prd-img"
                          alt="product"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of chairs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-header3__colln-dd-row-item">
                  <div className="common-list">
                    <h4 className="common-list__heading">More Links</h4>
                    <div className="main-header3__colln-dd-single-prd">
                      <div className="main-header3__colln-dd-single-prd-img-cont">
                        <img
                          src="./png/dog-statue.png"
                          className="main-header3__colln-dd-single-prd-img"
                          alt="product"
                        />
                      </div>
                      <div className="main-header3__colln-dd-prd-wide-content">
                        <div className="main-header3__colln-dd-prd-wide-content-top">
                          <h4 className="main-header3__colln-dd-prd-wide-title">
                            Accent Chairs
                          </h4>
                          <img
                            src="./png/arrow-right-theme.png"
                            className="main-header3__colln-dd-prd-wide-content-top-icon"
                          />
                        </div>
                        <p className="main-header3__colln-dd-prd-wide-desc">
                          Check out our collection of chairs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {showFullMenu ? (
          <div className="main-header3__full-menu-cont">
            <div className="main-header3__full-menu" ref={fullMenuRef}>
              <ul className="main-header3__full-menu-links">
                <Link href="/">
                  <li
                    className="main-header3__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/collection">
                  <li
                    className="main-header3__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Shop
                  </li>
                </Link>
                <Link href="/collection">
                  <li
                    className="main-header3__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Collection
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className="main-header3__full-menu-link"
                    onClick={() => {
                      setshowFullMenu(false)
                    }}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="main-header3__full-menu-social">
                <img
                  src="./png/twitter.png"
                  className="main-header3__full-menu-social-icon"
                />
                <img
                  src="./png/yt.png"
                  className="main-header3__full-menu-social-icon"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header3__full-menu-social-icon"
                />
                <img
                  src="./png/yt.png"
                  className="main-header3__full-menu-social-icon"
                />
                <img
                  src="./png/twitter.png"
                  className="main-header3__full-menu-social-icon"
                />
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  )
}
