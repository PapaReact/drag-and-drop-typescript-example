import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? "red" : undefined,
  };

  return (
    <div className="todoList" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable;
