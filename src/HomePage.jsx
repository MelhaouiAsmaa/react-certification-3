import { Link } from "react-router-dom";

export function HomePage(){
    return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <nav className="flex flex-col space-y-4 text-black text-2xl">
        <Link to="/exercise1" className="btn btn-dark me-3 hover:underline">Exercise 1</Link>
        <Link to="/exercise2" className="btn btn-dark me-3 hover:underline">Exercise 2</Link>
        <Link to="/exercise3" className="btn btn-dark hover:underline">Exercise 3</Link>
      </nav>
    </div>
    )
}