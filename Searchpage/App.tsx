import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VisaLandingPage from './pages/VisaLandingPage';
import AdminDashboard from './pages/AdminDashboard';
import { CONTENT } from './constants';

const App: React.FC = () => {
  // Default visa to redirect to
  const defaultVisa = CONTENT['fr'].visas[0].slug;

  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Language Redirect: / -> /fr/visa-ltr */}
        <Route path="/" element={<Navigate to={`/fr/${defaultVisa}`} replace />} />
        
        {/* Language only: /fr -> /fr/visa-ltr */}
        <Route path="/:lang" element={<Navigate to={`/fr/${defaultVisa}`} replace />} />

        {/* Main Visa Landing Page Route: /fr/visa-ltr */}
        <Route path="/:lang/:slug" element={<VisaLandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;