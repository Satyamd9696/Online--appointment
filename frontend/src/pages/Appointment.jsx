import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useParams } from 'react-router-dom'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)
  const daysOfWeek = ['sun' ,'Mon', 'Tues','wed', 'thurs', 'fri','sat']

  const[docInfo, setDocInfo] = useState(null)
  const [docSlots,setDocSlots] =useState([])
  const [slotIndex,setSlotIndex] =useState(0)
  const [slotTime,setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
      
  }

  const getAvailableSlots = async () =>{
    setDocSlots([])
      //getting current date
      let today = new Date()

      for(let i =0; i<7;i++){
        //getting date with index.

        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+i)

        // setting end time of the date with index;

        let endTime = new Date()
        endTime.setDate(today.getDate()+i)
        endTime.setHours(21,0,0,0)

        //setting hours.

        if(today.getDate()=== currentDate.gateDate()){
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1:10)
          currentDate.setMinutes(currentDate.getMinutes()>30? 30 :0)
        }
        else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }

        let timeSlots = []


        while(currentDate < endTime){
          let formattedTime = currentDate.toLocaleTimeString([], { hour:'2-digit' , minute: '2-digit'})

          // add slot to array

          timeSlots.push({
            datetime: new Date( currentDate),
            time: formattedTime
          })

          // Increament current time by 30 minutes;

          currentDate.setMinutes(currentDate.getMinutes() +30)
        }
        setDocSlots(prev => ([...prev, timeSlots]))
      }
    


  }

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])




  useEffect(()=>{
    fetchDocInfo()
   
    
  },[doctors,docId])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div>
      {/* .......Doctor Details..... */}
      <div className='flex flex-col sm:flex-row gap-4'> 
        <div>
          <img className='bg-primary w -full sm:max-w-75 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-8 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* .......doc info :name degree experiece...... */}
          <p className='flex items-center gap-3 text-2xl font-medium text-gray-900'>{docInfo.name}
             <img className='w-5' src={assets.verified_icon} alt="" />
             </p>
             <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.name} - {docInfo.speciality}</p>
              <button className='py--0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
             </div>

              {/* .......doctors about..... */}
              <div>
                <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                <p className='text-sm text-gray-500 macx-w-[700px] mt-1'>{docInfo.about}</p>
              </div>
              <p  className='text-gray-500 font-medium mt-4'>
                Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
              </p>

        </div>
      </div>

     {/* ....... Booking slots........ */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div key={index}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.gateDate()]}</p>
                <p>{item[0] && item[0].datetime.gateDate()}</p>

              </div>

            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Appointment