import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import PersonalForm from "./components/Forms/PersonalForm";
import AdressForm from "./components/Forms/AdressForm";
import Result from "./components/Result";

function App() {
  const [formValues, setFormValues] = React.useState({});
  const navigate = useNavigate();

  const nextStep = (page) => {
    navigate(page);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PersonalForm nextStep={nextStep} saveValues={setFormValues} />
          }
        />
        <Route
          path="/adress"
          element={
            <AdressForm nextStep={nextStep} saveValues={setFormValues} />
          }
        />
        <Route path="/result" element={<Result formValues={formValues} />} />
      </Routes>
    </div>
  );
}

export default App;
