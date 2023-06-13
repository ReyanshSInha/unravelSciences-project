import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClubSection from './components/ClubSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useState } from 'react';
import Navmenu from './components/Navmenu';

function App() {

  const [mainModalState, setMainModalState] = useState(false)
  const [cardId, setCardId] = useState(0)
  const [hamburgerState, setHamburgerState] = useState(false)

  const mainModalStateHandler = (data) => {
      setMainModalState(data)
  }

  const cardIdCollector = (id) => {
    setCardId(id)
  }

  const hamburgerDataCollector = (data) => {
    setHamburgerState(data)
  }

  return (
    <div className="App">
        {mainModalState ? <Modal cardId={cardId} mainModalStateHandler = {mainModalStateHandler}/> : ""}
        <Navbar hamburgerDataCollector={hamburgerDataCollector}/>
        <Navmenu navMenuState={hamburgerState}/>
        <Hero/>
        <ClubSection cardIdCollector={cardIdCollector} mainModalStateHandler = {mainModalStateHandler}/>
        <Footer/>
    </div>
  );
}

export default App;
