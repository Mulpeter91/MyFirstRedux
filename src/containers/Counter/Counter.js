import React, { Component } from 'react';
import { connect } from 'react-redux'; //it's like a function that returns a high order component
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as actionTypes from '../../store/actions/actions';
//import * as actionCreators from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    //state = {
    //    counter: 0
    //}

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //         default :
    //             this.setState( ( prevState) => { return { counter: prevState.counter } } )
    //     }
    // }
    
    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}  />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result X 2</button>
                <ul style={{listStyle: "none"}}>               
                    {this.props.results.map(result => (
                        <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id} style={{cursor: "pointer"}}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//props defines the scope of those properties a component needs to access 
//this state will be given to you by redux
//ctr is now the property
const mapStateToProps = state => {
    console.log('[mapStateToProps]');
    console.log(state);
    return {        
        ctr: state.ctr.counter, //this is now going to the child reducer 'ctr' found on index.js
        results: state.res.results
        // ctr: state.counter,        
        // results: state.results
    };
};

// this will map the kind of actions we want to dispatch in this container 
// redux gives us the helper function to access the dispatch of the store behind the scenes
const mapDispatchTopProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()), //v2 = {type: actionTypes.INCREMENT} //v1 = type: 'INCREMENT'
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResult: (count) => dispatch(actionCreators.storeResult(count)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

//you need to tell the connect function which segments of the store your component is interested in
//and which actions you want to dispatch
export default connect(mapStateToProps, mapDispatchTopProps)(Counter);