import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();//FETCHING THE ID

  const allPastes = useSelector((state) => state.paste.pastes);//FETCHING THE ALLREADY EXISTS PASTES

  const paste = allPastes.find((p) => p._id === id);
  console.log("Final Paste: ", paste);

  return (
    <div>
    <div className="flex flex-row gap-7 place-content-between">
      <input
        className="p-1 rounded-2xl mt-2 w-[66%] pl-4 bg-[#1e1e1e] text-white placeholder-gray-400"
        type="text"
        placeholder="enter title here"
        disabled
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
      />

    </div>
    <div className="mt-8">
      <textarea
        className="rounded-2xl mt-4 min-w-[500px] p-4 bg-[#1e1e1e] text-white placeholder-gray-400"
        value={paste.content}
        placeholder="enter content here"
        disabled
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  </div>
  )
}

export default ViewPaste
