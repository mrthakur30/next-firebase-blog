"use client";
import Loader from "@/components/Loader"
import {toast } from "react-hot-toast"

export default function Home() {
  return (
    <div>
      Home
      <button onClick={()=>toast.success("Cupid !")}>Cupid</button>
      <Loader />
    </div>
  )
}
