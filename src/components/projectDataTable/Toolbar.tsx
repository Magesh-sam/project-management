import { GridToolbarContainer, GridToolbar } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

function Toolbar() {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/primaryform");
  };
  return (
    <GridToolbarContainer>
      <GridToolbar />

      <button
        onClick={handleAdd}
        className="bg-[#466596] px-2 py-3 text-white rounded-md m-2"
      >
        + Add record
      </button>
    </GridToolbarContainer>
  );
}

export default Toolbar;
