
const ButtonDelete = ({children,clickHandle}) => {
    return( <div className="button-clear" onClick={clickHandle}>
        {children}
    </div>)
};

export default ButtonDelete