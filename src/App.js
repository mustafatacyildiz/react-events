import './App.css';
import Addevents from './components/addEvents/AddEvents';
import EventBind from './components/eventBinding/EventBind';
import Form from './components/form/Form';
import KeyboardEvents from './components/keyboardEvents/KeyboardEvents';
import MouseEvent from './components/mouseEvents/MouseEvents'

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <Addevents /> */}
      {/* <MouseEvent /> */}
      {/* <Form /> */}
      {/* <KeyboardEvents /> */}
      <EventBind />

    </div>
  );
}

export default App;
