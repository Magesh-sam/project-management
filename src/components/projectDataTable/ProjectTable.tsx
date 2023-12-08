import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import EditToolbar from "./Toolbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/material";
import { deleteProject } from "../../redux/features/projectTable";
import { useNavigate } from "react-router-dom";
import { projectTableRowProps } from "../../lib/types";

function ProjectTable() {
  const projectTable = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate("/update", { state: { id } });
  };
  const handleDeleteClick = (id: number) => {
    const consent = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (consent) {
      dispatch(deleteProject(id));
    }
    return;
  };

  const columnDef: GridColDef[] = [
    {
      field: "Id",
      headerName: "ID",
      minWidth: 50,
      hideable: false,
    },
    { field: "Name", headerName: "Name", minWidth: 150, hideable: true },
    {
      field: "Description",
      headerName: "Description",
      minWidth: 350,
      hideable: true,
    },
    { field: "Type", headerName: "Type", minWidth: 250, hideable: true },
    { field: "Size", headerName: "Size", minWidth: 150, hideable: true },
    { field: "Client", headerName: "Client", minWidth: 150, hideable: true },
    { field: "Status", headerName: "Status", minWidth: 150, hideable: true },
    { field: "Country", headerName: "Country", minWidth: 150, hideable: true },
    { field: "City", headerName: "City", minWidth: 150, hideable: true },
    {
      field: "StartDate",
      headerName: "Start Date",
      type: "Date",
      minWidth: 150,
      hideable: true,
    },
    {
      field: "EndDate",
      headerName: "End Date",
      type: "Date",
      minWidth: 150,
      hideable: true,
    },
    { field: "Email", headerName: "Email", minWidth: 300, hideable: true },
    {
      field: "Alternative-Email",
      headerName: "Alternative Email",
      minWidth: 350,
      hideable: true,
    },
    {
      field: "Contact-No",
      headerName: "Contact No",
      minWidth: 150,
      hideable: true,
    },
    {
      field: "Emergency-Contact-No",
      headerName: "Emergency Contact No",
      minWidth: 200,
      hideable: false,
    },
    {
      field: "Actions",
      headerName: "Actions",
      renderCell(params) {
        return (
          <div className="flex gap-3">
            <button
              aria-label="edit"
              onClick={() => handleEditClick(+params.id)}
            >
              <EditIcon />
            </button>
            <button
              aria-label="delete"
              onClick={() => handleDeleteClick(+params.id)}
            >
              <DeleteIcon />
            </button>
          </div>
        );
      },
    },
  ];
  const rowDef = projectTable.map((project: projectTableRowProps) => {
    return {
      Id: project.id,
      Name: project.projectName,
      Description: project.projectDescription,
      Type: project.projectType,
      Size: project.projectSize,
      Client: project.client,
      Status: project.projectStatus,
      Country: project.projectLocation.country,
      City: project.projectLocation.city,
      StartDate: project.startDate,
      EndDate: project.endDate,
      Email: project.email,
      "Alternative-Email": project.alternativeEmail,
      "Contact-No": project.contactNo,
      "Emergency-Contact-No": project.emergencyContactNo,
    };
  });

  return (
    <Box sx={{ height: "650px", width: "100%" }}>
      <DataGrid
        columns={columnDef}
        rows={rowDef}
        getRowId={(row) => row.Id}
        getRowHeight={() => "auto"}
        slots={{
          toolbar: EditToolbar,
        }}
        initialState={{
          sorting: {
            sortModel: [{ field: "Id", sort: "desc" }],
          },
        }}
        sx={{
          "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "8px" },
          "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
            py: "15px",
          },
          "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
            py: "22px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#466596",
            color: "white",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-sortIcon": {
            opacity: 1,
            color: "white",
          },
          "& .MuiDataGrid-menuIconButton": {
            opacity: 1,
            color: "white",
          },
          "& .MuiDataGrid-columnHeader--sorted ": {
            backgroundColor: "#F3A950",
            color: "black",
          },
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      />
    </Box>
  );
}

export default ProjectTable;
