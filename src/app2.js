// class de base 
export default class Hello2 extends React.Component {

  constructor(props) {
      super(props);
  }

  // fonction render. Celle qui retournera la base HTML de notre app.
  render() {
    return (
      `<div id="container"> 
          <div>coucou2</div>
      </div>
      `
      );
  }
}