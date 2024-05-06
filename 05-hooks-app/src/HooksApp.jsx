import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"
import { FocusScreen } from "./04-useRef/FocusScreen"
import { Layout } from "./05-useLayoutEffect/Layout"
import { CallbackHook } from "./06-memos/CallbackHook"
import { MemoHook } from "./06-memos/MemoHook"
import { Memorize } from "./06-memos/Memorize"
import { Padre } from "./07-tarea/Padre"
// import "./08-useReducer/intro-reducer"
import { TodoApp } from "./08-useReducer/TodoApp"

export const HooksApp = () => {
  return (
    <>
      <h1>Hooks App</h1>
      <CounterApp />
      <div style={{ height: "20px" }}/>
      <CounterWithCustomHook />
      <div style={{ height: "20px" }}/>
      <SimpleForm />
      <div style={{ height: "20px" }}/>
      <FormWithCustomHook />
      <div style={{ height: "20px" }}/>
      <MultipleCustomHooks />
      <div style={{ height: "20px" }}/>
      <FocusScreen />
      <div style={{ height: "20px" }}/>
      <Layout />
      <div style={{ height: "20px" }}/>
      <Memorize />
      <div style={{ height: "20px" }}/>
      <MemoHook />
      <div style={{ height: "20px" }}/>
      <CallbackHook />
      <div style={{ height: "20px" }}/>
      <Padre />
      <div style={{ height: "20px" }}/> 
      <TodoApp />
      <div style={{ height: "20px" }}/> 
    </>
  )
}
