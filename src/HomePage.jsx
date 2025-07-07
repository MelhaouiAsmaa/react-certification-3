import { Link } from "react-router-dom";

export function HomePage(){
    return(
      <div className="container p-5">
        <h2 className="mb-4 text-center">React certification 3</h2>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <Link to="/exercise1" className="btn btn-dark mb-3 hover:underline">Exercise 1</Link>
          <Link to="/exercise2" className="btn btn-dark mb-3 hover:underline">Exercise 2</Link>
          <Link to="/exercise3" className="btn btn-dark hover:underline">Exercise 3</Link>
        </div>
      </div>
    )
}