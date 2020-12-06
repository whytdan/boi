import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainPage from './views/MainPage';
import NewsListPage from './views/NewsListPage';
import NewsDetalPage from './views/NewsDetalPage';
import FAQPage from './views/FAQPage';
import EligibilityPage from './views/EligibilityPage';
import ConsultationPage from './views/ConsultationPage';
import ComplaintPage from './views/ComplaintPage';
import CasesPage from './views/CasesPage/CasesPage';
import ReviewPage from './views/ReviewPage';
import ReviewsPage from './views/ReviewsPage';
import CaseDetalPage from './views/CaseDetail';
import AboutUs from './views/AboutUs';
import NormativeBase from './views/NormativeBase';
import OurTeam from './views/OurTeam';
import AnnualReports from './views/ReportsPage/AnnualReports';
import QuarterReports from './views/ReportsPage/QuarterReports';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MassMedia from './views/MassMedia';
import MassMediaDetail from './views/MassMediaDetail';
import MediaMaterials from './views/MediaMaterials';
import MediaMaterialDetail from './views/MediaMaterialDetail';
import ContactsPage from './views/ContactsPage/ContactsPage';
import { createContext, useState } from 'react';

const history = createBrowserHistory();

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"Open Sans", sans-serif`,
  }
});

export const LanguageContext = createContext(null);

function App() {

  const [lang, setLang] = useState('ru');

  return (
    <MuiThemeProvider theme={THEME}>
      <LanguageContext.Provider value={{
        lang,
        setLang
      }}>
        <Router history={history}>
          <Switch> 
            <Route path="/" component={MainPage} exact />
            <Route path="/news" component={NewsListPage} exact />
            <Route path="/news/:id" component={NewsDetalPage} exact />
            <Route path="/mass-media" component={MassMedia} exact />
            <Route path="/mass-media/:id" component={MassMediaDetail} exact />
            <Route path="/media-materials" component={MediaMaterials} exact />
            <Route path="/media-materials/:id" component={MediaMaterialDetail} exact />
            <Route path="/faq" component={FAQPage} exact />
            <Route path="/eligibility" component={EligibilityPage} exact />
            <Route path="/consultation" component={ConsultationPage} exact />
            <Route path="/review" component={ReviewPage} exact />
            <Route path="/reviews" component={ReviewsPage} exact />
            <Route path="/complaint" component={ComplaintPage} exact />
            <Route path="/annual-reports" component={AnnualReports} exact />
            <Route path="/quarter-reports" component={QuarterReports} exact />
            <Route path="/cases" component={CasesPage} exact />
            <Route path="/cases/:id" component={CaseDetalPage} exact />
            <Route path="/about-us" component={AboutUs} exact />
            <Route path="/normative-base" component={NormativeBase} exact />
            <Route path="/our-team" component={OurTeam} exact />
            <Route path="/contacts" component={ContactsPage} />
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </MuiThemeProvider>
  )
}

export default App;
