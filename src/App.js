
import './App.css';
import Footer from './components/Footer';
import Fullpage from './components/Fullpage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div id='__nuxt'>
        <div id='__layout'>
            <div>
            <Header/>
            <div class="header-empty small"></div>

            <div id="fullpage" class="fullpage-wrapper" style={{height: '100%', position: 'relative'}}>
              <div>
                 <Fullpage/>
                 <Footer/>
              </div>
            </div>
          

            </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
