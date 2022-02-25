import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as _ from "./chefs-info"

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
        <_.ChefsInfoWrapper data-aos="fade-down" key={chef.id}>
          <_.ChefsInfoPhoto photo={chef.photo} />
          <_.ChefsInfoName>{chef.name}</_.ChefsInfoName>
          <_.ChefsInfoPosition>{chef.position}</_.ChefsInfoPosition>
        </_.ChefsInfoWrapper>
      ))}
    </>
  );
};

export default ChefsInfo;
