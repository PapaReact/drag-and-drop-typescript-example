import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      style={style}
      className="Draggable"
    >
      {props.children}
    </div>
  );
}

export default Draggable;
