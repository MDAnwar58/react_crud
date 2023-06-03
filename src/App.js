import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from './Context/SkillContext'
import Home from './components/Home';
import Index from './components/skills/Index';
import Create from './components/skills/Create';
import Edit from './components/skills/Edit';

function App() {
  return (
      <SkillProvider>
    <div className="bg-slate-200 px-20 pt-10">
        <div className="max-w-7xl mx-auto min-h-screen">
                <nav>
                    <ul className="flex">
                        <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                            <Link to="/skills">Skills</Link>
                        </li>
                    </ul>
                </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/skills" element={<Index/>}></Route>
                <Route path="/skills/create" element={<Create/>}></Route>
                <Route path="/skills/edit/:id" element={<Edit/>}></Route>
            </Routes>
        </div>
    </div>
      </SkillProvider>
  );
}

export default App;
