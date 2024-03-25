import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialCrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 1000,
  };
  return (
    <div className="text-white w-3/4 mx-auto mt-8 mb-10">
      <Slider {...settings}>
        <div>
          <div className="flex items-center justify-start gap-x-4 bg-white text-black mb-8 mx-1 p-5 md:p-8">
            <div>
              <Image
                src={"/Testimonials/testimonial-01.webp"}
                alt="testimonial-logo1"
                width={200}
                height={200}
                // className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <div>
              <h3 className=" font-bold italic text-2xl mb-4">
                Best Service provided
              </h3>
              <p className="italic text-[#858899] text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium quod eveniet.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start gap-x-4 bg-white text-black mb-8 mx-1 p-5 md:p-8">
            <div>
              <Image
                src={"/Testimonials/testimonial-02.webp"}
                alt="testimonial-logo1"
                width={200}
                height={200}
                // className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <div>
              <h3 className=" font-bold italic text-2xl mb-4">
                Best Service provided
              </h3>
              <p className="italic text-[#858899] text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium quod eveniet.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start gap-x-4 bg-white text-black mb-8 mx-1 p-5 md:p-8">
            <div>
              <Image
                src={"/Testimonials/testimonial-01.webp"}
                alt="testimonial-logo1"
                width={200}
                height={200}
                // className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <div>
              <h3 className=" font-bold italic text-2xl mb-4">
                Best Service provided
              </h3>
              <p className="italic text-[#858899] text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium quod eveniet.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start gap-x-4 bg-white text-black mb-8 mx-1 p-5 md:p-8">
            <div>
              <Image
                src={"/Testimonials/testimonial-02.webp"}
                alt="testimonial-logo1"
                width={200}
                height={200}
                // className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <div>
              <h3 className=" font-bold italic text-2xl mb-4">
                Best Service provided
              </h3>
              <p className="italic text-[#858899] text-base font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium quod eveniet.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialCrousel;
