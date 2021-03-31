import Head from 'next/head'
import { useState } from 'react'

const faqs = [
  {
    que: `How fast is the shipping?`,
    ans: `The shipping time varies with different products. We offer Fast
        Delivery as part of our service, so it won’t take much time to
        deliver any furniture.`,
  },
  {
    que: `How fast is the shipping?`,
    ans: `The shipping time varies with different products. We offer Fast
        Delivery as part of our service, so it won’t take much time to
        deliver any furniture.`,
  },
  {
    que: `How fast is the shipping?`,
    ans: `The shipping time varies with different products. We offer Fast
        Delivery as part of our service, so it won’t take much time to
        deliver any furniture.`,
  },
]

export default function Collection() {
  const [currFaq, setcurrFaq] = useState(0)
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
            {faqs.map((item, idx) => {
              return (
                <div key={idx} className="contact-faq__item">
                  <div
                    className="contact-faq__item-que"
                    onClick={() => {
                      if (currFaq === idx) {
                        setcurrFaq(null)
                      } else {
                        setcurrFaq(idx)
                      }
                    }}
                  >
                    {item.que}
                    {currFaq === idx ? (
                      <img
                        src="./png/arrow-up-theme.png"
                        className="contact-faq__item-que-arrow-open"
                        alt="arrow"
                      />
                    ) : (
                      <img
                        src="./png/arrow-up.png"
                        className="contact-faq__item-que-arrow"
                        alt="arrow"
                      />
                    )}
                  </div>
                  {currFaq === idx ? (
                    <div className="contact-faq__item-ans">{item.ans}</div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
