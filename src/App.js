<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import ComponentWithoutJSX from './Components/ComponentWithoutJSX';
import PropsFunction from './Components/PropsFunction';
import PropsClass from './Components/PropsClass';
import State from './Components/State';
import Counter from './Components/Counter';
import FunctionalEvent from './Components/FunctionalEvent';
import ClassEvent from './Components/ClassEvent';
import BindingEventHandler from './Components/BindingEventHandler';
import Parent from './Components/Parent';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import BasicForm from './Components/BasicForm';
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';
import Ref from './Components/Ref';
=======
import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./Components/FunctionComponent";
import ClassComponent from "./Components/ClassComponent";
import ComponentWithoutJSX from "./Components/ComponentWithoutJSX";
import PropsFunction from "./Components/PropsFunction";
import PropsClass from "./Components/PropsClass";
import State from "./Components/State";
import Counter from "./Components/Counter";
import FunctionalEvent from "./Components/FunctionalEvent";
import ClassEvent from "./Components/ClassEvent";
import BindingEventHandler from "./Components/BindingEventHandler";
import Parent from "./Components/Parent";
import ConditionalRendering from "./Components/ConditionalRendering";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import RenderProps from "./Components/RenderProps";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import CounterTwo from "./Components/CounterTwo";
>>>>>>> afe3517fecd4b99cd41936711f9a0e27199c5db9

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent/>
      <ClassComponent/>
      <ComponentWithoutJSX/> */}
      {/* <PropsFunction name= "Bean"/>
      <PropsFunction name= "Noddy">
        <button>Children prop</button>
        <p>Hello again </p>
      </PropsFunction>
      <PropsClass name = "Bean"/>
      <State/> */}
      {/* <Counter/> */}
      {/* <FunctionalEvent/>
      <ClassEvent/> */}
      {/* <BindingEventHandler/> */}
      {/* <Parent/> */}
      {/* <ConditionalRendering/> */}
<<<<<<< HEAD
      {/* <ListRendering/> */}
      {/* <BasicForm/> */}
      {/* <LifecycleA/> */}
      {/* <ParentComp/> */}
      <Ref/>
=======
      {/* <ClickCounter  name = 'Sapna'/>
      <HoverCounter /> */}
      {/* <RenderProps render = {(islogged)=> {
        return islogged ? 'sapna' :' Guest'
      }}/> */}
      <CounterTwo  renderCount ={(count,function1) =>{
        return <ClickCounterTwo count = {count} incrementCountHandler ={function1} />
      }}/>
>>>>>>> afe3517fecd4b99cd41936711f9a0e27199c5db9

    </div>
  );
}

export default App;
