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

// Taft & The Burnham Plan
import Taft from "./pages/exhibits/taft/index";
import Alfspot from "./pages/exhibits/taft/Alfspot";
import TaftBriefing from "./pages/exhibits/taft/briefing";
import Manila1905 from './pages/exhibits/taft/manila-1905';
import ManilaLockDown from './pages/exhibits/taft/manila-lockdown';
import ManilaReimagined from './pages/exhibits/taft/manila-reminagined';
import Patchwork from "./pages/exhibits/taft/Patchwork";
import MultigenCity from "./pages/exhibits/taft/MultigenCity";
import SmallIsBig from "./pages/exhibits/taft/smallisbig";
import ManilaMania from "./pages/exhibits/taft/manila-mania";
import ManilaSymbioticCity from "./pages/exhibits/taft/Symbiotic-City"


// Farrales
import Farrales from "./pages/exhibits/farrales";
import MgaMata from "./pages/exhibits/tdd2/mata";

// MusicXArt
import MusicXArt from "./pages/exhibits/musicxart";

// TDD2
import TDD2 from "./pages/exhibits/tdd2/index";
import ExhibitBrief from "./pages/exhibits/tdd2/exhibit-brief";
import HallOfHeroes from "./pages/exhibits/tdd2/hall-of-heroes";
import RedTagged from "./pages/exhibits/tdd2/redtagged"
import DPDC from "./pages/exhibits/tdd2/double-pandemic-deadly-combination";
import Leni from "./pages/exhibits/tdd2/maria-leonor";
import ILabyrinth from "./pages/exhibits/tdd2/i-labyrinth";
import SinoKausap from "./pages/exhibits/tdd2/sino-ba-kausap-mo";
import Voltanna from "./pages/exhibits/tdd2/voltanna";
import Portal from "./pages/exhibits/tdd2/portal";

// KayGandaNgAtingMusika
import KayGandaNgAtingMusika from "./pages/exhibits/kaygandangatingmusika/index";

//eslint-disable-next-line
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);


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
              <Route exact path="/" component={Homepage} />

              {/* Taft And The Burnham Plan */}
              <Route exact path="/exhibit/taft-and-the-burnham-plan" component={Taft}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/briefing" component={TaftBriefing}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-1905" component={Manila1905}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-lockdown" component={ManilaLockDown}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-lockdown/alfspot-quarantine-project" component={Alfspot}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-lockdown/manila-mania" component={ManilaMania}/>

              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined" component={ManilaReimagined}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined/manila-city-halls-patchwork-city" component={Patchwork} />
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined/multi-generational-city" component={MultigenCity} />
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined/small-is-big" component={SmallIsBig}/>
              <Route exact path="/exhibit/taft-and-the-burnham-plan/manila-reimagined/manilas-symbiotic-city" component={ManilaSymbioticCity}/>
              
              {/* TDD2 */}
              <Route exact path="/exhibit/to-differ-digitally" component={TDD2} />
              <Route exact path="/exhibit/to-differ-digitally/exhibit-brief" component={ExhibitBrief} />
              <Route exact path="/exhibit/to-differ-digitally/hall-of-heroes" component={HallOfHeroes} />
              <Route exact path="/exhibit/to-differ-digitally/mga-di-nakikita-ng-mata" component={MgaMata} />
              <Route exact path="/exhibit/to-differ-digitally/red-tagged" component={RedTagged} />
              <Route exact path="/exhibit/to-differ-digitally/double-pandemic-deadly-combination" component={DPDC} />
              <Route exact path="/exhibit/to-differ-digitally/sino-ba-kausap-mo" component={SinoKausap} />
              <Route exact path="/exhibit/to-differ-digitally/maria-leonor" component={Leni} />
              <Route exact path="/exhibit/to-differ-digitally/i-labyrinth" component={ILabyrinth} />
              <Route exact path="/exhibit/to-differ-digitally/portal" component={Portal} />
              <Route exact path="/exhibit/to-differ-digitally/front-liner-heroes-featuring-voltanna" component={Voltanna} />

              {/* FARRALES */}
              <Route exact path="/exhibit/farrales-x-fdm" component={Farrales}/>

              {/* MUSIC X ART */}
              <Route exact path="/exhibit/music-x-art" component={MusicXArt}/>

              {/*Kay Ganda Ng Ating Musika*/}
              <Route exact path="/exhibit/kay-ganda-ng-ating-musika" component={KayGandaNgAtingMusika}/>

              {/* Not Found */}
              <Route path="exhibit/*" component={ComingSoon}/>
              <Route path="/exhibit/to-differ-digitally/coming-soon" component={ComingSoon}/>
              <Route exact component={NotFound} />
            </Switch>
            <Footer setIsLoading={setLoading}/>
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