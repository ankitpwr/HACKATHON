import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContex'

function doctor() {
  const navigate = useNavigate()
  const {speciality}=useParams()
  // console.log(speciality)
  const [filterDoc, setFilterDoc] = useState([])
  
  const {doctors} = useContext(AppContext)

  const applyFilter = () =>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div >
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'General physician'?navigate('/doctor'):navigate('/doctor/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "General physician"?"bg-green-100 text-black":""}`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist'?navigate('/doctor'):navigate('/doctor/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "Gynecologist"?"bg-green-100 text-black":""}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist'?navigate('/doctor'):navigate('/doctor/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "Dermatologist"?"bg-green-100 text-black":""}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians'?navigate('/doctor'):navigate('/doctor/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "Pediatricians"?"bg-green-100 text-black":""}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist'?navigate('/doctor'):navigate('/doctor/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "Neurologist"?"bg-green-100 text-black":""}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist'?navigate('/doctor'):navigate('/doctor/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounuded transition-all cursor-pointer ${speciality === "Gastroenterologist"?"bg-green-100 text-black":""}`}>Gastroenterologist</p>
        </div>
        <div className='grid grid-cols-4 sm:px-0 gap-4 gap-y-6 mt-2 mb-2'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-green-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] tansition-all duration-500' key={index}>
                  <img className='bg-green-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-blue-500'>
                      <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                  </div>
                  <p className='flex  justify-center  gap-2 text-md text-center '>{item.name}</p>
                  <p className='flex justify-center text-gray-500 gap-2 text-sm text-center pb-5'>{item.speciality}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default doctor