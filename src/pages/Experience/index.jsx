import { useState ,useContext} from 'react'
import { Route, Routes,useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar'
import { DataContext } from '../../context/DataContext'
import CurrentPosition from '../../components/CurrentPosition'
function Experience() {

    const navigation = useNavigate()
    const { data, updateData } = useContext(DataContext);
    
    const [formData, setFormData] = useState(data['experience'] == null ? [{company:'',role:'',location:'',date:'',points:['']}] : data['experience'] );


    const addInput = () => {
       const data = {company:'',role:'',location:'',date:'',points:['']}
      setFormData([...formData, data]);
    };

    const nextPage =()=>{
    // console.log("sjsj")
      updateData('experience',formData)
      navigation('/app/projects')
    }
    

  return (
    <>
    <Navbar/>
    <CurrentPosition value={"experience"}/>
    <h1 className=' text-5xl text-center text-white'>Experience</h1>
     <div className='flex justify-end mx-[20%]'>
            <button type="button" onClick={addInput} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Field</button>
    </div>

    <div className='flex justify-between mx-[20%]'>
        <button type="button" onClick={()=>{navigation(-1)}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
        <button type="button" onClick={()=>{nextPage()}}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
    </div>
    
    
    
    <div className='dark:bg-gray-900 py-[4%]'>
        {formData.map((value, index) => (
            <div  key={index}>
            <ExperienceInput value={value} index={index} formData={formData} setFormData={setFormData} />
            <hr className="border border-gray-300 my-4 mx-[20%]"/>
            </div>
        ))}

   
    </div>

    </>
  )
}


const ExperienceInput = ({value,formData,setFormData,index}) =>{

   const handleFormChange = (index, event) => {
   let data = [...formData];
   data[index][event.target.name] = event.target.value;
   setFormData(data);
}

const handlePointChange =(event,pointIndex)=>{
  let data =  [...formData]
  data[index]['points'][pointIndex] = event.target.value
  setFormData(data)
}

const addPoint = () =>{
  let data = [...formData]
  data[index]['points'] = [...data[index]['points'],'']
  setFormData(data)
}

 const removeItem = (index) =>{
    let data = [...formData];
    data.splice(index, 1)
    setFormData(data)
  }

const removePoint = (pointIndex) =>{
let data = [...formData]
data[index]['points'].splice(pointIndex,1)
setFormData(data)

}

  return(
     <div className='xl:mx-[20%] md:mx-[10%] sm:mx-[4%] '>
        <div className='flex justify-end'>
            <button type="button" onClick={()=>{removeItem(index)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">delete</button>
        </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                    <input type="text" name="company" placeholder='company' value={value.company} onChange={(e) => {handleFormChange(index,e)}}  id="college_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">role</label>
                    <input type="text" name="role" placeholder='role' value={value.role} onChange={(e) => {handleFormChange(index,e)}}  id="last_name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">location</label>
                    <input type="text"  value={value.location} onChange={(e) => {handleFormChange(index,e)}} id="location" name="location" placeholder='bangalore,india'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                </div> 
                
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">date</label>
                    <input type="text" name="date"value={value.date} onChange={(e) => {handleFormChange(index,e)}}   id="year"  placeholder='2019 - 2023' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                </div>
                {
                    value.points.map((value,pointIndex)=>(
                        <div className='flex flex-row space-x-5 w-full'  key={pointIndex}>
                          <div className='w-[90%]'>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">point</label>
                             <input type="text" placeholder='point' value={value} onChange={(e)=>{handlePointChange(e,pointIndex)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                          </div> 
                          <button type="button" onClick={()=>{removePoint(pointIndex)}} className="focus:outline-none text-white mt-7 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 h-10   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">del</button>
                        </div>
                    ))
                }
                 <div className='flex justify-end'>
                    <button type="button"  onClick={addPoint} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Field</button>
                </div>
            </div>
        </div>
  )

}


export default Experience
