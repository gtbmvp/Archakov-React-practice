import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <p>
          Привет, <b>{this.props.name.split(" ")[0]}!</b>
        </p>
        <p>
          Дата регистрации:{" "}
          {this.props.registredAt
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
}

export default Profile;
