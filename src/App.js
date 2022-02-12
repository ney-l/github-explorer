import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from 'components/layout/Footer';
import { Navbar } from 'components/layout/Navbar';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { NotFound } from 'pages/NotFound';
import { UserProvider } from 'context/users/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
