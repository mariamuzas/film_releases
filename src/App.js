import './App.css';
import FilmReleaseConsole from './containers/FilmReleaseConsole'

function App() {
  return (
    <>
      <div className="App">
      <h1>Upcoming Film Releases for UK</h1>
      <hr />
      <FilmReleaseConsole />
      </div>
    </>
  );
}

export default App;
