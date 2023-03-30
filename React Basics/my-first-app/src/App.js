import './App.css';
import { Heading, Card } from './components';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <Heading firstName="Naman" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
