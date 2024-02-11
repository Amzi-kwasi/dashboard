import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Register from "./pages/register"
import UserSet from "./pages/usersettings.jsx";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="register" element={<Register />} />
    <Route path="usersettings" element={<UserSet />} />
  </Route>
</Routes>
</BrowserRouter>
    );
}

export default App;
