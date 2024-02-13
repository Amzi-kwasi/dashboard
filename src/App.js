import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Register from "./pages/register"
import UserSet from "./pages/usersettings.jsx";
import Error from "./pages/404page.jsx";
import SignIn from "./pages/signin.jsx";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
    <Route path="*" element={<Register />} />
    <Route path="home" element={<Home />} />
    <Route path="usersettings" element={<UserSet />} />
    <Route path="/" element={<Error />} />
    <Route path="signin" element={<SignIn />} />
    </Route>
</Routes>
</BrowserRouter>
    );
}

export default App;
