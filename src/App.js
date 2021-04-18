import './stylesheets/App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
