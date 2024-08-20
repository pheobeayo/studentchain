
import Navbar from "../components/Header/Header";



const Layout = ({children}) => {
  return (
    <>
    <div className="relative ">
      <header className="w-full ">
        <Navbar />
      </header>
      <div className='mt-4'>
        <main >{children} </main>
      </div>
      
    </div>
    </>
  );
};

export default Layout;
