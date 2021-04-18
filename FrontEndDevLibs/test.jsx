const JSX = (
  <div className='myDiv'>
  {/* key difference JSX vs HTML: 'class' is reserved word in JavaScript. JSX uses className. */}
    <h1>Hello World</h1> <br />
    <p>Lets render this to the DOM</p>
    <hr />
    {/*all tags must be closed, even self-closing like br and hr*/}
  </div>
);
{/*Change code below this line*/}
ReactDOM.render(JSX, document.getElementById('challenge-node'))
