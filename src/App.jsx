import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import PersonalDetail from './pages/personalDetail'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Achievement from './pages/Achievement'
import Project from './pages/projects'
import Skills from './pages/skills'
import Review from './pages/Review'
import Landing from './pages/Landing'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
    <DataProvider>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/app/personal-detail" element={<PersonalDetail/>} />
        <Route path="/app/education" element={<Education/>} />
        <Route path="/app/experience" element={<Experience/>} />
        <Route path="/app/projects" element={<Project/>} />
        <Route path="/app/achievement" element={<Achievement/>} />
        <Route path="/app/skills" element={<Skills/>} />
        <Route path="/app/review" element={<Review/>} />
      </Routes>
    </DataProvider>
    </>
  )
}

export default App
