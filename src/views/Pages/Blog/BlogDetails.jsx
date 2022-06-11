import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../../components/Helmet";
import BlogDetailsForm from "../../../components/form/BlogDetailsForm";

const BlogDetails = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Blog Details" />
      {/* End Page SEO Content */}

      {/* =============================================
            Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five bg-white">
        <img
          src="images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper ">
          <div className="container">
            <div className="col-lg-10 m-auto text-center">
              <h6 className="page-title">Our News</h6>
              <h1 className="heading">
                <span>
                  Quis Nostr Exercitation
                  <img src="images/shape/line-shape-11.svg" alt="" />
                </span>{" "}
                Laboris nisi
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-12 feature-blog-one width-lg blog-details-post-v1">
              <div className="post-meta">
                <img
                  src="images/blog/media_28.png"
                  alt="media post"
                  className="image-meta"
                />
                <div className="tag">23 Apr. 2020</div>
                <h3 className="title">
                  Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip exeal
                  nothing.
                </h3>
                <p>
                  Tomfoolery crikey bits and bobs brilliant bamboozled down the
                  pub amongst brolly hanky panky, cack bonnet arse over tit
                  burke bugger all mate bodge. cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est
                  laborum.Suspendisse interdum consectetur libero id faucibu
                  nisl. Lacus vel facilisis volutpat est velit egestas.
                </p>
                <p>
                  Tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida cum. Sit amet ris nullam eget felis. Enim praesent
                  elementum facilisis leo. Ultricies leo integer. all mate
                  bodge. cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt
                </p>
                <blockquote className="blog-quote">
                  If you’ve been waiting for an invitation, this calligraphy is
                  it. Commissioned by Notebook hand-lettered design for a
                  poster. Quote is Notebook Building 8 VP’s Regina Dugan—and
                  mine.
                </blockquote>
                <p>
                  Tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida cum. Sit amet ris nullam eget felis. Enim praesent
                  elementum facilisis leo. Ultricies leo integer.
                </p>
                <img
                  src="images/blog/media_29.png"
                  alt="media post"
                  className="image-meta mt-35"
                />
                <div className="mark-text">
                  This response is important for our ability to from mistakes
                  but it alsogives rise to self-criticism.
                </div>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in the future. The same is true as we
                  experienc the emotional sensation of stress from our first
                  instances. We quickly learn to fear and thus automatically.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h4>Work Harder & Gain Succsess.</h4>
                <p>
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in que future. The same Duis aute
                  irure dolor in reprehenderit .
                </p>
                <p>
                  is true as we experience the emotional sensation of stress
                  from our firs social rejection ridicule.We quickly learn to
                  fear and thus automatically. potentially stressful situation
                  of all kinds, including the most common of all.
                </p>
                <div className="d-sm-flex align-items-center justify-content-between share-area">
                  <ul className="tag-feature d-flex">
                    <li>Tag: &nbsp;</li>
                    <li>
                      <a href="#">business,</a>
                    </li>
                    <li>
                      <a href="#">makreting,</a>
                    </li>
                    <li>
                      <a href="#">tips</a>
                    </li>
                  </ul>
                  <ul className="share-option d-flex align-items-center">
                    <li>Share</li>
                    <li>
                      <a href="#" style={{ background: " #F6616F" }}>
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ background: " #41CFED" }}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ background: " #588DE7" }}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /End post content  */}

              <div className="comment-area">
                <h3 className="title">2 Comments</h3>
                <div className="single-comment">
                  <div className="d-flex">
                    <img
                      src="images/blog/media_30.png"
                      alt="blog post"
                      className="user-img"
                    />
                    <div className="comment">
                      <h6 className="name">Al Hasani</h6>
                      <div className="time">13 June, 2018, 7:30pm</div>
                      <p>
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of discomfort in future. The same true
                        we experience{" "}
                      </p>
                      <button className="reply">Reply</button>
                    </div>
                    {/* /.comment */}
                  </div>
                </div>
                {/* /.single-comment */}
                <div className="single-comment">
                  <div className="d-flex">
                    <img
                      src="images/blog/media_31.png"
                      alt="blog post"
                      className="user-img"
                    />
                    <div className="comment">
                      <h6 className="name">Rashed ka.</h6>
                      <div className="time">13 June, 2018, 7:30pm</div>
                      <p>
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of discomfort in future. The same true
                        we experience{" "}
                      </p>
                      <button className="reply">Reply</button>
                    </div>
                    {/*  /.comment */}
                  </div>
                </div>
                {/* /.single-comment */}
              </div>
              {/* /.comment-area */}

              <div className="comment-form-section m0">
                <h3 className="title">Leave A Comment</h3>
                <p>
                  <Link to="/login">Sign in</Link> to post your comment or
                  singup if you dont have any account.
                </p>
                <div className="form-style-light">
                  <BlogDetailsForm />
                </div>
                {/* /.form-style-light */}
              </div>
              {/* /.comment-form-section */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}
    </div>
  );
};

export default BlogDetails;
