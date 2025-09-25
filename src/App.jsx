
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_API_URL;


const App = () => {
    const [form, setform] = useState({ task: "", user: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const editT = (id) => {
        const selectedItem = passwordArray.find(i => i.id === id)
        setform({ ...selectedItem })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            toast.success('Copied the item!', {
                position: "top-right",
                autoClose: 2000,
                theme: "dark"
            });
        } catch (err) {
            console.error("Clipboard error:", err)
            toast.error("Failed to copy", {
                position: "top-right",
                autoClose: 2000,
                theme: "dark"
            });
        }
    }

  
const getData = async () => {
    let req = await fetch(API_URL)
    let data = await req.json()
    setPasswordArray(data)
}

    useEffect(() => {
        getData()
    }, [])

    const deleteBtn = async (id) => {
        setPasswordArray(passwordArray.filter(item => item.id !== id))
     
    await fetch(API_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
})
    
    }

    const saveData = async (e) => {
        e.preventDefault()
        if (form.task.length > 3 && form.user.length > 3) {
            const newTask = { ...form, id: uuidv4(), isCompleted: false };
            setPasswordArray([...passwordArray, newTask])
          
        await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
}

        )
            setform({ task: "", user: "", id: "" });

        } else {
            toast.error("Please enter at least 4 characters in both fields.")
        }
    }

    const toggleCheckbox = (id) => {
        const updatedArray = passwordArray.map(item =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        )
        setPasswordArray(updatedArray)
    }

    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className=" bg-violet-900 h-screen">
                <div className="items-center flex flex-col ">
                    <h1 className='font-bold text-white text-xl mt-9'>iTask-Manager</h1>
                    <div className="flex flex-col">
                        <form className='flex flex-col gap-5 mt-4'>
                            <input value={form.user} onChange={handleChange} placeholder='Enter Username' className='rounded-md border border-violet-500 w-[40vw] p-4 py-1 cursor-pinter' type="text" name="user" id="user" />
                            <input value={form.task} onChange={handleChange} placeholder='task...' className='rounded-md border border-violet-500 w-[40vw] p-4 py-1 cursor-pointer' type="text" name="task" id="task" />
                            <button onClick={saveData} className='bg-violet-700 text-white font-bold p-1 w-[10vw] rounded-full'>{form.id ? "Update" : "+Add"}</button>
                        </form>
                    </div>

                    <div className="bg-violet-400 mt-9 max-h-[400px] overflow-y-auto w-[60vw]">
                        <div className="flex bg-violet-900 border text-white p-2 w-[60vw] font-bold justify-between ">
                            <div>iTask...</div>
                            <nav>
                                <ul className='flex gap-4'>
                                    <li>Home</li>
                                    <li>CreateUser</li>
                                    <li>Showuser</li>
                                </ul>
                            </nav>
                        </div>

                        <table className="table-fixed w-[60vw]">
                            <thead className="bg-violet-800 text-white">
                                <tr className="text-center">
                                    <th className="w-[50px]">✓</th>
                                    <th className="w-1/3 text-left">Task</th>
                                    <th className="w-1/3 text-left">Name</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="py-2">
                                            <input
                                                type="checkbox"
                                                checked={item.isCompleted}
                                                onChange={() => toggleCheckbox(item.id)}
                                            />
                                        </td>
                                        <td className="text-left">
                                            <div className={`flex items-center gap-2 ${item.isCompleted ? 'line-through text-gray-500' : ''}`}>
                                                {item.task}
                                                <FaCopy className='cursor-pointer text-white' onClick={() => copyText(item.task)} />
                                            </div>
                                        </td>
                                        <td className="text-left">
                                            <div className={`flex items-center gap-2 ${item.isCompleted ? 'line-through text-gray-500' : ''}`}>
                                                {item.user}
                                                <FaCopy className='cursor-pointer text-white' onClick={() => copyText(item.user)} />
                                            </div>
                                        </td>
                                        <td>
                                            <MdDelete className='cursor-pointer text-red-700' onClick={() => deleteBtn(item.id)} />
                                        </td>
                                        <td>
                                            <MdEdit className='cursor-pointer text-green-600' onClick={() => editT(item.id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App
