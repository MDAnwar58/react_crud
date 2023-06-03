import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-black mt-12">Welcome Learn Laravel And React Crud Project</h1>
            <Link to="/skills" className="text-blue-500">Learn more</Link>
        </div>
    );
};

export default Home;