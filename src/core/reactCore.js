      let rootDOMElement, rootReactElement;
      //const REACT_CLASS = 'REACT_CLASS';

  /**
  * Fonction qui servira à gerer les differents elements HTML.
  **/
  function createElement(element, props, ...children) {
        
        // Si c'est Une class 
        if (isClass(element)) {
            return handleClassElement(element, props, children)
        }
        // Si c'est une fonction stateLess
        if (isStateLessComponent(element)) {
            return element(props);
        }
        // Sinon si c'est un element on le retourne en lui ajoutant le tableau d'enfants
        const anElement = document.createElement(element);
        return anElement;
        //return handleHtmlElement(element, props, children);
    }

    /** ------------------------  HandleClass  ------------------------------ **/ 
    // si l'élément crée via react.createElement est une class alors on l'instencie et on renvois le render
    function handleClassElement(clazz, props, children) {
            const reactElement = new clazz(props);
            reactElement.children = children;
            //reactElement.type = REACT_CLASS;
            if(reactElement.render().match('(<)(.*)(\/>)') != null){
                innerElement = reactElement.render().match('(<)(.*)(\/>)')[2].trim();
            }

            return reactElement.render();
    }