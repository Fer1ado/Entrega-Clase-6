
const Loading = ({texto}) => {

    return(
        <>
        <div>
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-purple">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                                </div>
                            </div> 
                            <h2>{texto}</h2>
                        </div>
        </>
    )
}

export default Loading