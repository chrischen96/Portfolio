import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <header>
        <Header />
      </header>
      <main>
        <div data-bs-spy="scroll" data-bs-target="#homenav" data-bs-offset="100px" className="scrollspy bg-body-tertiary" tabIndex="0">
            <Home />
            <Resume />
            <Projects />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
