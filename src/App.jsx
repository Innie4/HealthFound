import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import ArticleDetail from './pages/ArticleDetail';
import Advertise from './pages/Advertise';
import NewsFeed from './pages/NewsFeed';
import VC from './pages/VC';
import About from './pages/About';
import TalentHQ from './pages/TalentHQ';
import TalentApply from './pages/TalentApply';
import Success from './pages/Success';
import Events from './pages/Events';
import Saved from './pages/Saved';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Resumes from './pages/Resumes';
import PostJob from './pages/PostJob';
import Search from './pages/Search';

// New Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Onboarding from './pages/Onboarding';
import Forum from './pages/Forum';
import ForumDetail from './pages/ForumDetail';
import Spotlight from './pages/Spotlight';
import Founder from './pages/Founder';
import VideoInterview from './pages/VideoInterview';
import MarketDashboard from './pages/MarketDashboard';
import Comparison from './pages/Comparison';
import ReportPreview from './pages/ReportPreview';
import Membership from './pages/Membership';
import Checkout from './pages/Checkout';
import SuccessPurchase from './pages/SuccessPurchase';
import Partnerships from './pages/Partnerships';
import CustomResearch from './pages/CustomResearch';
import MediaKit from './pages/MediaKit';
import SuccessMediaKit from './pages/SuccessMediaKit';
import Legal from './pages/Legal';
import Support from './pages/Support';
import Referral from './pages/Referral';
import TrendsMap from './pages/TrendsMap';
import TopStartups from './pages/TopStartups';
import SuccessNewsletter from './pages/SuccessNewsletter';
import CareerConvo from './pages/CareerConvo';
import StartupWeekly from './pages/StartupWeekly';
import WorkplaceCorner from './pages/WorkplaceCorner';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletters" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/news" element={<NewsFeed />} />
        <Route path="/vc" element={<VC />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<TalentHQ />} />
        <Route path="/jobs/apply/:id" element={<TalentApply />} />
        <Route path="/success" element={<Success />} />
        <Route path="/events" element={<Events />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/jobs/post" element={<PostJob />} />
        <Route path="/search" element={<Search />} />

        {/* New Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<ForumDetail />} />
        <Route path="/spotlight" element={<Spotlight />} />
        <Route path="/founder-story" element={<Founder />} />
        <Route path="/founder-interview" element={<VideoInterview />} />
        <Route path="/market-dashboard" element={<MarketDashboard />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/report-preview" element={<ReportPreview />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-purchase" element={<SuccessPurchase />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/custom-research" element={<CustomResearch />} />
        <Route path="/media-kit" element={<MediaKit />} />
        <Route path="/success-media-kit" element={<SuccessMediaKit />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/support" element={<Support />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/trends-map" element={<TrendsMap />} />
        <Route path="/top-startups" element={<TopStartups />} />
        <Route path="/success-newsletter" element={<SuccessNewsletter />} />
        <Route path="/career-convo" element={<CareerConvo />} />
        <Route path="/startup-weekly" element={<StartupWeekly />} />
        <Route path="/workplace-corner" element={<WorkplaceCorner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
