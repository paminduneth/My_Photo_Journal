import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Welcome to my PhotoJournal</h1>
          <h3>Pamindu Nethmana</h3>
          <AlbumMaker/>
        </div>
      </header>
    </div>
  );
}

export default App;