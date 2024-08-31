import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

/_In scenarios where there is inlineCSS applied you won't be able to change it with externalCSS like given below, Since InlineCSS in react is done through objects you can change it by creating object or by using inlineCSS _/

// const Author = () => (
// <h4 style={{ color: 'red', fontSize: '1.25rem', marginTop: '0.5rem' }}>
// Calley Means
// </h4>
// );

const inLineHeadingStyle = {
color: 'red',
fontSize: '1.25rem',
marginTop: '0.5rem',
};
const books = [
{
author: 'Calley Means',
title:
'Good Energy: The Surprising Connection Between Metabolism and Limitless Health',
img: '/images/book1.jpg',
id: 1,
},
{
author: 'Colleen Hoover',
title: 'It Starts with Us: A Novel (It Ends with Us) ',
img: '/images/book2.jpg',
id: 2,
},
{
author: 'Colleen Hoover',
title: 'It Ends with Us: A Novel',
img: '/images/book3.jpg',
id: 3,
},
{
author: 'H. R. McMaster ',
title: 'At War with Ourselves: My Tour of Duty in the Trump White House',
img: '/images/book4.jpg',
id: 4,
},
];

// map is a function that takes a string and returns a string that represents itself as the key and the map object as the value
// map function is used to iterate over an array and return a new array with the results of calling a provided function on every element in the array// const names = ['john', 'peter', 'susan'];
// const names = ['John', ' Peter', 'Doe', 'Susan'];
// const newNames = names.map((names) => {
// return <h1>{names}</h1>;
// });

const bookList = (book) => {
return book.map((books) => {
return <Book {...books} key={books.id} getBook={getBook} />;
});
};

// find and filter are two functions that iterate arrays and return objects with keys and values that match the given predicate.

// filter is a function that takes a list of books and returns a list of books that match the given predicate.
const getBooks = (author) => {
const book = books.filter((book) => book.author === author);
console.log(book);
};

// find is a function that returns true if the book exists in the database and false otherwise.
const getBook = (id) => {
const book = books.find((book) => book.id === id);
console.log(book);
};
// const bookList = (books) => {
// return books.map((books, index) => {
// return (
// <Book
// key={index}
// img={books.img}
// title={books.title}
// author={books.author}
// />
// );
// });
// };

// there are different ways to declare props in js which are:
// const bookList = (books) => {
// return books.map((books) => {
// return (
// <Book
// key={books.id}
// img={books.img}
// title={books.title}
// author={books.author}
// />
// );
// });
// };
// const bookList = (books) => {
// return books.map((books) => {
// return (
// <Book
// books = {books}
// key = {books.id}
// />
// );
// });
// };
// const bookList = (books) => {
// return books.map((books) => {
// return (
// <Book{...books}
// key = {books.id}
// />
// );
// });
// };

function BookList() {
return (

<section className="bookList">
{bookList(books)}
<EventExamples />
</section>
);
}

const EventExamples = () => {
const handleFormInput = (e) => {
// console.log(e);
console.log(e.target);
console.log(e.target.value);
console.log(e.target.name);
console.log('Form was submitted');
};
const handleButtonClick = () => {
alert('button clicked');
};
const handleFormSubmission = (e) => {
e.preventDefault();
console.log('Form submitted');
};
return (

<section>
<form onSubmit={handleFormSubmission}>
<h2>Typical Form</h2>
<input
type="text"
name="example"
onChange={handleFormInput}
style={{ margin: '1rem 0' }}
/>
</form>
<div>
<button type="submit" onClick={handleFormSubmission}>
Submit
</button>
</div>
<button onClick={handleButtonClick}>click me</button>
</section>
);
};

const Book = (props) => {
const { img, title, author, getBook, id } = props;
// console.log(props);
return (

<article className="book">
<img src={img} alt={title} />
<h4>{title}</h4>
<h4 style={inLineHeadingStyle}>{author}</h4>
<button onClick={() => getBook(id)}>get by id</button>
<button onClick={() => getBooks(author)}>get by author</button>
</article>
);
};
// const Book = (props) => {
// const { img, title, author, getBook, id } = props;
// // console.log(props);
// const getSingleBook = () => {
// getBook(id);
// };
// return (
// <article className="book">
// <img src={img} alt={title} />
// <h4>{title}</h4>
// <h4 style={inLineHeadingStyle}>{author}</h4>
// <button onClick={getSingleBook}>get by id</button>
// </article>
// );
// };

//const firstBook = {
// author: 'Calley Means',
// title:
// 'Good Energy: The Surprising Connection Between Metabolism and Limitless Health',
// img: '/images/book1.jpg',
// };
// const secondBook = {
// author: 'Colleen Hoover',
// title: 'It Starts with Us: A Novel (It Ends with Us) ',
// img: '/images/book2.jpg',
// };
// const img = (img, alternative) => {
// return <img src={img} alt={alternative} />;
// };
// const title = (heading) => {
// return <h4> {heading}</h4>;
// };
// const author = (authorName) => {
// return <h4 style={inLineHeadingStyle}> {authorName}</h4>;
// };

// function BookList() {
// return (
// <section className="bookList">
// <Book
// author={firstBook.author}
// title={firstBook.title}
// img={firstBook.img}
// >
// {/_ <p>
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
// doloremque, pariatur illum molestias dignissimos optio. Consequuntur
// itaque officia in eum exercitationem, commodi totam nisi excepturi
// pariatur minus labore facilis explicabo!
// </p> _/}
// </Book>
// <Book
// author={secondBook.author}
// title={secondBook.title}
// img={secondBook.img}
// />
// {/_ <Book author={author} title={title} img={img} />
// <Book author={author} title={title} img={img} /> _/}
// </section>
// );
// }

// function Book(props) {
// const { author, title, img, children } = props;
// function Book({ img, title, author, children }) {
// return (
// <article className="book">
// <img src={img} alt={title} />
// <h4>{title}</h4>
// <h4 style={inLineHeadingStyle}>{author}</h4>
// {/_--To Call anything other than the props in the Booklist we'll call have to use a React function children--_/}
// {/_ {children} _/}
// </article>
// );
// }
// function Book(props) {
// return (
// <article className="book">
// {props.img('./images/book1.jpg', 'book_1')}
// {title(
// 'Good Energy: The Surprising Connection Between Metabolism and Limitless Health'
// )}
// {author('Calley Means')}
// </article>
// );
// }

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
