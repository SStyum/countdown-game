import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy"/>
        <TimerChallenge title="Not easy"/>
        <TimerChallenge title="Getting tough"/>
        <TimerChallenge title="Pros only!"/>
      </div>
    </>
  );
}

export default App;
