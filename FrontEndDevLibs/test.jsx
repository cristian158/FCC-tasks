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


{/*------------------------------------------------------------------------------*/}

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

{/*------------------------------------------------------------------------------*/}

{/*other way to create React Component: ES6 'class' syntax*/}
class MyComponent extends React.Component {
  {/* extends the React.Component class and MyComponent has access to React features */}
  constructor(props) {
    {/* constructor: method used during the initialization of objects that are
      created with the 'class' keyword; uses super() to call the constructor
      of the React.Component class */}
    super(props);
    {/*It is best practice to call a component's constructor with super, and pass
    props to both. This makes sure the component is initialized properly. */}
  }
  render() {
    return (
      <div>
        <h1>Hey There</h1>
      </div>
    );
  }
};

{/*------------------------------------------------------------------------------*/}

const ChildComponent = () => { {/* simple functional component */}
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
  {/* render returns single div with h1 element and ChildComponent const children */}
};

{/*------------------------------------------------------------------------------*/}

const TypesOfFruit = () => {  {/* functional component */}
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => { {/* functional component */}
  return (
    <div>
    <TypesOfFruit /> {/* child nested on Fruits */}
    </div>
  );
};

const TypesOfVegetable = () => {  {/* functional component */}
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Lettuce</li>
        <li>Carrot</li>
        <li>Coliflower</li>
        <li>Pepper</li>
      </ul>
    </div>
  );
};

const Vegetables = () => { {/* functional component */}
  return (
    <div>
    <TypesOfVegetable /> {/* child nested on Fruits */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits /> {/* parent and child nested/composed within TypesOfFood */}
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
{/* renders TypesOfFood to the DOM div element with id 'challenge-node' */}

{/*------------------------------------------------------------------------------*/}

// WRITE A REACT COMPONENT FROM SCRATCH

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
 }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

{/*------------------------------------------------------------------------------*/}

// PASS PROPS TO A STATELESS FUNCTIONAL Component

{/* CurrentDate is stateless functional component*/}
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: </p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate />
      </div>
    );
  }
};
