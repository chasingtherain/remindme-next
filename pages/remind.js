import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RemindPage() {
    const [applyBtnLoading, setApplyBtnLoading] = useState("")
    const [isLoading, setIsLoading] = useState("")
    return <>
    <Head>
        <title>Send a Reminder</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <form className="w-full flex flex-col justify-start items-center" onSubmit={""}>
        <div className='grid place-items-center'>
            <p className='text-sky-700 text-3xl my-12'>Set an Email Reminder</p>
        </div>
            
        <div className="my-1">
            <label htmlFor="remarks" className="text-lg font-weight-900 label">Email Content</label>
            <textarea 
                id="remarks" 
                className="py-2 px-4 placeholder-gray-400 border-slate-500 rounded-lg border-2" 
                placeholder="e.g. Pay phone bill this friday" 
                name="comment" 
                rows="4"
                style={{width: "320px"}}
                onChange={(e) => setRemarks(e.target.value)}
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">Send Email to</label>
            <input 
                id="" 
                type="email" 
                className="input input-bordered border-black input-primary w-full max-w-xs" 
                style={{ width:"350px" }} 
                // value={""}
                // onChange={(date) => handleStartDateSelection(date)} estimate
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">On this date</label>
            <ReactDatePicker
                dateFormat='dd MMM yyyy'
                className='border-[1px] border-secondary w-80 h-12 rounded-md' 
                selected={""} 
                // minDate={moment().year(currentDate.getFullYear() - 1).dayOfYear(1)._d}
                // onChange={(date) => handleStartDateSelection(date)} 
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">At this time</label>
            <input 
                id="" 
                type="email" 
                className="input input-bordered border-black input-primary w-full max-w-xs" 
                style={{ width:"350px" }} 
                // value={""}
                // onChange={(date) => handleStartDateSelection(date)} estimate
            />
        </div>
        <div className="my-1">
            <label htmlFor="" className="text-lg font-weight-900 -ml-1 label">Timezone</label>
            <input 
                id="" 
                type="email" 
                className="input input-bordered border-black input-primary w-full max-w-xs" 
                style={{ width:"350px" }} 
                // value={""}
                // onChange={(date) => handleStartDateSelection(date)} estimate
            />
        </div>
        <button type="submit" disabled className={`btn text-white mt-4 px-28 text-center text-base font-semibold shadow-md rounded-lg mt-4 ${applyBtnLoading}`}>
            coming soon
        </button>
    </form>
    </>
}