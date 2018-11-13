    //return React.createElement('div', null, `Hello world ${this.props.name}`);

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  onPlusClick() {
    this.setState({value: this.state.value + 1});
  }

  onMinusClick() {
    this.setState({value: this.state.value - 1});
  }

  render() {
    return React.createElement('div', null,
      React.createElement('div', null, `The Famous Dan Abramov's Counter`),
      React.createElement('div', null, `${this.state.value}`),
      React.createElement('button', {onClick: this.onPlusClick.bind(this)}, '+'),
      React.createElement('button', {onClick: this.onMinusClick.bind(this)}, '-')
    );
  }
}
const counter = React.createElement(Counter, null, null);
ReactDOM.render(counter, document.getElementById('root'));
/*-------------------------------------------------------------------/

class Hello extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {
    return React.createElement('div', null, `Hello world ${this.props.name}`);
  }
}

class MyButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('button', {onclick: this.props.onClick}, `Click me`);
  }
}


const HelloDeux = ({name}) => {
    return React.createElement('div', null, `Hello World ${name}`);
};


const myBtn       = React.createElement(MyButton, {onClick: () => alert('yay it worked')}, null);
const helloWorld  = React.createElement(Hello, {name: 'kevin'}, null);
const helloWorld2 = React.createElement(HelloDeux, {name: 'nicolas'}, null);
const regularDiv  = React.createElement('div', null, `I'm just a regular div`);

const parent = React.createElement('div', null,
        myBtn,
        helloWorld,
        helloWorld2,
        regularDiv,
        ` I'm just a text`
);

ReactDOM.render(parent, document.getElementById('root'));


/* -------------------------------------------------------------------------*/

