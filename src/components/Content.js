import '../App.css';
import PropTypes from 'prop-types';

function Content() {
    
    function CekDiskon(props) {
        const {IsDiskon, diskon} = props;
        if (IsDiskon == "yes") {
          return (
            <p>Diskon {diskon}% Off</p>
          );
        } 
        else if (IsDiskon == "coming") {
          return (
            <p>besok akan ada diskon</p>
          );
        }
        else {
          return (
            <p>Belum ada diskon</p>
          );
        }
      }
      
      function ProdukInfo(props) {
        const {category,name,IsDiskon} = props; 
        const benefits = ["Tidak Kusut Terkena Air", "Bahan Nyaman", "Tidak gampang Bau"];
        const listBenefits = benefits.map((itemBenefit) =>
          <li key={itemBenefit}>{itemBenefit}</li>
      )
        return (
          <div>
      
            <div className="Deskripsi">
              <p className="Cate">{category}</p>
              <h1 className="Title">{name}</h1>
              <p className="Price">IDR 12.000.000</p>
              <CekDiskon IsDiskon={IsDiskon} diskon={50} />
              <p className="Info">
                Sepatu Nike Air adalah sepatu olahraga yang ikonik dan inovatif, terkenal karena desainnya yang stylish dan teknologi canggihnya. Desainnya yang futuristik dan ergonomis membuatnya cocok untuk berbagai aktivitas, mulai dari berlari hingga bermain basket.
              </p>
              <ul>
                {listBenefits}
              </ul>
              <a onClick={(e) => TambahCart(name, e)} href="#">Add to cart</a>
            </div>
      
          </div>
        );
      }  
      
      function TambahCart(e) {
        console.log("Membeli " + e);
      }
      
      CekDiskon.propTypes = {
        diskon: PropTypes.number.isRequired
      };
      

}

export default Content;

  

  