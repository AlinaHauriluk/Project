import React, { useState } from "react";
import {
  ReservationSection,
  ReservationTitle,
  ReservationInput,
  ReservationSelect,
  ReservationOption,
  ReservationButton,
  Form,
} from "./reservation";
import { FlexColumnContainer, FlexCenter } from "../../box/flexBox";
import { BlockSubTitle } from "../../text/text";

const Reservation = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [timeValue, setTimeValue] = useState<string>("2 PM");
  const [personValue, setPersonValue] = useState<string>("2 person");

  const workingHours = [
    { id: 1, time: "10 AM" },
    { id: 2, time: "11 AM" },
    { id: 3, time: "12 PM" },
    { id: 4, time: "1 PM" },
    { id: 5, time: "2 PM" },
    { id: 6, time: "3 PM" },
    { id: 7, time: "4 PM" },
    { id: 8, time: "5 PM" },
    { id: 9, time: "6 PM" },
    { id: 10, time: "7 PM" },
    { id: 11, time: "8 PM" },
    { id: 12, time: "9 PM" },
    { id: 13, time: "10 PM" },
    { id: 14, time: "11 PM" },
  ];

  const personCount = [
    { id: 1, person: "2 person" },
    { id: 2, person: "3 person" },
    { id: 3, person: "4 person" },
    { id: 4, person: "5 person" },
    { id: 5, person: "6 person" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert(
      `Message sent - reservation for the ${inputValue} at ${timeValue} for ${personValue}`
    );
    e.preventDefault();
  };

  const handleChangeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeValue(e.target.value);
  };

  const handleChangePerson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonValue(e.target.value);
  };

  return (
    <ReservationSection>
      <FlexColumnContainer>
        <BlockSubTitle>5 Stars</BlockSubTitle>
        <ReservationTitle>Make a Reservation</ReservationTitle>
        <Form onSubmit={handleSubmit}>
          <FlexCenter>
            <ReservationInput
              type="date"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ReservationSelect value={timeValue} onChange={handleChangeTime}>
              {workingHours.map((item) => (
                <ReservationOption key={item.id}>{item.time}</ReservationOption>
              ))}
            </ReservationSelect>
            <ReservationSelect
              value={personValue}
              onChange={handleChangePerson}
            >
              {personCount.map((item) => (
                <ReservationOption key={item.id}>
                  {item.person}
                </ReservationOption>
              ))}
            </ReservationSelect>
          </FlexCenter>
          <ReservationButton>Make a Reservation</ReservationButton>
        </Form>
      </FlexColumnContainer>
    </ReservationSection>
  );
};

export default Reservation;
