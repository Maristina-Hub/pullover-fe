import React from 'react'
import "../App.css"


const TitleComponent = ({name, title}) => {
    return (
        <div className='row'>
            <div className="col-10 max-auto my-2 text-center text-title">
            <h1 className="text-capitalize font-weight-bold">
                {name}
                <strong className="text-blue">
                {title}
                </strong>
            </h1>
            </div>  
        </div>
    )
}

export default TitleComponent
