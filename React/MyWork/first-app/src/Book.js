const inLineHeadingStyle = {
  color: 'red',
  fontSize: '1.25rem',
  marginTop: '0.5rem',
};

const Book = (props) => {
  const { img, title, author, number /*getBook, id*/ } = props;
  // console.log(props);

  return (
    <article className="book">
      <span className="numbering">#{number + 1}</span>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h4 style={inLineHeadingStyle}>{author}</h4>
      {/* <button onClick={() => getBook(id)}>get by id</button>
      <button onClick={() => getBooks(author)}>get by author</button> */}
    </article>
  );
};

export default Book;
