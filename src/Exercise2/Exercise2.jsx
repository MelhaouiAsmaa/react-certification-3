import { Link } from "react-router-dom";

export default function Exercise2(){
    
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <nav className="flex flex-col space-y-4 text-black text-2xl">
            <Link to="/modal" className="btn btn-dark me-3 hover:underline">Modal (cannot interact with the page)</Link>
            <Link to="/regularDialog" className="btn btn-dark hover:underline">Regular Dialog (can interact with the page)</Link>
        </nav>
        </div>
      </>
    )
}