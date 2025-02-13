import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex-1 mt-80  font-bold text-center'>404 Not Found
        <Link className='bg-red-500 rounded-full px-4 py-2 m-4 hover:bg-green-500 ' to="/">Home</Link>
    </div>
  )
}

export default NotFoundPage