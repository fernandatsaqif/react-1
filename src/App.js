import './App.css';
import Content from './components/Content';
import FotoProduk from './components/FotoProduk';
import Reviews from './components/Reviews';



function App() {
  return (
    <div className="Parentbox">

      <FotoProduk />
      <Content IsDiskon="yes" name="Nike Air 2" category="TREND MASA KINI" />
      <Reviews />
      
    </div>
  );
}

export default App;

