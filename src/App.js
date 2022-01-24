import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { StorageProvider } from './contexts/StorageContext'
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import DashboardHome from './pages/DashboardHome';
import MyResume from './pages/MyResume';
import UploadResume from './pages/UploadResume';
import Result from './pages/Result'
import Test from './pages/Test';

const App = () =>{
  return(
      <Router>
        <AuthProvider>
          <StorageProvider>
            <Switch>
              <Route exact path='/' element={<Navigate to='/home'/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgot-password" element={<ForgotPassword/>}/>
              <Route path ="/dashboard" element={
                <PrivateRoute>   
                  <DashboardHome/>
                </PrivateRoute>
              }/>
              <Route path="dashboard/upload-resume" element={
                <PrivateRoute>   
                  <UploadResume/>
                </PrivateRoute>
              }/>
              <Route path="dashboard/my-resume" element={
                <PrivateRoute>   
                  <MyResume/>
                </PrivateRoute>
              }/>
              <Route path="dashboard/result" element={
                <PrivateRoute>   
                  <Result/>
                </PrivateRoute>
              }/>
              <Route path="/test" element={
                <Test/>
              }/>
            </Switch>
          </StorageProvider>
        </AuthProvider>
      </Router>
  )
}

export default App;

