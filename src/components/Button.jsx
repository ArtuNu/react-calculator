import '../styles/button.css'

export default function Button({children,clickHandle}) {

    const isOperator = value => isNaN(value) && (value !== '.') && (value !== '=');

    return(
        <div className={`button-container ${isOperator(children) ? "operator" : ''}`.trimEnd()} onClick={()=> clickHandle(children)}>
            {children}
        </div>
    )
};
