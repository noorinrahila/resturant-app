import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import './BookTable.css';
const BookTable = () => {
  // form states
  const[name,setName] = useState('');
  const[phnumber , setPhnumber] = useState('');
  const [email,setEmail] = useState('');
  const[time,setTime]=useState('');
  const[people,setPeople]=useState('');
   // retrived data state
   const [data, setData]=useState([]);
  // submit event
  const handleSubmit =(e)=>{
    e.preventDefault();
   const data ={
 name,
   phnumber,
    email,
  time,
   people
   }
   axios.post('https://sheet.best/api/sheets/f8aa4db3-227e-4281-a6f2-02861aa2d4fb',data).then((response)=>{
    //console.log(response);
    //clering form fileds
    setName('');
    setPhnumber('');
    setEmail('');
    setTime('');
    setPeople('');

   })
  }
  //getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/f8aa4db3-227e-4281-a6f2-02861aa2d4fb').then((response)=>{
setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])
    return (
        <div className="app__bookTable" id="booktable">
      <h2>Enter Details to book the table</h2> 
      <br />
      <form autoComplete="off" className="form-group"
      onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Enter your name" required className="form-control form-control-lg w-50 mx-5"
        onChange={(e)=>setName(e.target.value)} value={name} />
        <br /> <br />
        <input type="text" placeholder="Enter Phonenumber" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setPhnumber(e.target.value)} value={phnumber} />
        <br /> <br />
        <input type="text" placeholder="Enter E-mail" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setEmail(e.target.value)} value={email} />
        <br /> <br />
        <input type="text" placeholder="Enter timing" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setTime(e.target.value)} value={time} />
        <br /><br />
        <input type="text" placeholder="Enter number of people" required className="form-control  form-control-lg w-50 mx-5" 
           onChange={(e)=>setPeople(e.target.value)} value={people}/>
        <br /> <br />
        <div>
          <button type='submit' className='btn btn-primary mx-5'>Submit</button>
        </div>
        <br /><br />
      </form>
        </div>
    );
};

export default BookTable;