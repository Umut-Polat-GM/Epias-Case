import { useState } from "react";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showId, setShowId] = useState(true);
  const [showContract, setShowContract] = useState(true);
  const [showOffer, setShowOffer] = useState(true);
  const [showData, setShowData] = useState(true);

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

  return (
    <div>
      <div>
        {/* Pagination */}
        <select
          value={currentPage}
          onChange={(e) => handleChangePage(Number(e.target.value))}
        >
          {Array.from(Array(totalPages).keys()).map((page) => (
            <option key={page + 1} value={page + 1}>
              Page {page + 1}
            </option>
          ))}
        </select>

        {/* Column visibility */}
        <label>
          Show Id:
          <input
            type="checkbox"
            checked={showId}
            onChange={() => handleToggleColumn("id")}
          />
        </label>
        <label>
          Show Contract:
          <input
            type="checkbox"
            checked={showContract}
            onChange={() => handleToggleColumn("contract")}
          />
        </label>
        <label>
          Show Offer:
          <input
            type="checkbox"
            checked={showOffer}
            onChange={() => handleToggleColumn("offer")}
          />
        </label>
        <label>
          Show Data:
          <input
            type="checkbox"
            checked={showData}
            onChange={() => handleToggleColumn("data")}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            {showId && <th>Id</th>}
            {showContract && <th>Contract</th>}
            {showOffer && <th>Offer</th>}
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
