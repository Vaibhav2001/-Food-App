import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Error from './Components/Error'
import { useGlobalContext } from './Utils/GlobalContext'
import Restaurant from './Components/Restaurant'
import SliderItemData from './Components/SliderItemData'
import Menu from './Components/Menu'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {


   const{setLat, setLong} = useGlobalContext()


    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords?.latitude
        const long = position.coords?.longitude

        setLat(lat)
        setLong(long)
    })


  return (
    <div>
      <Toaster/>
       <Routes>
        <Route element = {<Landing/>} path='/' />
        <Route element = {<Landing/>} path='/home' />
        <Route element = {<Restaurant/>} path='/restaurants'/>
        <Route element={<Menu />} path="/menu/:resId" />
        <Route element={<SliderItemData />} path="/slider-data/:itemId/:text" />
        <Route path='*' element = {<Error />} />
       </Routes>
    </div>
  )
}

export default App
