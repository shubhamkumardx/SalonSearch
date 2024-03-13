import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Userimage from "./images/Userimage.jpg";
import { AiOutlineRocket } from "react-icons/ai";
import { LiaAddressCardSolid } from "react-icons/lia";

import "./Comparison.css";
import "./index.css";

import { useEffect, useState } from "react";

import SalesReport from "./Components/SalesReport";
import Comparison from "./Components/Comparison";
import ItemReport from "./Components/ItemReport";
import CogsReport from "./Components/CogsReport";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import toast, { Toaster } from "react-hot-toast";
import Forgotpassword from "./Components/Forgotpassword";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Create from "./New_Components/Business_Type/Create-Business-Type/Create";
import List from "./New_Components/Business_Type/Business-Type-list/List";
import ServiceCreate from "./New_Components/Service/Service-create/ServiceCreate";
import Servicelist from "./New_Components/Service/service-list/Servicelist";
import HairCreate from "./New_Components/Hair-Type/HairCreate/HairCreate";
import HairList from "./New_Components/Hair-Type/HairList/HairList";
import AdminCreate from "./New_Components/Admin/AdminCreate/AdminCreate";
import AdminList from "./New_Components/Admin/AdminList/AdminList";
import UserList from "./New_Components/Users/UserList";
import BusinessCreate from "./New_Components/Business/BusinessCreate/BusinessCreate";
import BusinessList from "./New_Components/Business/BusinessList/BusinessList";
import Dashboard from "./New_Components/Dashboards/Dashboard";
import Profile from "./New_Components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/login" />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute>
              <Forgotpassword />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/BusinessTypeCreate"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/BusinessTypelist"
          element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/ServiceCreate"
          element={
            <ProtectedRoute>
              <ServiceCreate />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Servicelist"
          element={
            <ProtectedRoute>
              <Servicelist />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/HairTypeCreate"
          element={
            <ProtectedRoute>
              <HairCreate />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/HairTypeList"
          element={
            <ProtectedRoute>
              <HairList />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/SubadminCreate"
          element={
            <ProtectedRoute>
              <AdminCreate />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/SubadminList"
          element={
            <ProtectedRoute>
              <AdminList />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Userslist"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/BusinessCreate"
          element={
            <ProtectedRoute>
              <BusinessCreate />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/BusinessList"
          element={
            <ProtectedRoute>
              <BusinessList />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
export default App;
