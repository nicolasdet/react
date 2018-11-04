import Name      from './name.js';
import{ button } from './button.js';

const appdeux = React.createElement(Name);
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
          ${appdeux}
          ${btn}
      </div>`
      );
  }
}


const app = React.createElement(Hello);
ReactDOM.render(app, document.getElementById('root'));