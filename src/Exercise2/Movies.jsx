import React, { useRef, useState } from "react";
import GenericModal from "./GenericModal";

export default function Movies() {
  const [movies, setMovies] = useState([
    "The Hobbit",
    "1984",
    "Pride and Prejudice",
  ]);
  const [newMovie, setNewMovie] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const dialogRef = useRef();

  const confirmDelete = (movie) => {
    dialogRef.current?.open({
      header: <h2 className="text-xl font-bold">Confirm Deletion</h2>,
      body: (
        <p>
          Are you sure you want to remove <strong>{movie}</strong> from the list?
        </p>
      ),
      footer: (
        <>
          <button
            className="px-4 py-2 btn btn-light rounded"
            onClick={() => {
                dialogRef.current?.close();
                setIsModalOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 btn btn-danger text-white rounded"
            onClick={() => {
              setMovies((prev) => prev.filter((b) => b !== movie));
              dialogRef.current?.close();
              setIsModalOpen(false);
            }}
          >
            Delete
          </button>
        </>
      ),
    });
    setIsModalOpen(true); // Set modal state to true when open
  };

  const handleOverlayClick = () => {
    setIsModalOpen(false); // Close the modal when clicking on the overlay
    dialogRef.current?.close();
  };

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      setMovies((prevMovies) => [...prevMovies, newMovie.trim()]);
      setNewMovie(""); // Clear input after adding
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 relative">
      {/* Overlay for preventing interaction with the page */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={handleOverlayClick}
        />
      )}
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Movie List</h1>
        {/* add a new movie */}
        <p>Add new movie : </p>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <button
          onClick={handleAddMovie}
          className="btn btn-primary"
        >
          Add Movie
        </button>
        {/* list the movies */}
        <ul className="space-y-3">
          {movies.map((movie) => (
            <li
              key={movie}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{movie}</span>
              <button
                className="btn btn-danger"
                onClick={() => confirmDelete(movie)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* calling the dialog that will remove the movies */}
      <GenericModal ref={dialogRef} />
    </div>
  );
}
