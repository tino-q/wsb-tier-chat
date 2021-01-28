import img from './wsb.jpg';
import './App.css';
import styled from 'styled-components';

const Link = styled.a`
  color: black;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link href="https://discord.gg/gXcqsepVm6">wsb devs discord</Link>
        <Link href="https://www.reddit.com/r/wallstreetbets/">r/wallstreetbets</Link>
        <img src={img} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
