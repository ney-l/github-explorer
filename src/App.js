import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, User, NotFound } from 'pages';
import { Alert, Footer, Navbar } from 'components/layout';
import { AlertProvider, UserProvider } from 'context';

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <Router basename="github-explorer">
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:username" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </UserProvider>
  );
}

export default App;
