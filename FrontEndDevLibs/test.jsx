const JSX = (
  <div className='myDiv'>
  {/* key difference JSX vs HTML: 'class' is reserved word in JavaScript. JSX uses className. */}
    <h1>Hello World</h1> <br />
    <p>Lets render this to the DOM</p>
    <hr />
    {/*all tags must be closed, even self-closing like br and hr*/}
  </div>
);
ReactDOM.render(JSX, document.getElementById('challenge-node'))

{/*one way to create React Component: JS function, creates a stateless functional
  component, so it can receive and render data but not manage or track changes
  to that data*/}
const MyComponent = function() {
{/* it has to return JSX or null */}
  return (
    <div className='customClass'> String Text </div>
    {/* after transpiled div will have class 'customClass'*/}
  );
}
