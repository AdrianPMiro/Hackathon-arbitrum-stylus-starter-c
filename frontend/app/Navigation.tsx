import Image from "next/image"
import ConnectButton from "./ConnectButton"

export default function Navigation() {
  return (
    <nav className="max-w-screen-2xl mx-auto mt-4 flex w-full justify-between gap-4 items-center h-16">
      <nav className="flex gap-1 items-center">
        <strong className="text-lg">Transparent Transference</strong>
      </nav>
      <nav className="flex items-center gap-4">
      <ul className="flex gap-4 mx-2">
        <li className="text-lg"><a href="/about-us" className="border border-gray-800 rounded-lg bg-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 transition">About Us</a></li>
        <li className="text-lg"><a href="/" className="border border-gray-800 rounded-lg bg-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 transition">Donar Ahora</a></li>
      </ul>
      <ConnectButton />
      </nav>
    </nav>
  )
}
