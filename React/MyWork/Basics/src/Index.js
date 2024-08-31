import React from 'react';
import ReactDOM from 'react-dom/client';

/*single element */
// JSX ---Better practice and easier to use
// function Greeting() {
//   return <h2>This is a Component.</h2>;
// }

// React.createElement version --more complicated
// const Greeting = () => {
//   return React.createElement('h2', {}, 'Hello world');
// };

/*more than 1 element */
// function Greeting() {
//   return (
//     <div>
//       <h2>Hello World</h2>
//     </div>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'Hello World')
//   );
// };

/*Rule of JSX
  -Return Only Single Parent Element
    - semantics section/article 
      - return(
      <article>rest of the code</article>
      );
      -return( 
      <section>rest of the code</section>
      );
    - Fragment "let's us group elements without adding extra nodes"
      - return(
      <React.Fragment>Rest of the code</React.Fragment>
      );
      - return( 
      <>Rest of the code</>
      );

  -camelCase property naming convention
  -close every element
    - <div/> close all elements
    - Don't use self-closing tags like <br /> or <img />
    - Use curly braces for expressions and JSX
    - Use key prop for uniquely identifying elements in a list or array
      */

function Greeting() {
  return (
    <>
      <div>
        <HelloWorld />
        <Message />
      </div>
    </>
  );
}
const HelloWorld = () => {
  return (
    <>
      <h2>Hello World.</h2>
      <ul>
        <li>
          <a href="/Test.js">Hello People.</a>
        </li>
      </ul>
      <input type="text" />
    </>
  );
};
const Person = () => <h2>Umar</h2>;
const Message = () => {
  return (
    <>
      <p>
        My Name is <Person />
      </p>
    </>
  );
};
export default Greeting;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
