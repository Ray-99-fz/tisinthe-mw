import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AppLayout = () => {
  return (
    <div className='bg-[#F1EBDD] min-h-screen '>

        <Navbar />
      
        <main className='max-w-[1120px] mx-auto'>
            <Outlet />
        </main>

    </div>
  )
}

export default AppLayout
