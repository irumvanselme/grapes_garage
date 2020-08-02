import React from "react";
import { CssBaseline } from "@material-ui/core";
import ClientLayout from "./layouts/client/layout";
import EmployeeLayout from "./layouts/employee/layout";
// import EditCustomer from "./pages/employee/customer/edit-customer";
// import EmployeeDashboard from "./pages/employee/dashboard/dashboard";
import ClientCars from "./pages/client/cars/client-cars";
import ProfileSettings from "./pages/client/profile/setting";
import RepairCarsList from "./pages/employee/tasks/repair-cars-list";
import NewRepairCar from "./pages/employee/tasks/new-repair-car";
import ResetPassword from "./pages/shared/password-reset";
import NotFound from "./pages/shared/not-found";
import Login from "./pages/shared/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//isClient toogles Employee or Client View

const isClient = false;

const Routing = (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        component={() =>
          isClient ? (
            <ClientLayout content={ClientCars} />
          ) : (
            <EmployeeLayout content={RepairCarsList} />
          )
        }
      />
      <Route path="/reset-password" component={ResetPassword} />
      <Route
        path="/profile/settings"
        component={() => <ClientLayout content={ProfileSettings} />}
      />
      <Route
        path="/cars/repair"
        component={() => <EmployeeLayout content={NewRepairCar} />}
      />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

function App() {
  return (
    <div>
      <CssBaseline />
      <div>{Routing}</div>
    </div>
  );
}

export default App