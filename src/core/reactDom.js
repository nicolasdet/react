(() => {
    // Base de notre app. C'est dans ces variable que l'on stockera l'arbre de notre DOM
    let rootDOMElement, rootReactElement;


    // classe générique pour l'héritage permetant d'introduire les props et le state. 
    class Component {
        constructor(props) {
            this.props = props;
        }

        finalrender() {
            return this.render();
        } 

        setState(state) {
            this.state = Object.assign({}, this.state, state);
            //reRender();
        }
    }

    /*
        **** En cour de travaille ******

                On prend les variable de DOM Actuelle pour supprimer le dom et rapeller render avec les bons new elements
                
                function reRender() {
                    while (rootDOMElement.hasChildNodes()) {
                        rootDOMElement.removeChild(rootDOMElement.lastChild);
                    }
                    ReactDOM.render(rootReactElement, rootDOMElement);
                }

        **** fin en cour de travaille ******
    */


    // Windows React contiendra la fonction créateElement & la classe générique Component || j'hesite à les mettre à la racine de windows
    window.React = {
        createElement,
        Component
    };

    // Windows.ReactDom contiendra juste la fonction render
    window.ReactDOM = {
        // prend deux param L'élement à append dans l'élement de dom.
        render: (el, domEl) => {

            rootReactElement = el;
            rootDOMElement = domEl;
            
            const currentDOM = rootReactElement;

            if(typeof(currentDOM) === 'string') {
               return rootDOMElement.insertAdjacentHTML('afterend', currentDOM);
            }

           return rootDOMElement.appendChild(currentDOM);
        }
    };
})();