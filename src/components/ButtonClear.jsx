export default function ButtonClear({children,clickHandle}) {
    return( <div className="button-clear" onClick={clickHandle}>
        {children}
    </div>)
};
