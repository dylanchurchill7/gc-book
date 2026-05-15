import Navbar from "./components/Navbar.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/pricing":
      Component = Pricing;
      break;
    case "/about":
      Component = About;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  );
}
export default App;
