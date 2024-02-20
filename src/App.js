import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
// import Register from "./pages/register"
import UserSet from "./pages/usersettings.jsx";
import Error from "./pages/404page.jsx";
import Contact from "./pages/contact.jsx";
import SignLog from "./component/sign_login.js"


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route>
    <Route path="*" element={<SignLog />} />
    <Route path="home" element={<Home />} />
    <Route path="usersettings" element={<UserSet />} />
    <Route path="/" element={<Error />} />
    <Route path="contact" element={<Contact />} />
    </Route>
</Routes>
</BrowserRouter>
    );
}

export default App;
