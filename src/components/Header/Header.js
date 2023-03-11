import "../Header/Header.css";
import { images } from "../../constants/Images";

const Header = () => {
  return (
    <div className="header container-fluid bg-black">
      <div className="header-logo">
        <img src={images.logo1} alt="logo1" className="img-logo1"/>             
      </div>
      <div className="header-title">
        <p>PIZZA PALACE</p>
      </div>
      <div className="header-wp bg-secondary">
      <button type="button" class="button-wp btn btn-secondary">
        <i className="bi bi-whatsapp"></i>
      </button>          
      </div>    
    </div>
  )
}

export default Header;


