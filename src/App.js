import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
        <Weather defaultCity="Port Elizabeth," defaultCountry="RSA"/>
        <footer>
          <p>Copyright &#169; 2025 Lunathi Mihlali Ndlondlo. All rights reserved.</p>
          This app was built by <a href="https://www.github.com/codingpwincess">Lunathi M. Ndlondlo</a> using React hosted on <a href="https://www.netlify.com/codingpwincess">Netlify</a>
        </footer>
    </div>
  );
}

export default App;
