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
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import Taft from "./pages/exhibits/taft/index";
import TaftBriefing from "./pages/exhibits/taft/briefing";
import Manila1905 from './pages/exhibits/taft/manila-1905';
import ManilaLockDown from './pages/exhibits/taft/manila-lockdown';
import ManilaReimagined from './pages/exhibits/taft/manila-reminagined';

//eslint-disable-next-line
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

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
              {/* Taft And The Burnham Plan */}
              <Route exact path="/exhibit/taft-and-the-burnham-plan" component={Taft}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/briefing" component={TaftBriefing}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-1905" component={Manila1905}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-lockdown" component={ManilaLockDown}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined" component={ManilaReimagined}/>
              {/* Not Found */}
              <Route path="/exhibit/*" component={ComingSoon}/>
              <Route exact component={NotFound} />
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