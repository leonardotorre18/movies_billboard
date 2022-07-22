import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import Netflix from '../views/Netflix';
import Hbo from '../views/Hbo'
import Disney from '../views/Disney'


export default function Navigation () {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/netflix' element={<Netflix />} />
      <Route path='/hbo' element={<Hbo />} />
      <Route path='/disney' element={<Disney />} />
    </Routes>
  )
}
