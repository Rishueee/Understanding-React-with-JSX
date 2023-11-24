import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}


  // code here
  function App() {
  const imgData = imageData();
return(
  <>
  <h1>Kalvium Gallery</h1>
  <div className='image'>

    {imgData.map((item)=> {
      
      return (

          <img key={item.id} src={item.img} alt="elephant" />
      )
    })}
  </div>
  </>
)
}

export default App;