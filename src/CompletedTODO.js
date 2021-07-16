import { useLocation } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

export default function CompletedTODOS(props) {
  let location = useLocation();

  const columns = [
    { field: "title", headerName: "Todo Title", width: 150 },
    { field: "description", headerName: "Todo Description", width: 400 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "endTime",
      headerName: "Created On",
      type: "date",
      width: 200,
    },
    {
      field: "helpRequired",
      headerName: `Discussion Needed?`,
      width: 250,
    },
  ];
  console.log("location data", location);
  const todos = location.state;
  return (
    
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={todos} columns={columns} pageSize={20} />
    </div>
  );
}
