const button = () => {
    return (`
    	<button onclick="alert('coucou');"> click </button>
    	`);
};


const button2 = (props) => {

    return (`
        <button onClick="${props.onClick()}"> click2    </button>
        `);
};
/*


const button2 = (props) => {
    console.log(props);
    return (`
        <button onclick="alert('${props.texte}');"> click2  </button>
        `);
};
*/

export { button, button2 };