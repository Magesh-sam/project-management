import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { projectTableRowProps } from "../lib/types";

function ProjectDataTable() {
  const projectTableData: projectTableRowProps[] = useSelector(
    (state: RootState) => state.projectTable.projects
  );

  const columnHelper = createColumnHelper<projectTableRowProps>();
  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: () => "Id",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectName", {
      cell: (info) => info.getValue(),
      header: () => "Project Name",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectDescription", {
      cell: (info) => info.getValue(),
      header: () => "Project Description",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectType", {
      cell: (info) => info.getValue(),
      header: () => "Project Type",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectSize", {
      cell: (info) => info.getValue(),
      header: () => "Project Size",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("client", {
      cell: (info) => info.getValue(),
      header: () => "Client",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectStatus", {
      cell: (info) => info.getValue(),
      header: () => "Project Status",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectLocation.country", {
      cell: (info) => info.getValue(),
      header: () => "Project Country",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("projectLocation.city", {
      cell: (info) => info.getValue(),
      header: () => "Project City",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("startDate", {
      cell: (info) => info.getValue(),
      header: () => "Start Date",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("endDate", {
      cell: (info) => info.getValue(),
      header: () => "End Date",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
      header: () => "Email",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("alternativeEmail", {
      cell: (info) => info.getValue(),
      header: () => "Alternative Email",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("contactNo", {
      cell: (info) => info.getValue(),
      header: () => "Contact No",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("emergencyContactNo", {
      cell: (info) => info.getValue(),
      header: () => "Emergency Contact No",
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data: projectTableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main>
      <table className=" block border-collapse border-2 border-blue-500  whitespace-nowrap mt-[120px] max-w-[95vw] overflow-scroll mb-8">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </main>
  );
}

export default ProjectDataTable;
