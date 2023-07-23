import { Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import './App.css'
import Header from './components/header'

function App() {
  return (
    <div className='app'>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/resume' element={<Resume/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
