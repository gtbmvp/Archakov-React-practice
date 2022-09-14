import React from "react";

function Result({ formValues }) {
  return (
    <>
      <h2>ИТОГО:</h2>
      <ul>
        {Object.entries(formValues).map(([field, value]) => {
          return (
            <li key={field}>
              {field} : {value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Result;
