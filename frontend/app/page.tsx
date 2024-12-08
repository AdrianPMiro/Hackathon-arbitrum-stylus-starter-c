"use client"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { useRkAccountModal } from "@/lib/rainbowkit"
import { useAccount, useReadContract } from "wagmi"
import Navigation from "./Navigation"
import CardDonative from "@/components/card_donative"
import { parseAbi } from "viem"

const ADDRESS = "0x2ffc7cf0abcf110e1a715dff0bc821fe8aa3ac9d"

const ABI = parseAbi([
  "function hello_world() public view returns (string)",
])

export default function Container() {
  const result = useReadContract({
    address: ADDRESS,
    functionName: "hello_world",
    abi: ABI
  })
  const { openAccountModal } = useRkAccountModal()
  const { isConnected } = useAccount()

  return (
    <>
      <Navigation />
      <section className="max-w-7xl max-h-full mt-12 mx-auto flex ">
          <CardDonative title={"Fondo verde"} meta={25000} progress={0} />
          <CardDonative title={"Fondo Alimento para niños"} meta={4000} progress={800} />
          <CardDonative title={"Ayuda a Valencia"} meta={250000} progress={100000} />
      </section>
    </>
  )
}
