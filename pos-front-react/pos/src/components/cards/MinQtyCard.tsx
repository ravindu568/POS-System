

function MinQtyCard(){


    const minWidth:React.CSSProperties={
        width:'100%',
        marginBottom:'13px'
    }

    return(


        <div className="card" style={minWidth}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    
    )

}

export default MinQtyCard;