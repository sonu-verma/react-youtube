import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="mt-4 text-lg">Something went wrong.</p>
      <p className="mt-2 text-gray-500">Please try again later.</p>
      <p className="mt-2 text-gray-500"><Link to="/">Home</Link></p>
    </div>
  )
}
export default ErrorPage