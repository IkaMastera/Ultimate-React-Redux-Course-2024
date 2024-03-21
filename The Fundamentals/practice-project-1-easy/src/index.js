import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Card
        imageName="image1"
        personName="Irakli"
        personDescription="Irakla is best bitch"
      />
      <Card
        imageName="image2"
        personName="Giorgi"
        personDescription="Giorga suck dick men"
      />
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <h2>{props.imageName}</h2>;
      <div className="description">
        <h1>{props.personName}</h1>
        <p> {props.personDescription} </p>
      </div>
      <Skill skillName="javascript" skillIcon="icon1" />
      <Skill skillName="node" skillIcon="icon2" />
      <Skill skillName="next" skillIcon="icon3" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <p>{props.skillName}</p>
      <p>{props.skillIcon}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
