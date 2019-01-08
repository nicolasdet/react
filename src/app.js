import Name      from './components/name.js';
import Name2     from './components/name2.js';
import{ button, button2 } from './components/button.js';

class Hello extends React.Component {


  constructor(props) {
      super(props);

      this.state = {
        toto: 'toto'
      };
  }


  changePrenom () {
    this.setState({toto: 'tata'});
  }

  render() {
    return (
      `<div id="container"> 
          <div>coucou</div>
          ${React.createElement(Name)}
          ${React.createElement(Name2,  {name: this.state.prenom})}
          ${React.createElement(Name2, {name: 'jéjé'})}
          ${React.createElement(button)}
          ${React.createElement(button2, {onClick: this.changePrenom.bind(this) })}
      </div>
      `
      );
  }
}


const app = React.createElement(Hello);
ReactDOM.render(app, document.getElementById('root'));