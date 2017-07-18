import React, {Component, PropTypes} from "react";
/*
 connect is what allows us to connect a component to Redux's store,

 */
import {connect} from "react-redux";
//Below are two actions that will cause to drive other action sin action reactors
import {itemsFetchData, itemsRemoveItem} from "../actions/items";

class ItemList extends Component {
    //Note here constructor is not used 
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        if (!this.props.items.length) {
            return <p>No items to display</p>;
        }

        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={item.id}>
                        {item.label}
                        <button onClick={() => this.props.removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};
/*
 After our component’s class definition, we're going to map Redux's state and the dispatching of our
 action creator to props.
 We create a function that accepts state and then returns an object of props.
 In a simple component like this, I remove the prefixing for the has/isprops as
 it’s obvious that they're related to items.
 */
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
/*
 e need another function to be able to dispatch our itemsFetchData() action creator with a prop.

 */
const mapDispatchToProps = (dispatch) => {
    return {


        //action creators , which handles handles dispatching the other actions.
        /*
         I’ve removed the items prefix from the returned object property.
         Here fetchData is a function that accepts a url
         parameter and returns dispatching itemsFetchData(url).

         */
        fetchData: (url) => dispatch(itemsFetchData(url)),
        removeItem: (index) => dispatch(itemsRemoveItem(index))
    };
};


// connect is what allows us to connect a component to Redux's store,
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
