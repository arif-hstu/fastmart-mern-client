import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

function App() {
  const uploadImage = (img) => {
    let body = new FormData();
    body.set('key', '3fb15f7e29c33d97dda0bde24c302386')
    body.append('image', img)

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    })
  };



  /*******************************
  * this function is to upload image to the 
  * imgbb database
  ******************************/
  // const handleImage = (e) => {
  //   uploadImage(e.target.files[0])
  //     .then(resp => {
  //       console.log(resp.data.data)
  //     })
  // }

  /*******************************
  * This function is to send bulk data 
  * to the database
  ******************************/
  // const handlePost = () => {
  //   fetch('http://localhost:5000/addProducts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(allProducts)
  //   })
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/admin'>
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
