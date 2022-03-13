import { useEffect } from "react";
import { ProfileContainer } from "../../box/absolute-box";
import { FlexSpaceBetween } from "../../box/flex-box";
import { TitleProfile } from "../../text/text";
import { useForm } from "react-hook-form";
import { Form, ButtonForm, ErrorForm, SubmittedForm } from "../../box/form";
import {
  ProfileTestimonialsWrapper,
  ProfileTestimonialsPhoto,
  ProfileTestimonialsTextarea,
} from "./profile-testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

type FormValues = {
  testimonial: string;
};

const ProfileTestimonials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <ProfileContainer>
      <TitleProfile>You can leave your Testimonials here</TitleProfile>
      <FlexSpaceBetween>
        <Form onSubmit={onSubmit}>
          <ProfileTestimonialsTextarea
            {...register("testimonial", { minLength: 4, required: true })}
            maxLength={250}
            minLength={4}
            cols={60}
            rows={5}
            placeholder="Your Testimonial"
            data-aos="fade-down"
          />
          {errors.testimonial && <ErrorForm>Required Field</ErrorForm>}

          {isSubmitSuccessful && 
            <SubmittedForm
              onClick={(e) => (e.currentTarget.style.display = "none")}
            >
              Thank's for your Testimonial
            </SubmittedForm>
          }
          <ButtonForm>Send</ButtonForm>
        </Form>
        <ProfileTestimonialsWrapper>
          <ProfileTestimonialsPhoto data-aos="fade-right"/>
        </ProfileTestimonialsWrapper>
      </FlexSpaceBetween>
    </ProfileContainer>
  );
};

export default ProfileTestimonials;
