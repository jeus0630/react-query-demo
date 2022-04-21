import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import HomePage from './components/Home.page';
import RQSuperHeroPage from './components/RQSuperHero.page';
import { ParallelQueryPage } from './components/ParallelQuery.page';

function App() {
  return (
    
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage></RQSuperHeroPage>}></Route>
            <Route path='/super-heroes' element={<SuperHeroesPage />}/>
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
            <Route path='/' element={<HomePage />}/>
            <Route path="/rq-parallel" element={<ParallelQueryPage></ParallelQueryPage>}></Route>
          </Routes>
        </div>
      </Router>
    
  )
}

export default App
