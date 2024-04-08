import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Johnson Holmes";
const profession = "Software Developer";
const graduationYear = 2015;

const Box = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>profession: {props.profession}</p>
      <p>Graduation year: {props.graduationYear}</p>
    </div>
  );
};

const Owndemo = () => {
  return (
    <div>
      <h1>Hello, my name is {name}</h1>
      <p>I have been a graduate of Finance for {2024 - graduationYear} years</p>
      <p>I'm currently a {profession}.</p>
      <Box
        name="Sulaimon Ekundayo"
        profession="Software Tester"
        graduationYear="2010"
      />
      <Box
        name="David Noraly"
        profession="Teacher"
        graduationYear="2014"
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Owndemo />
  </React.StrictMode>
);
