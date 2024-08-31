import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';
import books from './books';
import Book from './Book';
/*Check README-BY-ME for all comments */
/*Check README-FROM-YOUTUBE for learning basics of JSX */

const bookList = (book) => {
  return book.map((books, index) => {
    return (
      <Book {...books} key={books.id} number={index} /*getBook={getBook}*/ />
    );
  });
};

// const getBooks = (author) => {
//   const book = books.filter((book) => book.author === author);
//   console.log(book);
// };

// const getBook = (id) => {
//   const book = books.find((book) => book.id === id);
//   console.log(book);
// };

function BookList() {
  return (
    <>
      <h1 className="head">Best Seller Books</h1>
      <section className="bookList">
        {bookList(books)}
        {/* <EventExamples /> */}
      </section>
    </>
  );
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.name);
//     console.log('Form was submitted');
//   };
//   const handleButtonClick = () => {
//     alert('button clicked');
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('Form submitted');
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <div>
//         <button type="submit" onClick={handleFormSubmission}>
//           Submit
//         </button>
//       </div>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
