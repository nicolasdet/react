    let rootDOMElement, rootReactElement;
      const REACT_CLASS = 'REACT_CLASS';

  /**
  * Fonction qui servira à gerer les differents elements HTML.
  **/
  function anElement(element, props, children) {
        
        // Si c'est Une class ²
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
            reactElement.type = REACT_CLASS;

            if(reactElement.render().match('(<)(.*)(\/>)') != null){
                innerElement = reactElement.render().match('(<)(.*)(\/>)')[2].trim();
            }
            return reactElement.render();
    }









    /** ------------------------  HandleHTML (optionnel)  ------------------------------ **/ 

    /** 
    * On crée un élément de DOM auquel on ajoute les elements enfants et les props
    **/
    function handleHtmlElement(element, props, children) {
        const anElement = document.createElement(element);
        // traitement du child
        appendChildToElement(anElement, children);
        // traitement du props
        appendPropsToElement(anElement, props);
        return anElement;
    }

    /**
    * Si l'element à des props alors on ajoute l'attribute OU le listener si le props est un truc 'on' genre onClick
    **/
    function appendPropsToElement(anElement, props) {
        if (props == null) {
            return;
        }
        Object.keys(props).forEach(propName => {
            if (/^on.*$/.test(propName)) {
                anElement.addEventListener(propName.substring(2).toLowerCase(), props[propName]);
            } else {
                anElement.setAttribute(propName, props[propName]);
            }
        });
        return;
    }

    /**
    * Si l'élement ce vois passer des Child element en param on append le param sauf si c'est un string on devra juste l'ajouter innerHtml ..
    **/
    function appendChildToElement(anElement, children) {
        children.forEach(child => {
            // si l'enfant est un object HTML on l'append
    
            if(child == null){
                return;
            }
            if (typeof(child) === 'object') {
                anElement.appendChild(child);
            } else {

                // si c'est du texte on concaténe
                anElement.innerHTML += child;
            }
        });
        return;
    }