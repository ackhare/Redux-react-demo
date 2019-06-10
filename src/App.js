import React from "react";
import User from './components/Users.js';
import API from '../utils/API.js';
class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading: true,
        name: null,
        avatar: null,
        email: null
      };
    }
    /*
  We also created the async componentDidMount() method. Inside, 
  we make an asynchronous request to load the data and update our component’s state. That will trigger a new re-render.

Notice that the method is async which will allow us to await certain actions inside.
  */
 async componentDidMount() {
    // Load async data.
  
    try {
        // Load async data from an inexistent endpoint.
        let userData = await API.get('/', {
            params: {
              results: 1,
              inc: 'name,email,picture'
            }
          });
                  // Parse the results for ease of use.
    userData = userData.data.results[0];

    // Update state with new data and re-render our component.
    const name = `${userData.name.first} ${userData.name.last}`;
    const avatar = userData.picture.large;
    const email = userData.email;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        avatar,
        email
      }
    });
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }

  }
    render() {
      const { isLoading, name, avatar, email } = this.state;
  
      return (
        <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
      );
    }


}
  export default App;