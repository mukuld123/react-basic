import './App.css';
import Greet from './components/Greet';
import State from './components/State';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import EventHandler from './components/EventHandler';
import ParentComp from './components/ParentComp';
import StyleElements from './components/StyleElements';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/* <Greet something='something-there'>
        Hey there
      </Greet>
      <Welcome something='this-something'/>
      <State/> */}

      {/* <Counter addValue='4'/> */}
      {/* <EventHandler/> */}
      {/* <ParentComp /> */}
      {/* <StyleElements/> */}
      <Form/>
    </div>
  );
}

export default App;
