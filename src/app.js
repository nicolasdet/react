/***
  
  Ce fichier est un fichier JS apeller dans index.html
  Il ce chargera de remplir root a l'aide des deux derniere lignes. 

  Deux variables sont apeller dans ce fichier   React. et ReactDOM

  La variable React :
   sert à convertir un composent (class ou fonction) en code html avec la fonction createElement 
   & a hériter les class de Component (extends React.Component).


  La variable ReactDom :
   sert à faire un appendChild dans root et insérer le code obtenus en amont dans l'html.


***/



/*
 import - on importe des fonction react contenus dans d'autre vue. 
 décomposer nos élément html en composant. 
*/
import Name      from './components/name.js';
import Name2     from './components/name2.js';
import{ button, button2 } from './components/button.js';



// class de base 
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

  // fonction render. Celle qui retournera a la base HTML de notre app.
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

// on affiche le contenus (render) de notre classe HELLO dans la DIV 'root'
const app = React.createElement(Hello);
ReactDOM.render(app, document.getElementById('root'));




/******

  fin
  
****/