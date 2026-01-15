import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SupremeCourt from './pages/SupremeCourt';
import HighCourts from './pages/HighCourts';
import RTI from './pages/RTI';
import BareActs from './pages/BareActs';
import Calendar from './pages/Calendar';
import Blogs from './pages/Blogs';
import LawDictionary from './pages/LawDictionary';
import BarAssociations from './pages/BarAssociations';
import Judgments from './pages/Judgments';
import Events from './pages/Events';
import Admin from './pages/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'supreme-court':
        return <SupremeCourt />;
      case 'high-courts':
        return <HighCourts />;
      case 'rti':
        return <RTI />;
      case 'bare-acts':
        return <BareActs />;
      case 'calendar':
        return <Calendar />;
      case 'blogs':
        return <Blogs />;
      case 'law-dictionary':
        return <LawDictionary />;
      case 'bar-associations':
        return <BarAssociations />;
      case 'judgments':
        return <Judgments />;
      case 'events':
        return <Events />;
      case 'admin':
        return <Admin />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
