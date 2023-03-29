import Link from "next/link";
import Head from 'next/head';
import { useState } from "react";

export default function LoginPage() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [error, setError] = useState("")
    const [loginBtnLoading, setLoginBtnLoading] = useState("")

    return <>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-58 card rounded-box place-items-center my-1">
                <h1 className="text-3xl my-12">Welcome Back</h1>
                <div className="form-control w-full max-w-xs">
                    <input type="text" placeholder="Email address" className="input input-bordered w-full max-w-xs" onChange={(event) => setUserEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-3" onChange={(event) => setUserPassword(event.target.value)}/>
                </div>
                <button className={`btn btn-wide btn-primary my-2 ${loginBtnLoading}`}>LOGIN</button>
                {error && 
                    <>
                        <p className='text-red-600'>Invalid email or password.</p>
                        <p className='text-red-600'>Sign up below if you haven done so.</p>
                    </>
                }
                
            {/* <Link to="/forgot-password" className='text-secondary'>Forgot password?</Link> */}
            </div>
            <div className="divider"></div>
            <div className="grid h-18 card rounded-box place-items-center">
            <Link href="/signup" className="btn btn-wide btn" >Create an account</Link>
            <Link href="/" className="mt-2 hover:underline decoration-2 decoration-sky-500">Back to home</Link>
            </div>
        </div>
    </>
  }