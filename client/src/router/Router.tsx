import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'

const Router = () => {
  return (
    <Routes>
        <Route index element={<Home />}/>
    </Routes>
  )
}

export default Router