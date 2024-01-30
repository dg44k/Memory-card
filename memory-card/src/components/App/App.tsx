import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import cardsDate from '../../api/cardsDate';
import ScoreDisplay from '../Score/ScoreDisplay';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    console.log('Welcome to the club body!');
    
}, []);


  return (
    <div className='root'>
      <Header/>
      <ScoreDisplay />
      <Cards cards={cardsDate} />
      <Footer/>
    </div>
  )
}

export default App;
