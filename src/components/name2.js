export default class Name2 extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {
    return (
      `<div>${this.props.name}</div>`
      );
  }
}