import React, { useEffect } from "react";
import {
  ChefsInfoWrapper,
  ChefsInfoPhoto,
  ChefsInfoName,
  ChefsInfoPosition,
} from "./chefsInfo";
import AOS from "aos";
import "aos/dist/aos.css";

interface ChefsInfoProps {
  chefs: Array<{id: number; photo: string; name: string; position: string;}>;
}

const ChefsInfo: React.FC <ChefsInfoProps> = ({chefs}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {chefs.map(chef => (
        <ChefsInfoWrapper data-aos="fade-down" key={chef.id}>
          <ChefsInfoPhoto photo={chef.photo} />
          <ChefsInfoName>{chef.name}</ChefsInfoName>
          <ChefsInfoPosition>{chef.position}</ChefsInfoPosition>
        </ChefsInfoWrapper>
      ))}
    </>
  );
};

export default ChefsInfo;
