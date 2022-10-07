import Navbar from "./components/Navbar";
import TheAlertButton from "./components/TheAlertButton";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {
  return (

    <Router>
      <div React Div>
        <Navbar />

        <div Bloc Sites className="
          max-w-[95%] max-h-screen
          mx-auto
          flex flex-wrap
          p-2 m-2
          font-[Montserat] font-sm text-indigo-500 text-center">

          <div AlertButton Sites className="
            min-w-[30%] h-32
            flex flex-col
            py-1 m-2 mx-2
            border-2 border-indigo-500 rounded-lg shadow-lg">
            <div className="my-auto">
              <h1 className="text-center text-black">The Alert Button</h1>
              <a href="/alertbutton" className="text-center">
                <p className=""><Link to="/alertbutton">Check it out Now</Link></p>
              </a>

            </div>
          </div>

        </div>

        <Routes>
          <Route exact path="/alertbutton" element={<TheAlertButton />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
