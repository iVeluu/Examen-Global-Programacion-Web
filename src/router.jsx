import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import LoginViewForm from "./views/LoginViewForm";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardView from "./views/DashboardView";


export default function Router(){
    return (
      <BrowserRouter>
        <Routes>
          <Route element={< AuthLayout/>}>
            <Route path="/auth/login" element={<LoginViewForm />} />
          </Route>
          <Route element={< DashboardLayout/>}>
            <Route path="/dashboard" element={<DashboardView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}