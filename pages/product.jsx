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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
