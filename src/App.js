import { useState, useEffect} from "react"; 
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Pages
import Homepage from "./pages/Homepage.js";
import NotFound from "./pages/NotFound.js";
import ComingSoon from "./pages/ComingSoon.js";
import Taft from "./pages/exhibits/Taft.js";

//eslint-disable-next-line
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   },4000)
  // }, [loading])

  useEffect(() => {
    loading
      ?  document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove('loading');
  }, [loading])

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
          <>
          <Header setLoading={setLoading}/>
            <Switch location={location} key={location.pathname}>
              {/* Main CCA Website */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/exhibits/taft-and-the-burnham-plan" component={Taft}/>
              <Route path="/exhibits/*" component={ComingSoon}/>
              <Route exact component={NotFound} />
              {/* Taft And The Burnham Plan */}
            </Switch>
          <Footer key="1" setIsLoading={setLoading}/>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

// eslint-disable-next-line
export default () => (
  <Router>
    <App/>
  </Router>
)