import './App.css';
import Content from './Components/ContentPage/ContentPage';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
        <Header />
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
