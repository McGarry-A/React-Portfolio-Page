import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Intro } from './Components/Intro/Intro';
import { ProductList } from './Components/ProductList/ProductList';

function App() {

  const cardList = [
    {
      id:1,
      img:"https://hygger.io/wp-content/uploads/2020/07/7.png",
      link:""
    },
    {
      id:2,
      img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0-647x363.jpeg?0LocAW2E2gIBzZp0oZSWzxmQTvAPhN_v",
      link:""
    },
    {
      id:3,
      img:"https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
      link:""
    }, 
    {
      id:4,
      img:"https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05",
      link:""
    }
  ]
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList cardList={cardList} />
      <Contact />
    </div>
  );
}

export default App;
