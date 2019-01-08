  /**
  * Fonction qui servira à gerer les differents elements HTML. 
  * afin de faciliter le travaille (front) on permet à des fonction et des classes Javascript de retourner du HTML. 
  * cette fonction à pour role de savoir si l'element qu'on lui passe est une fonction ou une classe et de renvoyer l'HTML.
  **/
  
  function createElement(element, props, ...children) {
        
        // Si c'est Une class on apelle une fonction qui va renvoyer le resultat de le fonction render de cette classe
        if (isClass(element)) {
            return handleClassElement(element, props, children)
        }
        // Si c'est une fonction stateLess on return le contenus de cette fonction (du html de préférence..)
        if (isStateLessComponent(element)) {
            return element(props);
        }

        // Sinon si c'est un element simple (de l'html) on crée l'élément html dans le dom et on le renvois
        const anElement = document.createElement(element);
        return anElement;
        //return handleHtmlElement(element, props, children);
    }




    /** ------------------------  HandleClass  ------------------------------ **/ 
    // si l'élément crée via react.createElement est une class alors on l'instencie et on renvois le render
    function handleClassElement(clazz, props, children) {
        
            const reactElement = new clazz(props);
            reactElement.children = children;
            return reactElement.finalrender();
    }