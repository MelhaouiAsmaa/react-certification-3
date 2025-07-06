import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CountSetterComponent } from "./Exercise1/CountSetterComponent";
import { HomePage } from "./HomePage";
import FilterComponent from "./Exercise3/FilterComponent";
import DialogTest from "./Exercise2/DialogTest";
import { GenericProvider } from "./Exercise1/GenericContext.jsx";
import { NameSetterComponent } from "./Exercise1/NameSetterComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Redirect to exercise1 */}
        <Route
          path="/exercise1"
          element={
            <>
              <GenericProvider keyName="count" initialValue={0}>
                <CountSetterComponent />
              </GenericProvider>
              <GenericProvider keyName="name" initialValue="Waiting for name..">
                <NameSetterComponent />
              </GenericProvider>
            </>
          }
        />
        <Route path="/exercise2" element={<DialogTest />} />
        <Route path="/exercise3" element={<FilterComponent />} />
      </Routes>
    </>
  );
}
export default App;
