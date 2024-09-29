import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dev from './components/Dev'
import Layout from './components/Layout'
import Placeholder from './components/Placeholder'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/public-page/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/public-page/dev" element={<Dev />} />
          <Route path="/public-page/lang" element={<Placeholder />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
