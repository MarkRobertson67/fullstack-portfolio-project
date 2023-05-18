// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// PAGES
import Edit from "./Pages/Edit";
import FourOfFour from "./Pages/FourOfFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About";

// COMPONENTS
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOfFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;



// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
     
//         <p>
//          Welcome to my Products App 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
