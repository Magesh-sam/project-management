import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.min.css";
import { useSelector } from "react-redux";
import { ColDef } from "ag-grid-community";
import { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

function ProjectGridTable() {
  const projectTable = useSelector(
    (state: RootState) => state.projectTable.projects
  );
  const rowDef = projectTable.map((project) => {
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
      StartDate: new Date(project.startDate),
      EndDate: new Date(project.endDate),
      Email: project.email,
      "Alternative-Email": project.alternativeEmail,
      "Contact-No": project.contactNo,
      "Emergency-Contact-No": project.emergencyContactNo,
    };
  });
  const [columnDef] = useState<ColDef[]>([
    { field: "Id" },
    { field: "Name" },
    { field: "Description" },
    { field: "Type" },
    { field: "Size" },
    { field: "Client" },
    { field: "Status" },
    { field: "Country" },
    { field: "City" },
    { field: "StartDate" },
    { field: "EndDate" },
    { field: "Email" },
    { field: "Alternative-Email" },
    { field: "Contact-No" },
    { field: "Emergency-Contact-No" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );
  const [rowData] = useState(rowDef.reverse());
  const gridRef = useRef<AgGridReact>(null);
  const pageRef = useRef<HTMLSelectElement>(null);
  return (
    <div
      id="myGrid"
      className="ag-theme-material  h-[90vh] w-[95vw] my-8 mx-auto "
    >
      <div className="flex items-center justify-between">
        <Link
          to="/primaryform"
          className="bg-[#466596] text-white px-4 py-3  rounded-md "
        >
          Add New Project
        </Link>
        <label
          htmlFor="pagezsize"
          className="flex gap-2 items-center text-base m-2 border border-black p-1"
        >
          <span>items per page: </span>
          <select
            name="pagesize"
            id="pagesize"
            ref={pageRef}
            onChange={() =>
              gridRef.current!.api.paginationSetPageSize(
                Number(pageRef.current!.value)
              )
            }
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
      <AgGridReact
        columnDefs={columnDef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        rowSelection="single"
        pagination
        paginationPageSize={25}
        ref={gridRef}
        getRowId={(params) => params.data.Id}
      />
    </div>
  );
}

export default ProjectGridTable;
