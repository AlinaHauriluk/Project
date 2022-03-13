import styled from "styled-components";
import { TextareaForm } from "../../box/form";

export const ProfileTestimonialsWrapper = styled.div`
  width: 50%;
`
export const ProfileTestimonialsPhoto = styled.div`
  background-image: url(${require("../../assets/profileTestimonialsImage.jpg")});
  width: 340px;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  margin-left: auto;
`
export const ProfileTestimonialsTextarea = styled(TextareaForm)`
  width: 80%;
  margin-left: 50px; 
  background: url(${require("../../assets/profileTestimonialIcon.png")});
  background-repeat: no-repeat;
  background-size: 15%; 
  background-position: 10% 50%;
`