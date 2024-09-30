const product = () => {
  return (
    <>
      <section class="product_section p_section1 product_black_section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="product_area">
                <div className="product_tab_button">
                  <ul className="nav" role="tablist">
                    <li>
                      <a
                        href="#featured"
                        className="active"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="featured"
                        aria-selected="true"
                      >
                        Featured
                      </a>
                    </li>
                    <li>
                      <a
                        href="#arrivals"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="arrivals"
                        aria-selected="false"
                      >
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#onsale"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="onsale"
                        aria-selected="false"
                      >
                        On-Sale
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="featured"
                    role="tabpane1"
                  >
                    <div class="product_container">
                      <div class="custom-row product_column3">
                        <div className="custom-col-5">
                          <div className="single_product">
                            <div className="product_thumb">
                              <a href="#" className="primary_img">
                                <img
                                  src="images/product/1.jpg"
                                  alt="product1"
                                />
                              </a>
                              <a href="#" className="secondary_img">
                                <img
                                  src="images/product/2.jpg"
                                  alt="product1"
                                />
                              </a>
                              <div className="quick_button">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#modal_box"
                                  data-placement="top"
                                  data-original-title="quick view"
                                >
                                  Quick View
                                </a>
                              </div>
                            </div>
                            <div className="product_content">
                              <div className="tag_cate">
                                <a href="#">Ring, Necklace</a>
                                <a href="#">Earrings</a>
                              </div>
                              <h3>
                                <a href="#">Necklace</a>
                              </h3>
                              <div className="price_box">
                                <span className="old_price">Rs. 45654</span>
                                <span className="current_price">Rs. 44015</span>
                              </div>
                              <div className="product_hover">
                                <div className="product_ratings">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ion-ios-star-outline"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="product_desc">
                                  <p>
                                    This is a gold ring with diamond and Lorem
                                    ipsum dolor sit amet.
                                  </p>
                                </div>
                                <div className="action_links">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-placement="top"
                                        title="Add to Wishlist"
                                        data-toggle="tooltip"
                                      >
                                        <span className="ion-heart"></span>
                                      </a>
                                    </li>
                                    <li className="add_to_cart">
                                      <a href="#" title="Add to Cart">
                                        Add to Cart
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="Compare">
                                        <i className="ion-ios-settings-strong"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default product