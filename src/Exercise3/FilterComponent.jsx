import { useEffect, useState } from "react";
import FilterDropdown from "./FilterDropdown";

export default function FilterComponent() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedBS, setSelectedBS] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);
        setLoading(true);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching cities:", error);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  // if(loading) return(<p>...Loading</p>)
  // if(error !== null) return (<p>Error loading data: {error}</p>)

  return (
    <div style={{ maxWidth: "300px", margin: "2rem auto" }}>
      <div className="mb-5">
        <FilterDropdown
          options={data}
          labelKey="name"
          placeholder="Type a user..."
          valueChange={(user) => setSelectedUser(user)}
        />
        {selectedUser && (
          <p style={{ marginTop: "1rem" }}>
            City: <strong>{selectedUser.name}</strong>
          </p>
        )}
      </div>
      <div className="mb-5">
      <FilterDropdown
        options={data?.map((user) => user?.company)}
        labelKey="name"
        placeholder="Type a company..."
        valueChange={(company) => setSelectedCompany(company)}
      />
      {selectedCompany && (
        <p style={{ marginTop: "1rem" }}>
          Company: <strong>{selectedCompany?.name}</strong>
        </p>
      )}
      </div>
      <FilterDropdown
        options={data?.map((user) => user?.company)}
        labelKey="bs"
        placeholder="Type a bs..."
        valueChange={(company) => setSelectedBS(company)}
      />
      {selectedBS && (
        <p style={{ marginTop: "1rem" }}>
          BS: <strong>{selectedBS?.bs}</strong>
        </p>
      )}
    </div>
  );
}
