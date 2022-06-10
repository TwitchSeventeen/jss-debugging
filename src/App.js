import logo from './logo.svg';
import './App.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: () => ({
    color: 'red',
  }),
  link2: {
    backgroundColor: 'yellow',
  },
})

function App() {
  const cx = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={`${cx.link} ${cx.link2}`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
