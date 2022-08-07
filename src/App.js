import React from "react";
import RTable from "./RTable";
import makeData from "./makeData";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Visits",
        accessor: "visits"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Profile Progress",
        accessor: "progress"
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(110), []);

  return (
    <div>
      <RTable columns={columns} data={data} />
    </div>
  );
}

export default App;
