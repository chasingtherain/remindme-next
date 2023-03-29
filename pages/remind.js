import Head from "next/head";
import Link from "next/link";

export default function RemindPage() {
    return <>
        <Head>
            <title>Send a Reminder</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Reminder Form</h1>
        <h2>
        <Link href="/">Back to home</Link>
        </h2>
    </>
  }