import { React, createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
    const [name, setName] = useState({ name: "" });
    const [slug, setSlug] = useState({ slug: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // const [value, setValue] = useState({
    //     name: "",
    //     slug: ""
    // });

    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);

    const onChangeName = (e) => {
        const value = e.target.value;
        setName({name: value })
    }
    const onChangeSlug = (e) => {
        const value = e.target.value;
        setSlug({slug: value })
    }

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };
    const getSkill = async (id) => {
        const response = await axios.get("skills/"+id);
        const apiSkill = response.data.data;
        setSkill(apiSkill);
        setName({name:apiSkill.skillName});
        setSlug({slug:apiSkill.url});
    }

    const storeSkill = async (e) => {
        e.preventDefault();
        const value = {
            name: name.name,
            slug: slug.slug,
        }
        try{
            await axios.post("skills", value);
            getSkills();
            navigate("/skills");
        }catch (error)
        {
            if(error.response.status === 422)
            {
                setErrors(error.response.data.errors);
            }
        }
    }

    const updateSkill = async (e) => {
        e.preventDefault();
        const value = {
            name: name.name,
            slug: slug.slug,
        }

        try{
            await axios.put("skills/"+skill.id, value);
            getSkills();
            navigate("/skills");
        } catch (error)
        {
            if(error.response.status === 422)
            {
                setErrors(error.response.data.errors);
            }
        }
    }

    const deleteSkill = async (id) => {
        await axios.delete("skills/"+id);
        getSkills();
        // navigate("/skills");
    }

    return <SkillContext.Provider value={{
        skill,
        skills,
        getSkill,
        getSkills,
        name, slug,
        onChangeName,
        onChangeSlug,
        storeSkill,
        errors,
        setErrors,
        updateSkill,
        deleteSkill
    }}>{children}</SkillContext.Provider>
};

export default SkillContext;