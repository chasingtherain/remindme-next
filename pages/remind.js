import Head from "next/head";
import Link from "next/link";
import moment from 'moment';
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
// import { TimePicker } from 'react-ios-time-picker';

export default function RemindPage() {
    const [applyBtnLoading, setApplyBtnLoading] = useState("")
    const [isLoading, setIsLoading] = useState("")
    const [email, setEmail] = useState("")
    const [emailContent, setEmailContent] = useState("")
    const [selectedDate, setSelectedDate] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const date = new Date();
    let currentDate = date.getDate()
    const [value, setValue] = useState('10:00');

    const onChange = (timeValue) => {
       setValue(timeValue);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(emailContent.length < 5){
            return toast.warning("content must have at least 5 characters")
        }
        if(!selectedDate){
            return toast.warning("Please select a date!")
        }
        // save content in object
        const formContent = {
            emailContent: emailContent,
            recipientEmail: email,
            selectedDate: selectedDate
        }
        // post content to /api/reminder
        fetch('/api/reminder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formContent),
        })
            .then(res => {
                res.json()
                setEmailContent("")
                setEmail("")
                selectedDate(null)
            })
            .then(data => console.log(data))
            .catch(error => console.log(('Error fetching data:', error)))
        console.log("handleSubmit fx triggered")
    }
    return <>  
    <Head>
        <title>Send a Reminder</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <form className="w-full flex flex-col justify-start items-center" onSubmit={handleSubmitForm}>
        <div className='grid place-items-center'>
            <p className='text-sky-600 text-3xl mt-12 font-bold tracking-tighter'>Set an Email Reminder</p>
        </div>
            
        <div className="my-1">
            <label htmlFor="remarks" className="text-lg font-weight-900 label mt-8">Email Content</label>
            <textarea 
                id="remarks" 
                className="py-2 px-4 placeholder-gray-400 border-slate-500 rounded-lg border-2" 
                placeholder="e.g. Pay phone bill this friday" 
                name="comment" 
                rows="4"
                style={{width: "320px"}}
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">Send Email to</label>
            <input 
                id="" 
                type="email" 
                className="input input-bordered border-black input-primary w-full max-w-xs" 
                style={{ width:"350px" }} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">On this date</label>
            <ReactDatePicker
                dateFormat='dd MMM yyyy'
                className='border-[1px] border-secondary w-80 h-12 pl-2 rounded-md' 
                selected={selectedDate} 
                onChange={(date) => setSelectedDate(date)}
                minDate={startDate}
            />
        </div>
        {/* <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">At this time</label>
            <TimePicker onChange={onChange} value={value} />
        </div> */}
        {/* <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">Timezone</label>

        </div> */}
        <button type="submit" className={`btn text-white mt-4 px-28 text-center text-base font-semibold shadow-md rounded-lg mt-4 ${applyBtnLoading}`}>
            Set Reminder
        </button>
    </form>
    </>
}