import { useState } from "react";
import "./App.css";
import Generator from "./components/Generator/Generator";

function App() {
  const string = "abcdefghijklmnopqrstuvwxyz";
  const numeric = "0123456789";
  const punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = (upperCase, lowerCase, numbers, symbols, length) => {
    let password = "";
    let possiblities = "";
    if (upperCase) {
      password +=
        string[Math.floor(Math.random() * string.length)].toUpperCase();
      possiblities += string.toUpperCase();
    }
    if (lowerCase) {
      password += string[Math.floor(Math.random() * string.length)];
      possiblities += string;
    }
    if (numbers) {
      password += numeric[Math.floor(Math.random() * numeric.length)];
      possiblities += numeric;
    }
    if (symbols) {
      password += punctuation[Math.floor(Math.random() * punctuation.length)];
      possiblities += punctuation;
    }
    for (let i = password.length; i < length; i++) {
      password += possiblities[Math.floor(Math.random() * possiblities.length)];
    }
    const shuffled = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");
    setGeneratedPassword(shuffled);
  };
  return (
    <div className="app__container">
      <Generator
        generatePassword={generatePassword}
        generatedPassword={generatedPassword}
      />
    </div>
  );
}

export default App;
