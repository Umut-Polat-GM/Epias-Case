import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FaUpload } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showId, setShowId] = useState(true);
  const [showContract, setShowContract] = useState(true);
  const [showOffer, setShowOffer] = useState(true);
  const [showData, setShowData] = useState(true);
  const [showAction, setShowAction] = useState(false);

  const {  simulation1Size } = useSelector(
    (state) => state.size
  );

  // Sample data for the table
  const data = [
    { id: 1, contract: "Contract 1", offer: "Offer 1", data: "Data 1" },
    { id: 2, contract: "Contract 2", offer: "Offer 2", data: "Data 2" },
    { id: 3, contract: "Contract 3", offer: "Offer 3", data: "Data 3" },
    { id: 4, contract: "Contract 4", offer: "Offer 4", data: "Data 4" },
    { id: 5, contract: "Contract 5", offer: "Offer 5", data: "Data 5" },
    { id: 6, contract: "Contract 6", offer: "Offer 6", data: "Data 6" },
    { id: 7, contract: "Contract 7", offer: "Offer 7", data: "Data 7" },
    { id: 8, contract: "Contract 8", offer: "Offer 8", data: "Data 8" },
    { id: 9, contract: "Contract 9", offer: "Offer 9", data: "Data 9" },
    { id: 10, contract: "Contract 10", offer: "Offer 10", data: "Data 10" },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Toggle column visibility
  const handleToggleColumn = (column) => {
    switch (column) {
      case "id":
        setShowId(!showId);
        break;
      case "contract":
        setShowContract(!showContract);
        break;
      case "offer":
        setShowOffer(!showOffer);
        break;
      case "data":
        setShowData(!showData);
        break;
      default:
        break;
    }
  };

  const showCheckbox = () => {
    setShowAction(!showAction);
  }

  return (
    <div className="dataTableContent" style={{width:`${simulation1Size -10}px`}}>
      <div className="table-nav">
        {/* Pagination */}
        <div>
          <select
            value={currentPage}
            onChange={(e) => handleChangePage(Number(e.target.value))}
          >
            {Array.from(Array(totalPages).keys()).map((page) => (
              <option key={page + 1} value={page + 1}>
                Kontrat Şeçiniz {page + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Column visibility */}
        <div className="dropdown">
          <div className="dropdown__icons">
          <FaUpload className="dropdown__icon"/>
          <IoSettingsSharp onClick={showCheckbox} className="dropdown__icon" />
          <AiOutlinePlus  className="dropdown__icon" />

          </div>
          {showAction && <div className="dropdown-content">
            <label>
              <input
                type="checkbox"
                checked={showId}
                onChange={() => handleToggleColumn("id")}
              />
              Id
            </label>
            <label>
              <input
                type="checkbox"
                checked={showContract}
                onChange={() => handleToggleColumn("contract")}
              />
              Kontrat
            </label>
            <label>
              <input
                type="checkbox"
                checked={showOffer}
                onChange={() => handleToggleColumn("offer")}
              />
              Teklif
            </label>
            <label>
              <input
                type="checkbox"
                checked={showData}
                onChange={() => handleToggleColumn("data")}
              />
              Data
            </label>
          </div>}
        </div>
      </div>
      <table className="table" style={{width:`${simulation1Size-10}px`}}>
        <thead>
          <tr>
            {showId && <th>Id</th>}
            {showContract && <th>Kontrat</th>}
            {showOffer && <th>Teklif</th>}
            {showData && <th>Data</th>}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              {showId && <td>{item.id}</td>}
              {showContract && <td>{item.contract}</td>}
              {showOffer && <td>{item.offer}</td>}
              {showData && <td>{item.data}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
