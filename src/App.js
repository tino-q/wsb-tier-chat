import img from './wsb.jpg';
import './App.css';
import styled from 'styled-components';

const Link = styled.a`
  color: black;
`

const ORIGINAL_REDDIT_POST = "https://www.reddit.com/r/wallstreetbets/comments/l747hb/daily_discussion_thread_part_4_for_january_28_2021/gl4ma4c?utm_source=share&utm_medium=web2x&context=3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link href={ORIGINAL_REDDIT_POST}>stonk.chat reddit post</Link>
        <Link href="https://github.com/princefishthrower/wsb-tier-chat">collaborate on github</Link>
        <Link href="https://discord.gg/gXcqsepVm6">wsb devs discord</Link>
        <Link href="https://www.reddit.com/r/wallstreetbets/">r/wallstreetbets</Link>
        <img src={img} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
