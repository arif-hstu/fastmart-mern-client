import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const allProducts = [
    {
      pdName: "Modern Plastic Armchair Rocker",
      pdImage: "https://i.ibb.co/J22TCP8/chair.png",
      pdPrice: 199,
      pdOldPrice: 219,
      pdCatagory: 'Furniture',
      pdStar: 3,
      pdOldStock: 5,
      pdStock: 3,
      pdOnSale: false,
      pdGender: "all"
    },{
      pdName: "Black Roll N Travel Go",
      pdImage: "https://i.ibb.co/1zPWMBw/black-Roll.png",
      pdPrice: 329,
      pdOldPrice: 419,
      pdCatagory: "Travel Bag",
      pdStar: 3, 
      pdOldStock: 20,
      pdStock: 10,
      pdOnSale: true,
      pdGender: 'all'
    },{
      pdName: "Men's Running Casual",
      pdImage: "https://i.ibb.co/Dwv0SnB/mens-Running.png",
      pdPrice: 219,
      pdOldPrice: 395,
      pdCatagory: "Casula Shoes",
      pdStar: 4, 
      pdOldStock: 50,
      pdStock:20,
      pdOnSale: true,
      pdGender: "man"
    },{
      pdName: "Casual Analogue White Men's Watch",
      pdImage: "https://i.ibb.co/sH5ngKh/casual-Analogue.png",
      pdPrice: 199,
      pdOldPrice: 299,
      pdCatagory: "Watch",
      pdStar: 4,
      pdOldStock: 50,
      pdStock: 10,
      pdOnSale: true,
      pdGender: "man"
    },{
      pdName: "Beautiful Brown On Ear Headphone",
      pdImage: "https://i.ibb.co/9VhTxfP/beautiful-Gold.png",
      pdPrice: 329,
      pdOldPrice: 429,
      pdCatagory: "Electronics", 
      pdStar: 4,
      pdOldStock: 40,
      pdStock: 20,
      pdOnSale: false,
      pdGender: "man"
    },{
      pdName: "Wild Body Perfume for women",
      pdImage: "https://i.ibb.co/b694DS7/wildBody.png",
      pdPrice: 299,
      pdOldPrice: 399,
      pdCatagory: "Body Care",
      pdStar: 5,
      pdOldStock: 100,
      pdStock: 90,
      pdOnSale: false,
      pdGender: "woman"
    }
  ]



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
  * this function is to upload image to the imgbb database
  *
  ******************************/
  // const handleImage = (e) => {
  //   uploadImage(e.target.files[0])
  //     .then(resp => {
  //       console.log(resp.data.data)
  //     })
  // }

  /*******************************
  * This function is to send bulk data to the database
  *
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
      <input onChange={handleImage} type="file" name="" id="" />
      <button>Post</button>
    </div>
  );
}

export default App;
