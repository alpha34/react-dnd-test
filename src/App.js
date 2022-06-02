import "./styles.css";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", title: "공부" },
    { id: "2", title: "헬스" },
    { id: "3", title: "독서" },
    { id: "4", title: "산책" },
    { id: "5", title: "요리" },
  ]);
  // const handleChange = (result) => {
  //   if (!result.destination) return;
  //   console.log(result);
  //   const items = [...todos];
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setTodos(items);
  // };
  return (
    <DragDropContext >
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map(({ id, title }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    {title}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
