import { Link } from "react-router-dom"


const WithdrawSuccess = () => {
    return (
      <>
        <div className="h-screen flex justify-center items-center bg-black bg-opacity-40">
          <div className="absolute z-10 w-[70%] bg-white rounded-xl md:rounded-2xl h-[40vh] md:h-[50vh] md:w-[40%] border shadow-xl ">
          </div>
          <div className='z-20 md:w-[30%] mt-12 md:mt-0'>
            <div className='flex flex-col items-center justify-center'> 
              <h2 className='text-xl font-bold text-[#091913] text-center mx-2'>
              Withdraw successful
              </h2>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 3.75C36.9619 3.75 43.6387 6.51562 48.5616 11.4384C53.4844 16.3613 56.25 23.0381 56.25 30C56.25 36.9619 53.4844 43.6387 48.5616 48.5616C43.6387 53.4844 36.9619 56.25 30 56.25C23.0381 56.25 16.3613 53.4844 11.4384 48.5616C6.51562 43.6387 3.75 36.9619 3.75 30C3.75 23.0381 6.51562 16.3613 11.4384 11.4384C16.3613 6.51562 23.0381 3.75 30 3.75ZM26.73 35.1787L20.8988 29.3438C20.6897 29.1347 20.4415 28.9689 20.1684 28.8557C19.8953 28.7426 19.6025 28.6844 19.3069 28.6844C19.0112 28.6844 18.7185 28.7426 18.4454 28.8557C18.1722 28.9689 17.924 29.1347 17.715 29.3438C17.2928 29.7659 17.0556 30.3386 17.0556 30.9356C17.0556 31.5327 17.2928 32.1053 17.715 32.5275L25.14 39.9525C25.3485 40.1626 25.5964 40.3294 25.8697 40.4431C26.1429 40.5569 26.4359 40.6155 26.7319 40.6155C27.0278 40.6155 27.3209 40.5569 27.5941 40.4431C27.8673 40.3294 28.1153 40.1626 28.3237 39.9525L43.6987 24.5737C43.9106 24.3656 44.0791 24.1175 44.1946 23.8439C44.3101 23.5702 44.3703 23.2764 44.3717 22.9794C44.373 22.6824 44.3156 22.3881 44.2027 22.1134C44.0897 21.8387 43.9235 21.5891 43.7136 21.3789C43.5037 21.1688 43.2543 21.0023 42.9797 20.889C42.7052 20.7757 42.4109 20.7179 42.1139 20.719C41.8169 20.72 41.523 20.7798 41.2492 20.895C40.9754 21.0102 40.7272 21.1784 40.5188 21.39L26.73 35.1787Z" fill="#12A768"/>
              </svg>
              <Link to='/'>
              <button className="bg-[#2B7C5F] hover:bg-[#2B7C5F] text-white font-normal py-2 px-4 border border-[#AAAAAA] rounded w-full  mb-4">
                Go to Home page
              </button>
              </Link>
            
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default WithdrawSuccess