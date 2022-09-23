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
      <ConditionalRendering/>

    </div>
  );
}

export default App;
