import "../dist/css/style.css";
import { AiFillSave } from "react-icons/ai";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img
          src="../public/epias.png"
          alt="epias-png"
          style={{ width: "48px", height: "48px" }}
        />
      </div>
      <div className="navbar__items">
        <div className="navbar__item">
          <AiFillSave  style={{width:"24px", height:"24px"}}/>
          Çalışma Alanı
        </div>
        <div>Kullanıcı</div>
      </div>
    </div>
  );
}

export default Navbar;
