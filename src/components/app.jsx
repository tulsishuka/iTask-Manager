 <table className="table-auto w-[60vw] rounded-md overflow-hidden mb-10 mt-9 ">
                            <thead className='bg-violet-800 text-white table-fixed w-full '>
                                <tr className='text-center '>
                                    {/* {/* p-1  justify-around items-center */}
                                    <th className='text-center'><FaCheck /></th>
                                    <th className='text-left w-1/3'>Task</th>
                                    <th className='text-left w-1/3'>Name</th>
                                    <th className='text-left  w-1/3'>Delete</th>
                                    <th className='text-left  w-1/3'>Edit</th>
                                </tr>
                            </thead>
                            <tbody className='bg-violet-300 '>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className='flex  justify-around items-center justify-center'>

                                        <td className='py-2 px-4 text-center'>
                                            {/* flex items-center text-center gap-9 */}
                                             <input
                                                type="checkbox"
                                                checked={item.completed}
                                                onChange={() => toggleCheckbox(item.id)}
                                            />

                                        </td>
                                        <td className='py-2 px-4 break-words max-w-[200px]  '>
                                            {/* // */}
                                            <span onClick={() => { copyText(item.user) }} className={item.isCompleted ? "line-through text-gray-500" : ""}>{item.task}</span>
                                        </td>
                                        <td className=' py-2 px-4 break-words max-w-[200px]'>
                                            <span onClick={() => { copyText(item.user) }} className={item.isCompleted ? "line-through text-gray-500" : ""}>  {item.user}</span>

                                        </td>
                                        <td className='py-2 px-4  ' >

                                            <MdDelete onClick={() => { deleteBtn(item.id) }} className="cursor-pointer text-violet-600 hover:text-violet-800 " />
                                        </td>
                                        <td >
                                            <span >
                                                <MdEdit onClick={() => { editT(item.id) }} className="cursor-pointer text-violet-600 hover:text-violet-800 " />
                                            </span>
                                        </td>

                                    </tr>
                                })}
                            </tbody>
                        </table>