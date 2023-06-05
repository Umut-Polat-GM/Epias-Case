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
          <AiFillSave  style={{width:"24px", height:"24px"}}/>
          <p>Çalışma Alanı</p>
        </div>
        <div>Kullanıcı</div>
      </div>
    </div>
  );
}

export default Navbar;
