import React ,{useState,} from 'react';
import { db } from "../firebase-config";
import {
  collection,

  addDoc,

 
  doc,
} from "firebase/firestore";
import './BookTable.css';
const BookTable = () => {
  
  const [newName, setNewName] = useState("");
  const [newPh_number, setNewPh_number] = useState(0);
  const[newEmail , setNewEmail] = useState("");
  const[newTiming , setNewTiming] = useState("");
  const[newPeople,setNewPeople] = useState(0);

  
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, ph_number: Number(newPh_number) , email: newEmail , time: newTiming,
    people: Number(newPeople)});
  };





 



    return (
        <div className="app__bookTable" id="booktable">
      <h2>Enter Details to book the table</h2> 
      <br />
      <form autoComplete="off" className="form-group"
     >
        
        <input type="text" placeholder="Enter your name" required className="form-control form-control-lg w-50 mx-5"
        onChange={(e)=>setNewName(e.target.value)}  />
        <br /> <br />
        <input type="text" placeholder="Enter Phonenumber" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setNewPh_number(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder="Enter E-mail" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setNewEmail(e.target.value)}/>
        <br /> <br />
        <input type="text" placeholder="Enter timing" required className="form-control  form-control-lg w-50 mx-5"
           onChange={(e)=>setNewTiming(e.target.value)}/>
        <br /><br />
        <input type="text" placeholder="Enter number of people" required className="form-control  form-control-lg w-50 mx-5" 
           onChange={(e)=>setNewPeople(e.target.value)} />
        <br /> <br />
        <div>
          <button type='submit' onClick={createUser} className='btn btn-primary mx-5'>Submit</button>
          

        </div>
        
        <br /><br />
      </form>
        </div>
    );
};

export default BookTable;