import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Trusted from './component/trusted/Trusted';
import Service from './component/service/Service';
import Project from './component/project/Project';
import Blog from './component/blog/Blog';
import Product from './component/product/Product';
import Experience from './component/experience/Experience';
import Testimonial from './component/testimonial/Testimonial';
import FAQ from './component/faq/FAQ';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Trusted />
      <Service />
      <Project />
      <Blog />
      <Product />
      <Experience />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
