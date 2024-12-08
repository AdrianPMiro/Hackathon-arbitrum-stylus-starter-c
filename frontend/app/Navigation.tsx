"use client"

import Image from "next/image"

import asset_logo from "@/assets/logo.png"
import ConnectButton from "./ConnectButton"

export default function Navigation() {
  return (
    <nav className="max-w-screen-2xl mx-auto mt-4 flex w-full justify-between gap-4 items-center h-16">
      <nav className="flex gap-1 items-center">
        <figure className="max-w-[3rem]">
          <Image className="w-full" src={asset_logo} alt="" />
        </figure>
        <strong className="text-lg">Microdonative</strong>
      </nav>
      <nav className="flex items-center gap-4">
      <ul className="flex gap-4 me">
        <li className="text-lg">About us</li>
        <li className="text-lg">Contact</li>
      </ul>
      <ConnectButton />
      </nav>
    </nav>
  )
}
