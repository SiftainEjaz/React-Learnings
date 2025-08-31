function customRender(reactElement,mainContainer)
{
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    domElement.innerHTML = reactElement.children;

    mainContainer.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props)
    {
        if(prop == 'children')
            continue;
        
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElement);

}

const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href : "http://google.com",
        target : "_link"
    },
    children : "Click to open Google"
}

customRender(reactElement,mainContainer);

