import { React, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext"

const Index = () => {
    const { skills, getSkills, deleteSkill, setErrors } = useContext(SkillContext);

    useEffect(() => {
        getSkills();
        setErrors({});
    }, []);
    return (
        <div className="pt-12 container lg:px-20">
            <div className="flex justify-end m-2 p-2">
                <Link to="/skills/create" className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded">New Skills</Link>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {skills.map((skill) => {
                        return (
                            <tr key={skill.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    {skill.skillName}
                                </td>
                                <td className="px-6 py-4">
                                    {skill.url}
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to={`/skills/edit/${skill.id}`} className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded">Edit</Link>
                                    <button onClick={() => deleteSkill(skill.id)} className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 ms-2 rounded">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;