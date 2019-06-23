import React from 'react';


//created functional component, no need for redux state
//used props from app to map and display each smurf entry
const Smurfs = props => {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return(
                    <div>    
                        <h2>{smurf.name}</h2>
                        <h4>{smurf.age}</h4>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Smurfs;