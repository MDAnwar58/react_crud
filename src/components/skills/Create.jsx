import { React, useContext, useEffect } from 'react';
import SkillContext from "../../Context/SkillContext";

const Create = () => {
    const { onChangeName, onChangeSlug, storeSkill, errors, setErrors } = useContext(SkillContext);

    useEffect(() => {
        setErrors({});
    }, []);

    return (
        <div className="pt-12">
            <form onSubmit={storeSkill} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
                <div className="space-y-600">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" name="name" onChange={onChangeName} className="border border-gray-900 text-sm rounded-md block w-full p-2"/>
                        {errors.name && (
                            <span className="text-sm text-red-400">{errors.name[0]}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="slug" className="block mb-2 text-sm font-medium">Slug</label>
                        <input type="text" name="slug" onChange={onChangeSlug} className="border border-gray-900 text-sm rounded-md block w-full p-2"/>
                        {errors.slug && (
                            <span className="text-sm text-red-400">{errors.slug}</span>
                        )}
                    </div>
                </div>
                <div className="my-4">
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded">Save</button>
                </div>
            </form>
        </div>
    );
};

export default Create;