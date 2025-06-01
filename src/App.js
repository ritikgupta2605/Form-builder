import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuilderPage from "./pages/BuilderPage";
import FormFiller from "./pages/FormFiller";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuilderPage />} />
        <Route path="/form/:id" element={<FormFiller />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
