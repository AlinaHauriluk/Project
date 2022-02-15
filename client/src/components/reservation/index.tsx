import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ReservationSection, ReservationTitle } from "./reservation";
import { FlexColumnContainer, FlexCenter } from "../../box/flexBox";
import "react-datepicker/dist/react-datepicker.css";
import {
  ButtonForm,
  Form,
  Calendar,
  DatepickerContainer,
  InputTime,
  InputPerson,
} from "../../box/form";
import { BlockDescription } from "../../box/absoluteBox";
import { BlockSubTitle } from "../../text/text";

type FormValues = {
  date: Date;
  time: string;
  persons: string;
};

const Reservation = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data, { submitCount }));

  return (
    <ReservationSection>
      <FlexColumnContainer>
        <BlockSubTitle>5 Stars</BlockSubTitle>
        <ReservationTitle>Make a Reservation</ReservationTitle>
        <Form onSubmit={onSubmit}>
          <FlexCenter>
            <Controller
              name="date"
              defaultValue={new Date()}
              control={control}
              render={({ field }) => (
                <DatepickerContainer>
                  <Calendar
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    scrollableYearDropdown
                    onChange={(e) => field.onChange(e)}
                  />
                </DatepickerContainer>
              )}
            />

            <InputTime
              type="time"
              defaultValue="10:00"
              min="10:00"
              max="22:00"
              step="1800"
              {...register("time", { required: true })}
            />
            {errors.time && "Required field"}

            <InputPerson
              type="number"
              placeholder="number of persons"
              max="6"
              min="1"
              {...register("persons", { required: true })}
            />
            {errors.persons && alert("Required field")}
          </FlexCenter>
          <ButtonForm>Make a Reservation</ButtonForm>
        </Form>
      </FlexColumnContainer>
    </ReservationSection>
  );
};

export default Reservation;
