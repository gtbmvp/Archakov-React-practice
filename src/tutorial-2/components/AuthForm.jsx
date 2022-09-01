import React from "react";

function AuthForm() {
  let inputObj = {};

  function handleChange(event) {
    const type = event.target.type;
    const value = event.target.value;

    inputObj[type] = value;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName !== "INPUT") continue;

      if (elements[i].value.trim() === "") {
        alert("Заполните все поля");
        return;
      }
    }

    console.log(inputObj);

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName === "INPUT") {
        elements[i].value = "";
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="E-Mail" onChange={handleChange} />
      <input type="password" placeholder="Пароль" onChange={handleChange} />
      <button>Войти</button>
    </form>
  );
}

export default AuthForm;
