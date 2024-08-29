import Header from '../components/Header/Header'

import { Outlet } from 'react-router-dom'


const HomeLayout = () => {
  

  return  (
    <div>
      <header className='mb-40'>
      <Header />
      </header>
      <Outlet />
      
    </div>
  )
}

export default HomeLayout