import './styles/foundation.min.css'
import './styles/custom.css'
import Routes from './routes'
import MobileHeader from './components/MobileHeader/MobileHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <div className="off-canvas-content" data-off-canvas-content>
          <MobileHeader name="react test"/>
          <Header name="testing"/>
          <Routes name="testing"/>
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
