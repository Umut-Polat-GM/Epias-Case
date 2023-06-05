import { useSelector } from "react-redux";

function Settings() {
  const { splitSize, simulation1Size, simulation2Size } = useSelector(
    (state) => state.size
  );

  const containerSize = window.innerWidth;
  const percentageHorizontal = (splitSize / containerSize) * 100;
  const percentageVerticall = (simulation1Size / containerSize) * 100;
  const percentageVertical2 = (simulation2Size / containerSize) * 100;
  const horizontal = `${percentageHorizontal.toFixed(2)}%`;
  const verticall = `${percentageVerticall.toFixed(2)}%`;
  const vertical2 = `${percentageVertical2.toFixed(2)}%`;
  return (
    <div
      className="settingsContent"
      style={{ width: `${containerSize - simulation1Size - 10}px` }}
    >
      <div className="settings">
        <div className="settings__text">
          <h2>Ayarlar</h2>
          <h3>Yatay Pencere Değerleri:</h3>
          <p>{horizontal}</p>
          <h3>Üst Pencere Değerleri:</h3>
          <p>{verticall}</p>
          <h3>Alt Pencere Değerleri:</h3>
          <p>{vertical2}</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
