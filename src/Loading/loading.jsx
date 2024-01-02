const Loading = ({theme}) =>{

    return(
        <div className="d-flex justify-content-center mx-auto">
            <div className={`loading spinner-border text-${theme || 'success'}`} ></div>
        </div>
    )
}

export default Loading