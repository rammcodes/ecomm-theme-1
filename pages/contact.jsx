import Head from 'next/head'

export default function Collection() {
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <section className="contact-main">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">Contact Us</span>
            <span className="heading-section__bottom">
              Let us know if you have any questions, or any inquiries. We will
              get back within 24 Hours.
            </span>
          </h2>
          <div className="contact-main__form-cont">
            <form action="" className="contact-main__form">
              <div className="contact-main__form-inputs">
                <input
                  placeholder="Name"
                  type="text"
                  className="contact-main__form-input"
                />
                <input
                  placeholder="Email"
                  type="text"
                  className="contact-main__form-input"
                />
              </div>
              <textarea
                placeholder="Message"
                name=""
                id=""
                cols="30"
                rows="12"
                className="contact-main__form-tarea"
              ></textarea>
              <button className="contact-main__form-submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <section className="contact-faq">
        <div className="container">
          <h2 className="heading heading-section heading-section--cent">
            <span className="heading-section__main">
              Frequently Asked Questions (FAQ)
            </span>
          </h2>
          <div className="contact-faq__main">
            <div className="contact-faq__item">
              <div className="contact-faq__item-que">
                How fast is the shipping?
                <img
                  src="./png/arrow-up-theme.png"
                  className="contact-faq__item-que-arrow-open"
                  alt="arrow"
                />
              </div>
              <div className="contact-faq__item-ans">
                The shipping time varies with different products. We offer Fast
                Delivery as part of our service, so it won’t take much time to
                deliver any furniture.
              </div>
            </div>
            <div className="contact-faq__item">
              <div className="contact-faq__item-que">
                How fast is the shipping?
                {/* <img
                  src="./png/arrow-up-theme.png"
                  className="contact-faq__item-que-arrow-open"
                  alt="arrow"
                /> */}
                <img
                  src="./png/arrow-up.png"
                  className="contact-faq__item-que-arrow"
                  alt="arrow"
                />
              </div>
              {/* <div className="contact-faq__item-ans">
                The shipping time varies with different products. We offer Fast
                Delivery as part of our service, so it won’t take much time to
                deliver any furniture.
              </div> */}
            </div>
            <div className="contact-faq__item">
              <div className="contact-faq__item-que">
                How fast is the shipping?
                {/* <img
                  src="./png/arrow-up-theme.png"
                  className="contact-faq__item-que-arrow-open"
                  alt="arrow"
                /> */}
                <img
                  src="./png/arrow-up.png"
                  className="contact-faq__item-que-arrow"
                  alt="arrow"
                />
              </div>
              {/* <div className="contact-faq__item-ans">
                The shipping time varies with different products. We offer Fast
                Delivery as part of our service, so it won’t take much time to
                deliver any furniture.
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
