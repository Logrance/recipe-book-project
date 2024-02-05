// ? style
import './App.css';

// components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <section className='app'>
      <Navbar />
      <main className='app__container'></main>
      <Footer></Footer>
    </section>
  );
}

export default App;
