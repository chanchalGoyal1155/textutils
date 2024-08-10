import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"; 
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils" About="About" />
      <div className="container my-3" >
      <TextForm heading="Enter the text to analyze below" />
      {/* <About /> */}
      </div>
      
      
    </>
  );
}

export default App;
