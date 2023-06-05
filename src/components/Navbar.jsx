import "../dist/css/style.css";
import { AiFillSave } from "react-icons/ai";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="../public/epias.png"
          alt="epias-png"
        />
      </div>
      <div className="navbar__items">
        <div className="navbar__item">
          <AiFillSave  style={{width:"32px", height:"32px", color:"green"}}/>
          <p>Çalışma Alanı</p>
        </div>
        <div>Kullanıcı</div>
      </div>
    </div>
  );
}

export default Navbar;
