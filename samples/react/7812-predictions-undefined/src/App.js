import "./App.css";
import { useState } from "react";
import Amplify, { Predictions } from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider()); // you might want to try catch this if you're hot reloading.

function App() {
  const [translatedText, setTranslatedText] = useState("");
  const translate = async () => {
    const param = {
      translateText: {
        source: {
          text: "Hello world",
        },
        targetLanguage: "es",
      },
    };
    const { text } = await Predictions.convert(param);
    setTranslatedText(text);
  };
  return (
    <div className="App">
      <button onClick={() => translate()} style={{ margin: "3rem", height: "3rem" }}>
        translateText
      </button>
      <div>{translatedText}</div>
    </div>
  );
}

export default App;
