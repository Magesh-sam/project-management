import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ColDef } from "ag-grid-community";
import { useState, useRef } from "react";

function ProjectGrid() {
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
      StartDate: project.startDate,
      EndDate: project.endDate,
      Email: project.email,
      "Alternative-Email": project.alternativeEmail,
      "Contact-No": project.contactNo,
      "Emergency-Contact-No": project.emergencyContactNo,
    };
  });
  const [columnDef] = useState<ColDef[]>([
    { field: "Id", sortable: true, filter: true },
    { field: "Name", sortable: true, filter: true },
    { field: "Description", sortable: true, filter: true },
    { field: "Type", sortable: true, filter: true },
    { field: "Size", sortable: true, filter: true },
    { field: "Client", sortable: true, filter: true },
    { field: "Status", sortable: true, filter: true },
    { field: "Country", sortable: true, filter: true },
    { field: "City", sortable: true, filter: true },
    { field: "StartDate", sortable: true, filter: true },
    { field: "EndDate", sortable: true, filter: true },
    { field: "Email", sortable: true, filter: true },
    { field: "Alternative-Email", sortable: true, filter: true },
    { field: "Contact-No", sortable: true, filter: true },
    { field: "Emergency-Contact-No", sortable: true, filter: true },
  ]);
  const [rowData] = useState(rowDef.reverse());
  const gridRef = useRef<AgGridReact>(null);
  const pageRef = useRef<HTMLSelectElement>(null);

  return (
    <main className="max-w-screen min-h-screen">
      <div id="myGrid" className="ag-theme-material  h-[70vh] w-[95vw] my-8 ">
        <label
          htmlFor="pagezsize"
          className="flex gap-2 items-center text-base m-2"
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
        <AgGridReact
          columnDefs={columnDef}
          rowData={rowData}
          animateRows
          rowSelection="single"
          pagination
          paginationPageSize={25}
          ref={gridRef}
          className="bg-blue-500"
          getRowId={(params) => params.data.Id}
        />
      </div>
    </main>
  );
}

export default ProjectGrid;
