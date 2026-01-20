import "./App.css";


import { SearchList } from "./pages/SearchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataShowing } from "./pages/DataShowing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchList />} />
          <Route path="/movie/:id" element={<DataShowing />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
