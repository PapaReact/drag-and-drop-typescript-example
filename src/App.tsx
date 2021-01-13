// Drag and Drop it likes it hot (dnd) - Typescript introduction - Portfolio 101

import React, { useState } from "react";
import "./App.css";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
  const containers = ["React", "Redux", "Typescript"];
  const [parent, setParent] = useState(null);

  type Skill = {
    [skill: string]: {
      text: string;
      image: string;
    };
  };

  const skillMap: Skill = {
    React: {
      text: "React is dope!",
      image: "https://cdn.worldvectorlogo.com/logos/react.svg",
    },
    Redux: {
      text: "Redux is a state management tool",
      image: "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
    },
    Typescript: {
      text: "Makes JS Strongly typed!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    },
  };

  function handleDragEnd(event: any) {
    const { over, active } = event;
    setParent(over ? active.id : null);
  }

  const draggableMarkup = (id: string) => (
    <Draggable id={id}>
      <img className="app__skillLogo" src={skillMap[id].image} alt="" />
    </Draggable>
  );

  return (
    <div className="app">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="app__skills">
          {containers.map((id) => (id !== parent ? draggableMarkup(id) : null))}
        </div>
        {parent ? (
          <h3 className="app__skillInstruction">
            Click a logo to reset or drag another to view more information
          </h3>
        ) : null}

        <Droppable key={"abcdef"} id={"abcdef"}>
          {parent === null ? (
            <div className="app__infoBox app__infoBox--inactive">
              <h3>Click & Drag a logo here to display more info...</h3>
            </div>
          ) : (
            <div className="app__infoBox">
              <img
                className="app__skillLogo"
                src={skillMap[parent!].image}
                alt=""
              />
              <h2>{parent}</h2>
              <h5>{skillMap[parent!].text}</h5>
            </div>
          )}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default App;
