import React, { useRef, useState } from "react";
import GenericModal from "./GenericModal";

export default function Books() {
  const [books, setBooks] = useState([
    "The Hobbit",
    "1984",
    "Pride and Prejudice",
  ]);
  const [newBook, setNewBook] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const dialogRef = useRef();

  const confirmDelete = (book) => {
    dialogRef.current?.open({
      header: <h2 className="text-xl font-bold">Confirm Deletion</h2>,
      body: (
        <p>
          Are you sure you want to remove <strong>{book}</strong> from the list?
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
              setBooks((prev) => prev.filter((b) => b !== book));
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

  const handleAddBook = () => {
    if (newBook.trim()) {
      setBooks((prevBooks) => [...prevBooks, newBook.trim()]);
      setNewBook(""); // Clear input after adding
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
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        {/* add a new book */}
        <p>Add new book : </p>
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          disabled={isModalOpen} // Disable input when modal is open
        />
        <button
          onClick={handleAddBook}
          className="btn btn-primary"
          disabled={isModalOpen} // Disable input when modal is open
        >
          Add Book
        </button>
        {/* list the books */}
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>{book}</span>
              <button
                className="btn btn-danger"
                onClick={() => confirmDelete(book)}
                disabled={isModalOpen}  // Disable input when modal is open
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* calling the dialog that will remove the books */}
      <GenericModal ref={dialogRef} />
    </div>
  );
}
