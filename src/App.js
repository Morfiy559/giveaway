import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";



function App() {
    const pages = [
        <FirstPage/>,
        <SecondPage/>,
        // <ThirdPage/>,
        // <FourthPage/>,
        // <FifthPage/>,

    ]
    const [page,setPage]= useState(1);
  return (
    <div className="App">
      <Header/>
      {
          pages[page]
      }
      <Footer/>
    </div>
  );
}

export default App;
