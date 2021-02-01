import React from "react";
import { useDrag } from "react-dnd";
import Editor from "../editor/editor";
import { CanvasCard } from "../canvas/constants";
import { VscGripper } from "react-icons/vsc";

declare interface CardProps {
  item: CanvasCard;
  onRemove;
  hideSourceOnDrag: boolean;
}

const Card = (props: CardProps) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: props.item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      id={props.item.id}
      ref={preview}
      className="card"
      style={{
        display: isDragging && props.hideSourceOnDrag ? "none" : "flex",
        opacity: isDragging ? 0.5 : 1,
        top: props.item.y,
        left: props.item.x,
      }}
    >
      <div
        ref={drag}
        id={`${props.item.id}-drag-handle`}
        className="card-drag-handle"
      >
        <VscGripper />
      </div>
      <Editor />
    </div>
  );
};

export default Card;