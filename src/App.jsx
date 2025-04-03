import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/interview/start" element={<InterviewStart />} />
        <Route path="/interview/coding" element={<CodingInterview />} />
        <Route path="/interview/behavioral" element={<BehavioralInterview />} />
      </Routes>
    </Router>
  )
}

export default App