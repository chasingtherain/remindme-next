import Head from "next/head";
import Link from "next/link";

export default function SignUpPage() {
    return <>
        <Head>
            <title>Signup</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Sign Up</h1>
        <h2>
        <Link href="/">Back to home</Link>
        </h2>
    </>
  }