import React from 'react';
import { CssBaseline } from '@material-ui/core';
import ClientLayout from './layouts/client/layout';
import EmployeeLayout from './layouts/employee/layout';
import EditCustomer from './pages/employee/customer/edit-customer';
import EmployeeDashboard from './pages/employee/dashboard/dashboard';
import ClientCars from './pages/client/cars/client-cars';
import RepairCarsList from './pages/employee/tasks/repair-cars-list';
import ResetPassword from './pages/shared/password-reset';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Not Found Component
const Notfound = () => {
  return (
    <h1> Not found </h1>
  )
}

//isClient toogles Employee or Client View
const isClient = false;

const Routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={() => (isClient ? <ClientLayout content={ClientCars} /> : <EmployeeLayout content={EmployeeDashboard} />)} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route component={Notfound} />
    </Switch>
  </Router>
)

function App() {
  return (
    <div>
      <CssBaseline />
      <div>
        {Routing}
      </div>
    </div>
  )
}

export default App;
