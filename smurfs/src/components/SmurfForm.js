import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

//created SmurfForm with local state for form entries
//added handleChange function
//added addSmurf function - set name,age,height keys equal to this.state
//invoked this.props.createSmurf from mSTP using the this.state keys
//setState to clear once complete
class SmurfForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addSmurf = () => {
        const { name, age, height } = this.state
        this.props.createSmurf({name, age, height})
        this.setState({ name: '', age: '', height: '' })
    }
    render(){
        return (
            <div>
                <input  
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    onChange={this.handleChanges}
                    value={this.state.name}
                />
                <input  
                    type='text'
                    name='age'
                    placeholder='Enter Your Age'
                    onChange={this.handleChanges}
                    value={this.state.age}
                />
                <input  
                    type='text'
                    name='height'
                    placeholder='Enter Your Height'
                    onChange={this.handleChanges}
                    value={this.state.height}
                />
                <button onClick={() => this.addSmurf()}> Add To The Village </button>
            </div>
        )
    }
}

//define mSTP to tell connect which pieces of state to bring to component
//takes state as param and returns object of data wanted
//( keys passed to this.props for component | values are data wanted from store )

const mapStateToProps = state => {
    return{
        err: state.error,
        addingSmurf: state.addingSmurf
    }
}


//connected SmurfForm to Redux store
//passed in mSTP and passed in createSmurf ACTION CREATOR component
export default connect(mapStateToProps, { createSmurf })(SmurfForm);