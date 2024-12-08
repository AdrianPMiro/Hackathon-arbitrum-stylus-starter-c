"use client";
import { useRkAccountModal } from "@/lib/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { useState } from "react";
import Navigation from "./Navigation";
import Modal from "@/components/modal/modal";
import Carousel from "@/components/carousel/carousel";
import DynamicSwiper from "@/components/dinamic_swiper";
import { parseAbi } from "viem";

const ADDRESS = "0x2ffc7cf0abcf110e1a715dff0bc821fe8aa3ac9d";

const ABI = parseAbi(["function hello_world() public view returns (string)"]);

export default function Container() {
  const result = useReadContract({
    address: ADDRESS,
    functionName: "hello_world",
    abi: ABI,
  });
  const { openAccountModal } = useRkAccountModal();
  const { isConnected } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navigation />
      <section className="max-w-7xl h-screen mt-12 mx-auto flex ">
        <Carousel />
      </section>
    </>
  );
}
