import React from "react";
import "./App.css";
import Empty from "./components/EmptyBlock";
import Phrase from "./components/Phrase";

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

function App() {
  const [phrases, setPhrase] = React.useState([]);

  const generate = () => {
    const takeRandomWord = (list) => {
      const randomIndex = Math.round(Math.random() * list.length);

      return list[randomIndex];
    };

    const [adj1, adj2, noun1] = [
      takeRandomWord(adjectivesArr),
      takeRandomWord(adjectivesArr),
      takeRandomWord(nounsArr),
    ];

    const phrase = `${adj1} ${adj2} ${noun1}`;

    setPhrase((prev) => [phrase, ...prev]);
  };

  return (
    <div className="wrapper">
      {phrases.length === 0 && <Empty />}

      <div className="list">
        {phrases.map((phrase) => (
          <Phrase key={phrase} text={phrase} />
        ))}
      </div>

      <button className="btn btn_generate" onClick={generate}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={() => setPhrase([])}>
        Очистить
      </button>
    </div>
  );
}

export default App;
