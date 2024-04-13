import React from "react";


interface DefaultCardData{
    thumbnail:string,
    title:string,
    description:string,
    value:number

}
function DefaultCard(props:DefaultCardData){

    const maxWidthStyle:React.CSSProperties={
        maxWidth:'540px',
        

    }

    return(
        <div className="card mb-3" style={maxWidthStyle}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.thumbnail} className="img-fluid rounded-start" alt={props.title}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5> 
                        <p className="card-text">This is a wider card with supporting text below as a natural ead-in.</p>
                        <p className="card-text"><small className="text-body-secondary">{props.value}</small></p>
                    </div>
                    </div>
                </div>
                </div>
    )
}

export default DefaultCard;