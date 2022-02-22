import * as React from 'react';
import { useLocation,Link,Outlet } from "react-router-dom";

export function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function App() {
  return (
    <div>
      <h1>Rafael Martins</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
