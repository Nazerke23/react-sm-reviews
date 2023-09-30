import React, { useState } from "react";
import people from "./data";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = useState(people[2]);

  //0-1-2-3-0-1-2-3-0
  //random number between 0 ... 3

  function handleSupriseMe() {
    const random = Math.floor(Math.random() * 4);
    setPerson(people[random]);
  }

  function rightArrow(index) {
    if (index === 3) index -= 4;
    index++;
    setPerson(people[index]);
  }

  function leftArrow(index) {
    if (index === 0) index += 4;
    index--;
    setPerson(people[index]);
  }

  return (
    <>
      <div className="white-container">
        <div className="review">
          <div className="img-container">
            <img src={person.image} style={{ width: "100px" }} alt="" />
          </div>
          <h3>{person.name}</h3>
          <h1>{person.id}</h1>
          <h4>{person.job}</h4>
          <p>{person.text}</p>
          <button onClick={() => leftArrow(person.id - 1)}>&larr;</button>
          <button onClick={() => rightArrow(person.id - 1)}>&rarr;</button>
          <br />
          <button onClick={handleSupriseMe}>Suprise Me</button>
        </div>
      </div>
    </>
  );
};

export default Review;
