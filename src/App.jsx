import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Views
import Home from './views/Home'
import Projects from "./views/Projects";
import ProjectDetail from './views/Project'
// Components
import ScrollToTop from './utility/ScrollToTip';


function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </Router>
    )
}

export default App
