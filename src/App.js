import './App.css';
import Header from './pages/home/components/Header';
import Slider from './pages/home/components/Slider';
import About from './pages/home/components/About';
import Services from './pages/home/components/Services';
import BookingNow from './pages/home/components/BookingNow';
import OurWorks from './pages/home/components/OurWorks';
import WorkingHours from './pages/home/components/WorkingHours';
import Footer from './pages/home/components/Footer';
import Copyright from './pages/home/components/Copyright';

function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <BookingNow></BookingNow>
      <OurWorks></OurWorks>
      <WorkingHours></WorkingHours>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
