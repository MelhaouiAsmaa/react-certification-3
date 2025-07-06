import { useEffect, useState } from "react";
import FilterDropdown from "./FilterDropdown";

export default function FilterComponent() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>...Loading</p>;
  else if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className="container">
      <h2 className="mb-4 text-center">Auto-filter dropdown</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="p-3 bg-primary">
            {selectedUser && (
              <p style={{ marginTop: "1rem" }}>
                City: <strong>{selectedUser.name}</strong>
              </p>
            )}
            <FilterDropdown
              options={data}
              labelKey="name"
              placeholder="Type a user..."
              valueChange={(user) => setSelectedUser(user)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-success">
            {selectedCompany && (
              <p style={{ marginTop: "1rem" }}>
                Company: <strong>{selectedCompany?.name}</strong>
              </p>
            )}
            <FilterDropdown
              options={data?.map((user) => user?.company)}
              labelKey="name"
              placeholder="Type a company..."
              valueChange={(company) => setSelectedCompany(company)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
