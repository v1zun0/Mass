// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Index from './page/Index';
// import AboutUs from './page/AboutUs';
import Routes from "./routes/routes";
import Login from "./page/Login";

function App() {
  return (
    <div>
      <Routes />
    </div>
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Index/>} />
    //       <Route path="/aboutus" element={<AboutUs/>} />

    //     </Routes>
    //   </BrowserRouter>
    // </>
  );
}

export default App;
