import { useState } from "react";
import { CirclePlus } from "./Icons";
import { InputContainer } from "./styled/InputContainer";
import { useTodoStore } from "../store/TodoStore";
import { toast } from "sonner";

export function InputText() {
  const [title, setTitle] = useState('')
  const { createTodo } = useTodoStore(state => state)
  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      return toast.error('Lo sentimos, el campo no puede estar vacio!')
    }
    createTodo(title)
    setTitle('')
    toast.success('Tarea Creada Exitosamente!')
  }
  return (
    <form onSubmit={(e) => onHandleSubmit(e)}>
      <InputContainer>
        <span className="circle"></span>
        <button className="btn">
          <CirclePlus />
        </button>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" 
          placeholder="Create a new Todo..." 
        />
      </InputContainer>
    </form>
  );
}
