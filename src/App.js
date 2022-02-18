// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
// import Footer from './Footer';
// import footerr from './foot';
import Footerr from './foot';
import About from './About';


function App() {
  return (
    <div className="App">
      <Header/>
      <h1 class="display-1">ELECTROTHON 2K22</h1>
      <About/>
     {/* <Footer/> */}
    <Footerr/>
    </div>
  );
}

export default App;
