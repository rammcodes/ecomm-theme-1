export default function MainFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__top">
        <div className="container">
          <div className="main-footer__top-row">
            <div className="main-footer__top-row-item">
              <div className="main-footer__brand-details">
                <h3 className="main-footer__logo">SELENTIAL</h3>
                <div className="main-footer__socials">
                  <img src="./png/yt.png" className="main-footer__social-img" />
                  <img
                    src="./png/twitter.png"
                    className="main-footer__social-img"
                  />
                  <img src="./png/yt.png" className="main-footer__social-img" />
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
  )
}
