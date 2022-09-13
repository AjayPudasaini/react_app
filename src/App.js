
import 'jquery'
import 'popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'


import './style/Main.css'


import { BrowserRouter } from 'react-router-dom';


toast.configure()
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
