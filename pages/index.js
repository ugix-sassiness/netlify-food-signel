import React from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { InlineWidget } from 'react-calendly';


const Scheduler = () => {
  return (
    <div className='Scheduler'>
      <InlineWidget url="https://calendly.com/food-signel/30min"/>
    </div>
  );
};


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Food Signel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Food Signel" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Scheduler/>
      </main>

      <Footer />
    </div>
  )
}
