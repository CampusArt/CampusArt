import { useState, useEffect} from "react"; 
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  useLocation
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/Homepage.js";
import { AnimatePresence } from "framer-motion";

//eslint-disable-next-line
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },4000)
  }, [loading])

  useEffect(() => {
    loading
      ?  document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove('loading');
  }, [loading])

  return (
    <AnimatePresence>
      {!loading && (
        <Header setIsLoading={setLoading}/>
      )}
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Homepage} />
      </Switch>
      {!loading && (
        <Footer key="1" setIsLoading={setLoading}/>
      )}
    </AnimatePresence>
  )
}

// eslint-disable-next-line
export default () => (
  <Router>
    <App/>
  </Router>
)