// components/DateComponent.js

import React from "react";

const DateComponent = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
