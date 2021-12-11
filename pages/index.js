import Head from 'next/head'
import React, { useState } from 'react'
import Todos from './todo'
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <div>
      <Banner />

         <Todos/>
    </div>
  )
}
