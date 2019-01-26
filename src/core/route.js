
import App2     from '../app2.js';
import App3     from '../app3.js';

export default class Route {

	render() {
		
		url = window.location.href.toString().split(window.location.host)[1];

		 localStorage.setItem('monChat', 'Tom');
		 var chat = localStorage.getItem('monChat');
		
		switch url :
			case : '/' {
				return (`${React.createElement(App3)}`);
				break
			}
			case : '/test' {
				return (`${React.createElement(App2)}`);
				break
			}
	}
}