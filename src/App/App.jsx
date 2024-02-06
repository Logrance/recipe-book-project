// ? style
import './App.css';

// components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import List from '../components/List/List';

function App() {
  return (
    <section className='app'>
      <Navbar />
      <main className='app__container'>
        <List />
      </main>
      <Footer></Footer>
    </section>
  );
}

export default App;
