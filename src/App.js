import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import ComponentWithoutJSX from './Components/ComponentWithoutJSX';
import PropsFunction from './Components/PropsFunction';
import PropsClass from './Components/PropsClass';
import State from './Components/State';
import Counter from './Components/Counter';

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
      <Counter/>

    </div>
  );
}

export default App;
