import React, {useEffect} from "react";
import { ContactMapInfo, ContactMapSection } from "./contact-map";
import { YMaps, Placemark } from "react-yandex-maps";
import { Container } from "../../box/absolute-box";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactMap = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const coordinates = [35.1815784, -120.7474753];

  return (
    <ContactMapSection>
      <YMaps>
        <Container>
          <ContactMapInfo
            defaultState={{ center: [35.1815784, -120.7474753], zoom: 8, lang:"en-US"}}
            data-aos="flip-down"
          >
            <Placemark geometry={coordinates} options={{iconColor: "#b49383"}} properties={{iconCaption: 'The Venue Restaurant'}} />
          </ContactMapInfo>
        </Container>
      </YMaps>
    </ContactMapSection>
  );
};

export default ContactMap;
