import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
        <Weather defaultCity="Port Elizabeth," defaultCountry="RSA"/>
        <footer>
          This app was built by <a href="https://www.github.com/codingpwincess">Lunathi M. Ndlondlo</a> using React hosted on <a href="https://www.netlify.com/codingpwincess">Netlify</a>
        </footer>
    </div>
  );
}

export default App;
