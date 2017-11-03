import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import styled from 'styled-components'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CitiesList from './components/CitiesList.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import City from './components/City.js'
import Post from './components/Post.js'
import NewPostForm from './components/NewPostForm.js'
import PostUpdate from './components/PostUpdate.js'

class App extends Component {
  // this sets the state of the 'cities' array
  state = {
      cities: []
  }
  
  // Component Will Mount makes sure this all happens before the page is rendered
  async componentWillMount() {
      try {
        // this makes a request for information from axios about all cities
        const response = await axios.get('/api/cities')
        // this puts a readable table of data into the console to preview the response data
        console.table(response.data)
        // this is used to set the state to match the data in the response from the API
        this.setState({cities: response.data})
      } catch (error) { 
        // This catches and logs any errors
        console.log(error)
      }
  }
  render() {
    const CitiesListComponent = () => (<CitiesList cities={this.state.cities} />)
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <NavBar />
            
            <Switch>
              <Route exact path="/" render={CitiesListComponent} />
              <Route exact path="/cities/:cityId" component={City} />
              <Route exact path="/cities/:cityId/posts/new" component={NewPostForm} />
              <Route exact path="/cities/:cityId/posts/:postId/edit" component={PostUpdate} />
              <Route exact path="/cities/:cityId/posts/:postId" component={Post} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
