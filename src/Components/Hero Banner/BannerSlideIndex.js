import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const options = {
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
  };

  const slides = [
    {
      bgImg: "assets/images/product-ad/01.jpg",
      title: "Custom Scarf",
      specs: ["No Minimums", "Custom Design", "Made in UK"],
      subtitle: "Welcome Knitting World",
      button: "Shop Now",
    },
    {
      bgImg: "assets/images/bg/slider4.jpeg",
      title: "Leading the Knitwear Evolution",
      subtitle: "Welcome Knitting World",
      button: "Shop Now",
    },

    // {
    //   bgImg: "assets/images/bg/footbal-bar-scarf.jpg",
    //   specs: ["No Minimums", "Custom Design", "Made in UK"],
    //   title: "Football Scarf",
    //   subtitle: "Welcome Knitting World",
    //   button: "Shop Now",
    // },

    // {
    //   bgImg: "assets/images/bg/football-team.jpg",
    //   title: "Latest Scarves Collection",
    //   subtitle: "2024 Latest Style",
    //   button: "View Collection",
    // },
  ];

  return (
    <div>
      <OwlCarousel
        className="banner-slider owl-carousel no-pb owl-2"
        {...options}
        navText={[
          "<span class='las la-arrow-left'><span></span></span>",
          "<span class='las la-arrow-right'><span></span></span>",
        ]}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="item bg-pos-rt"
            style={{ backgroundImage: `url(${slide.bgImg})` }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                  <h6 className="font-w-6 text-primary animated3">
                    {slide.subtitle}
                  </h6>
                  <h1 className="mb-4 animated3">{slide.title}</h1>
                  {slide.specs ? (
                    <h4 className="mb-4 animated3">
                      <ul
                        className="ml-5 animated3"
                        style={{ color: "#007bff" }}
                      >
                        <li>No Miniums</li>
                        <li>Custom Design</li>
                        <li>Made in UK</li>
                      </ul>
                    </h4>
                  ) : ""}
                  {/* <h4 className="mb-4 animated3">
                  <ul className="ml-5 animated3" style={{color:'#007bff'}}>
                  <li>
                    No Miniums
                  </li>
                  <li>
                   Custom Design
                  </li>
                  <li>
                   Made in UK
                  </li>
                 </ul>
                  </h4> */}

                  <div className="animated3">
                    <Link
                      className="btn btn-primary btn-animated"
                      to="/football-scarves"
                    >
                      {slide.button}
                    </Link>
                  </div>
                  <div className="hero-circle animated4"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;
