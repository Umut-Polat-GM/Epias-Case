import { useState } from "react";

const Table = () => {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({
    column1: "",
    column2: "",
    column3: "",
    column4: "",
  });
  const [isRowAdded, setIsRowAdded] = useState(false);

  const addRow = () => {
    setRows([...rows, newRow]);
    setNewRow({
      column1: "",
      column2: "",
      column3: "",
      column4: "",
    });
    setIsRowAdded(true);
  };

  const handleInputChange = (event, columnName) => {
    setNewRow({ ...newRow, [columnName]: event.target.value });
  };

  const saveRow = () => {
    setRows([...rows, newRow]);
    setNewRow({
      column1: "",
      column2: "",
      column3: "",
      column4: "",
    });
    setIsRowAdded(false);
  };

  return (
    <div className="addDataContent">
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
              <td>{row.column4}</td>
            </tr>
          ))}
          {isRowAdded && (
            <tr>
              <td>
                <input
                  type="text"
                  value={newRow.column1}
                  onChange={(event) => handleInputChange(event, "column1")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.column2}
                  onChange={(event) => handleInputChange(event, "column2")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.column3}
                  onChange={(event) => handleInputChange(event, "column3")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newRow.column4}
                  onChange={(event) => handleInputChange(event, "column4")}
                />
              </td>
              <td>
                <button onClick={saveRow}>Kaydet</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={addRow}>Yeni Ekle</button>
    </div>
  );
};

export default Table;
