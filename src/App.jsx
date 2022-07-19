import Header from './components/Header/Header';
import MyRoutes from './Routes';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
};

export default App;
