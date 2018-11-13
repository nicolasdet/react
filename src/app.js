import Name      from './components/name.js';
import Name2     from './components/name2.js';
import{ button } from './components/button.js';

const name2   = React.createElement(Name2, {name: 'antoni'});
const name    = React.createElement(Name);
const btn     = React.createElement(button);

class Hello extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {
    return (
      `<div id="container"> 
          <div>coucou</div>
          <Name />
          ${name}
          ${name2}
          ${btn}
      </div>`
      );
  }
}


const app = React.createElement(Hello);
ReactDOM.render(app, document.getElementById('root'));