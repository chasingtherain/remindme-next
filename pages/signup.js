import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { authenticateWithDb } from "../lib/auth";

export default function SignUpPage() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState("")
    const [loginBtnLoading, setLoginBtnLoading] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault()
        // if(userEmail)
        console.log("sign up triggered")
        const userInfo = {
            userEmail:userEmail,
            userPassword:userPassword,
        }
        console.log(userInfo)
        
        // post content to /api/reminder
        authenticateWithDb('/api/signup', userInfo)
    }

    return <>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-58 card rounded-box place-items-center my-1">
                <h1 className="text-3xl my-12">Create an account</h1>
                <div className="form-control w-full max-w-xs">
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="input input-bordered w-full max-w-xs" 
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input input-bordered w-full max-w-xs my-3"
                        value={userPassword} 
                        onChange={(event) => setUserPassword(event.target.value)}
                    />
                </div>
                {/* <button className={`btn btn-wide btn-primary my-2 ${loginBtnLoading}`} disabled>coming soon</button> */}
                <button 
                    className={`btn btn-wide btn-primary my-2 ${loginBtnLoading}`}
                    onClick={handleSignUp}
                >
                    Sign up
                </button>
                {error && 
                    <>
                        <p className='text-red-600'>Invalid email or password.</p>
                        <p className='text-red-600'>Sign up below if you haven done so.</p>
                    </>
                }
            </div>
            <div className="grid h-18 card rounded-box place-items-center">
            <Link href="/login" className="mt-2 hover:underline decoration-2 decoration-sky-500">Login instead</Link>
            </div>
        </div>
    </>
  }