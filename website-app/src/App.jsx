import { lazy, Suspense } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'

const About = lazy(() => import('./About.jsx'))
const Skills = lazy(() => import('./Skills.jsx'))
const Projects = lazy(() => import('./Projects.jsx'))

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <About />
                    <Skills />
                    <Projects />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App
