import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthPage from "./components/FourthPage/FourthPage";
import FifthPage from "./components/FifthPage/FifthPage";
import SixthPage from "./components/SixthPage/SixthPage";



function App() {
    const pages = [
        <FirstPage/>,
        <SecondPage/>,
        <ThirdPage/>,
        <FourthPage/>,
        <FifthPage/>,
        <SixthPage/>
    ]
    const [page,setPage]= useState(0);
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
