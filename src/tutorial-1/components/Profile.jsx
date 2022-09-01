import React from "react";

function Profile(props) {
  return (
    <div>
      <p>
        Привет, <b>{props.name.split(" ")[0]}!</b>
      </p>
      <p>
        Дата регистрации:{" "}
        {props.registredAt
          .toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .slice(0, -3)}
      </p>
    </div>
  );
}

export default Profile;
