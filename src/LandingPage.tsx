import edulogo from './assets/logo.png';
const LandingPage = () => {
  return (
    <div className='flex bg-white'>
        <div className='flex flex-col-reverse bg-white md:py-[311px] md:px-[100px] md:w-[77.5rem] md:h-[28.75rem] items-center md:justify-between md:flex-row'>
        <div className='flex flex-col items-center px-2 md:item-left '>
        <h1 className='max-w-md mt-6 text-4xl font-bold text-center md:text-left '>Access Unlimited Communications with our Platform</h1>
        <p className='max-w-sm py-4 text-center mt-6 md:text-left md:max-w-md'>eduCENTRAL is a platform  for creative expression and collaboration, with features like a customizable profile, portfolio, and tools for creating and sharing content. A place to discover and join communities centered around shared interests, opinions and ideas with features like forums, and groups. </p>
        
        <a href="#" className='mt-14 p-3 px-6 pt-4 pb-4 text-white bg-[#6D35DE] rounded-l-xl rounded-r-xl text-center'>
            Login as an admin
        </a>
        <a href="#" className='p-3 mt-7 px-6 pt-4 pb-4 text-white bg-[#0539B4] rounded-l-xl rounded-r-xl text-center'>
            Login as member
        </a>
        
        </div>
        <img className='mt-14  w-[12rem] h-[12rem] md:w-[20rem] md:h-[20rem]' src={edulogo} alt="" />

        </div>

    </div>
  )
}

export default LandingPage