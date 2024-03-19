"use client"
import React, { useState } from 'react';
import StudentDashboard from './studentDashboard';
import AdminDashboard from './AdminDashboard';
function PageDashboard() {
  const [user, setUser] = useState("admin");

  switch (user) {
    case "student":
      return <StudentDashboard/>;
    // case "teacher":
    //   return <TeacherDashboard />;
    // case "assistant":
    //   return <AssistantDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return null;
  }
}

export default PageDashboard;
