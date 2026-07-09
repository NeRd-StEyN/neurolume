import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ingredients from './components/Ingredients';
import StressDashboard from './components/StressDashboard';
import ProductDetails from './components/ProductDetails';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#020705] min-h-screen text-slate-100 relative selection:bg-sage selection:text-forest-dark overflow-x-hidden">
      {/* Background ambient particles (Botanical Nutrients) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* We can construct 4 dynamic particle glows drifting slowly */}
        <div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 rounded-full bg-sage-light opacity-30 particle" style={{ '--x-offset': '45px', animationDelay: '0s', animationDuration: '14s' }} />
        <div className="absolute top-[45%] left-[75%] w-2 h-2 rounded-full bg-sunset opacity-25 particle" style={{ '--x-offset': '-60px', animationDelay: '3s', animationDuration: '11s' }} />
        <div className="absolute top-[65%] left-[15%] w-1 h-1 rounded-full bg-sage opacity-45 particle" style={{ '--x-offset': '30px', animationDelay: '6s', animationDuration: '16s' }} />
        <div className="absolute top-[85%] left-[60%] w-2 h-2 rounded-full bg-sunset-pale opacity-20 particle" style={{ '--x-offset': '-40px', animationDelay: '1s', animationDuration: '13s' }} />
      </div>

      {/* Main Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Ingredients />
          <StressDashboard />
          <ProductDetails />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
