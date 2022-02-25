import React, { useEffect } from "react";
import * as _ from "./testimonials";
import { Container } from "../../box/absolute-box";
import AOS from "aos";
import "aos/dist/aos.css";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const dataTestimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum tac ligula sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum tac ligula sapien",
    name: "James Smith",
    occupation: "client",
  },
  {
    id: 2,
    text: "Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.",
    name: "Kate Smith",
    occupation: "actress",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.",
    name: "Bob Adames",
    occupation: "client",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    speed: 2500,
    autoplay: true,
    autoplayButtonOutput: false,
  };

  return (
    <_.TestimonialsSection>
      <Container>
        <_.TestimonialsSubTitle>What they say</_.TestimonialsSubTitle>
        <_.TestimonialsTitle data-aos="flip-down">Testimonials</_.TestimonialsTitle>
        <_.TestimonialsQuote />
        <TinySlider settings={settings}>
          {dataTestimonials.map(testimonial => (
            <div key={testimonial.id}>
              <_.TestimonialsText>{testimonial.text}</_.TestimonialsText>
              <_.TestimonialsClientName> 
                {testimonial.name}
                <_.TestimonialsClient>
                  {testimonial.occupation}
                </_.TestimonialsClient>
              </_.TestimonialsClientName>
            </div>
          ))}
        </TinySlider>
      </Container>
    </_.TestimonialsSection>
  );
};

export default Testimonials;
