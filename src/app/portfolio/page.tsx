"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

// Maps local image paths to Hugging Face dataset URLs
// Handles folder name mismatches between code and HF dataset
const HF_BASE = "https://huggingface.co/datasets/Sai-ban111/sai-samartha-photography-assets/resolve/main";

const FOLDER_MAP: Record<string, string> = {
  "prewedding":  "preweding",
  "engagement":  "engegement photo",
  "baby-shoot":  "baby shoot",
  "baby-shower": "baby shower",
  "maternity":   "maternty shoot",
  "corporate":   "cooporate",
};

const resolveImageSrc = (src: string) => {
  if (src.startsWith("/images/home/")) return src;
  if (!src.startsWith("/images/")) return src;
  const rest = src.replace("/images/", "");
  const slashIdx = rest.indexOf("/");
  if (slashIdx === -1) return `${HF_BASE}/${rest}`;
  const folder = rest.substring(0, slashIdx);
  const file   = rest.substring(slashIdx + 1);
  const hfFolder = FOLDER_MAP[folder] ?? folder;
  return `${HF_BASE}/${encodeURIComponent(hfFolder)}/${encodeURIComponent(file)}`;
};

type Category = {
  key: string;
  label: string;
  images: { src: string; alt: string }[];
};

const categories: Category[] = [
  { key: "all", label: "All", images: [] },
  {
    key: "wedding", label: "Wedding",
    images: [
      { src: "/images/wedding/7C7A9856.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC00003.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00004.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00007.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00009.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00014.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00052.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00057.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00061.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00068.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00069.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00071.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00079.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00088.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00094.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00104.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00120.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00122.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00140.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00160.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00169.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC00172.jpg", alt: "Wedding" },
      { src: "/images/wedding/DSC01546.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01553.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01560.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01563.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01609.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01723.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01737.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC01780.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2149.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2653.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2668.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2676.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2703.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2708.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2710.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2725.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2736.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2757.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2965.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2969.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2977.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2979.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2985.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_2998.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_3006.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_3007.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4191.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4417.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4418.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4478.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4479.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_4863.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5119.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5123.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5135.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5197.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5250.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5254.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5307.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5308.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5310.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5313.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5315.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_5352.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6033.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6078.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6090.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6096.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6182.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6188.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6195.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6198.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6204.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6211.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6218.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6224.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6235.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6305.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6314.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6315.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6327.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6337.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6340.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6381.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6402.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6485.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6541.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6550.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6562.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6585.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_6999.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7001.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7025.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7028.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7030.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7035.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7240.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7289.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7337.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7377.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7483.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7502.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7577.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7625.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7632.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7725.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7730.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7780.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_7792.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_8175.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9719.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9722.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9731.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9734.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9740.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9743.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9745.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9748.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9751.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9754.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9756.JPG", alt: "Wedding" },
      { src: "/images/wedding/DSC_9761.JPG", alt: "Wedding" },
      { src: "/images/wedding/IMG_9275.JPG", alt: "Wedding" },
      { src: "/images/wedding/_B2A1307.JPG", alt: "Wedding" },
      { src: "/images/wedding/_B2A1319.JPG", alt: "Wedding" },
      { src: "/images/wedding/_B2A1385.JPG", alt: "Wedding" },
      { src: "/images/wedding/_B2A1415.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2176.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2188.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2194.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2232.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2242.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2266.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2275.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2283.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2287.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2316.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2335.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2354.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2360.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2362.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2367.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2388.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2421.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2427.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2462.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2475.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2482.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2501.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2614.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2633.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2659.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2669.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2680.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2683.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2687.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2693.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2720.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2733.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2734.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2781.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC2881.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7006.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7050.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7052.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7073.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7092.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7094.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7126.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7129.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7130.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7148.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7153.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7171.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7181.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7216.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7221.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7227.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7237.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7257.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7285.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7365.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7366.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7391.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7395.JPG", alt: "Wedding" },
      { src: "/images/wedding/_DSC7406.JPG", alt: "Wedding" },
    ],
  },
  {
    key: "prewedding", label: "Pre-Wedding",
    images: [
      { src: "/images/prewedding/1.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/2.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/3.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/4.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/5.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/6.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/7.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/8.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/9.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/10.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/11.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/12.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/13.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/14.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/15.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/16.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/17.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/18.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/19.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/20.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/21.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/22.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/23.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/24.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/25.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/26.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/27.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/28.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/29.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/30.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/31.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/32.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/33.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/34.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/35.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/36.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/37.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/38.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/39.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/40.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A7984.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A7985.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A7986.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A7991.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A7993.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8001.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8003.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8004.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8006.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8020.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8023.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8046 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8046.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8079.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8106.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8134.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8136 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8136.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8142.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8147.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8154.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8180.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8222.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8229.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8231.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8232.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8233.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8249.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8326.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8329 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8479.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8490.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8491.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8493.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8503.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8510.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8530.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8546.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8564.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8599.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8600 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8606.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/288A8613 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_7984 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_7986 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_7991 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8009 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8009-Recovered.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8015.JPG", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8122 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8128 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8129 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8129.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8131 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8140 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8148 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8158 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8162 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8162.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8165 copy.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8166.jpg", alt: "Pre-Wedding" },
      { src: "/images/prewedding/DSC_8169 copy.jpg", alt: "Pre-Wedding" },
    ],
  },
  {
    key: "engagement", label: "Engagement",
    images: [
      { src: "/images/engagement/7C7A0022.JPG", alt: "Engagement" },
      { src: "/images/engagement/7C7A0055.JPG", alt: "Engagement" },
      { src: "/images/engagement/7C7A0139.JPG", alt: "Engagement" },
      { src: "/images/engagement/7C7A0148.JPG", alt: "Engagement" },
      { src: "/images/engagement/7C7A9899.JPG", alt: "Engagement" },
      { src: "/images/engagement/7C7A9916.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9918.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9927.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9933.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9940.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9957.jpg", alt: "Engagement" },
      { src: "/images/engagement/7C7A9985.jpg", alt: "Engagement" },
      { src: "/images/engagement/DSC_1174.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_1269.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_1272.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_1350.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_1371.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_1382.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2021.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2027.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2053.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2054.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2072.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2077.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_2128.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3115.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3121.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3124.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3134.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3147.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3153.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3178.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3231.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3245.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3280.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3284.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3296.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3301.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3304.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3311.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3340.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3344.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3349.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3352.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3356.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3374.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3387.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3406.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3411.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3442.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3448.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3449.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3452.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3467.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3481.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3493.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3528.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3530.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3541.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3544.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3562.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3571.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3575.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3587.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3597.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3604.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3615.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3618.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3909.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3928.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_3966.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4051.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4054.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4078.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4094.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4096.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_4909.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5091.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5113.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5118.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5121.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5126.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5129.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5148.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5151.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5473.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5480.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5484.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5490.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5542.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5544.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5549.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5551.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5556.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5561.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5573.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5576.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5579.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5584.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5633.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5650.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5654.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5659.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5661.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5679.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5680.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5685.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5687.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5690.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5691.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5696.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5711.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5747.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5768.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5774.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5786.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5799.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5800.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5802.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5811.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5816.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5846.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5934.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5938.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5940.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_5948.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8101.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8103.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8199.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8209.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8212.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8216.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8222.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8238.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8241.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8275.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8321.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8335.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8349.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8356.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8367.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8386.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8396.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8399.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8405.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8413.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8415.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8453.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8460.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8643.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8644.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8837.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8840.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8846.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8871.JPG", alt: "Engagement" },
      { src: "/images/engagement/DSC_8875.JPG", alt: "Engagement" },
      { src: "/images/engagement/_B2A1156.JPG", alt: "Engagement" },
      { src: "/images/engagement/_B2A1177.JPG", alt: "Engagement" },
      { src: "/images/engagement/_B2A1474.JPG", alt: "Engagement" },
    ],
  },
  {
    key: "maternity", label: "Maternity Shoot",
    images: [
      { src: "/images/maternity/1-1.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3331 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3335.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3358.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3366.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3371 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3378.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3381.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3388.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3404.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3406.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3415 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3419 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3422.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3444.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3457 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3468.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3474.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3501.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3511.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3514.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3518.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3524.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3530.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3537.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3542.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3552.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3564.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3575.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3603.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3642.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3660.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3665.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3718.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3741.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3746 copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3758.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3787.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3795.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3803.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_3814-Recovered.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7920.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7922.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7933.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7937.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7938.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7942.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7950.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7956.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7959.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7970.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7979.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7986.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_7991.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8001.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8015.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8032.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8033.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8042.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8052.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8059-Recovered copy.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8064.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8071.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8073.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8080.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8084.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8088.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8089.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8098.jpg", alt: "Maternity" },
      { src: "/images/maternity/DSC_8107.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20240503-WA0028.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20240503-WA0031.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20240503-WA0035.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20240517-WA0000.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20240517-WA0005.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0011.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0012.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0014.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0016.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0017.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0018.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0020.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0021.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0022.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0023.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0024.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0028.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0029.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0030.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0031.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0032.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0033.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0034.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0036.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0037.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0038.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0039.jpg", alt: "Maternity" },
      { src: "/images/maternity/IMG-20250531-WA0040.jpg", alt: "Maternity" },
      { src: "/images/maternity/PPF08093.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08120.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08132.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08139.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08141.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08153.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08167.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08179.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08180.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08224.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08238.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08247.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08256.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08275.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08288.JPG", alt: "Maternity" },
      { src: "/images/maternity/PPF08291.JPG", alt: "Maternity" },
    ],
  },
  {
    key: "baby-shoot", label: "Baby Shoot",
    images: [
      { src: "/images/baby-shoot/1.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_0070.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_0078.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_0124.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_0137.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_0139.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2026.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2067.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2091.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2123.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2234.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2276.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_2367.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_3883.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_3895.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_3909.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_3920.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_3932.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_4024.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_4382.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_4471.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6538.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6551.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6599.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6619.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6630.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6633.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6717.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6729.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6851.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6865.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_6910.JPG", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9476.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9521.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9591.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9625.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9630-1.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9720.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9748.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9827.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9849.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/DSC_9955.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240217-WA0048.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240217-WA0049.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240217-WA0050.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240217-WA0051.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240217-WA0055.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0062.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0063.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0064.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0065.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0066.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0068.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0069.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0070.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0071.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20240812-WA0072.jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0004 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0005 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0006 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0007 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0008 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0009 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0010 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0013 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0014 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0015 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0016 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0017 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0018 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0019 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0021 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0023 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0024 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0025 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0026 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0027 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0028 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0029 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0030 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0032 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0033 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0034 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0036 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0037 (1).jpg", alt: "Baby Shoot" },
      { src: "/images/baby-shoot/IMG-20251217-WA0038 (1).jpg", alt: "Baby Shoot" },
    ],
  },
  {
    key: "baby-shower", label: "Baby Shower",
    images: [
      { src: "/images/baby-shower/DSC_2945.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2951.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2955.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2960.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2968.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2975.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2994.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_2999.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3010.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3035.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3057.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3071.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3076.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3134.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3144.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3147.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3149.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3164.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3248.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3261.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3269.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3469.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3472.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3487.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3494.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3498.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3500.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3509.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3512.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3522.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3531.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3547.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3549.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3552.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3766.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3773.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3913.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3919.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_3922.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4903.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4921.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4940.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4942.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4964.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4975.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_4980.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8781.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8790.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8802.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8806.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8816.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8828.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8835.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/DSC_8854.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC8987.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC8993.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9002.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9040.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9047.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9055.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9059.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9100.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9154.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9200.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9208.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9263.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9291.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9424.JPG", alt: "Baby Shower" },
      { src: "/images/baby-shower/_DSC9429.JPG", alt: "Baby Shower" },
    ],
  },
  {
    key: "birthday", label: "Birthday",
    images: [
      { src: "/images/birthday/DSC_7144.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7148.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7158.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7189.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7190.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7207.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7634.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7637.JPG", alt: "Birthday" },
      { src: "/images/birthday/DSC_7743.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0115.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0122.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0137.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0144.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0191.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC0258.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8314.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8335.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8737.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8784.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8822.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8828.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8862.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8924.JPG", alt: "Birthday" },
      { src: "/images/birthday/_DSC8925.JPG", alt: "Birthday" },
    ],
  },
  {
    key: "school", label: "School Events",
    images: [
      { src: "/images/school/DSC_0747.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0906.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0926.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0936.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0937.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0949.JPG", alt: "School Event" },
      { src: "/images/school/DSC_0957.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1134.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1135.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1144.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1233.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1471.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1693.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1696.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1733.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1734.JPG", alt: "School Event" },
      { src: "/images/school/DSC_1735.JPG", alt: "School Event" },
      { src: "/images/school/DSC_3595.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5710.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5725.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5729.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5732.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5736.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5758.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5761.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5763.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5764.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5771.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5878.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5954.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5955.JPG", alt: "School Event" },
      { src: "/images/school/DSC_5979.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6013.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6136.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6137.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6194.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6330.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6333.JPG", alt: "School Event" },
      { src: "/images/school/DSC_6334.JPG", alt: "School Event" },
      { src: "/images/school/IMG_1207.JPG", alt: "School Event" },
      { src: "/images/school/IMG_1256.JPG", alt: "School Event" },
    ],
  },
  {
    key: "corporate", label: "Corporate / Political",
    images: [
      { src: "/images/corporate/DSC_3086.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3296.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3299.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3556.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3613.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3703.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3749.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3781.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3822.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3831.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3832.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3834.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_3843.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5302.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5303.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5316.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5327.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5337.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5343.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5345.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5347.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_5380.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6419.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6420.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6422.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6423.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6430.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6443.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6457.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6474.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6476.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6483.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6492.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6529.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6530.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6560.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6561.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6562.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6575.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6597.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6598.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6602.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6651.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6841.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6842.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6850.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6856.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6872.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6905.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6906.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6911.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6950.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_6996.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7064.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7109.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7113.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7151.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7180.JPG", alt: "Corporate" },
      { src: "/images/corporate/DSC_7190.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9576.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9578.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9653.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9656.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9680.JPG", alt: "Corporate" },
      { src: "/images/corporate/_DSC9689.JPG", alt: "Corporate" },
    ],
  },
];

// Build "all" from rest — pick first 4 from each category that has images
categories[0].images = categories.slice(1).flatMap((c) =>
  c.images.slice(0, 3)
);

export default function PortfolioPage() {
  const [activeKey, setActiveKey] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeCat = categories.find((c) => c.key === activeKey)!;
  const images = activeCat.images;

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [activeKey]);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? Math.min(images.length - 1, i + 1) : null));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <>
      <Navbar />
      <main style={{ background: "#0a0a0a", minHeight: "100vh", paddingTop: "100px" }}>
        {/* Page header */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "60px 32px 48px",
            textAlign: "center",
          }}
        >
          <p className="section-tag" style={{ marginBottom: "16px" }}>Our Gallery</p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#FAFAFA",
              marginBottom: "16px",
            }}
          >
            Portfolio
          </h1>
          <div className="gold-line" style={{ margin: "0 auto 20px" }} />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#737373",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Browse our work by category. Every frame tells a story.
          </p>
        </div>

        {/* Category Filter */}
        <div
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 100,
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "0 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              padding: "16px 0",
              scrollbarWidth: "none",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveKey(cat.key)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: activeKey === cat.key ? "#0a0a0a" : "#737373",
                  background: activeKey === cat.key ? "#D4AF37" : "transparent",
                  border: activeKey === cat.key ? "1px solid #D4AF37" : "1px solid rgba(255,255,255,0.12)",
                  padding: "8px 20px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px" }}
        >
          {images.length > 0 ? (
            <div ref={gridRef} className="masonry-grid">
              {images.map((img, i) => (
                <div
                  key={`${activeKey}-${i}`}
                  className="masonry-item img-zoom"
                  onClick={() => openLightbox(i)}
                  style={{
                    cursor: "pointer",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`,
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}>
                    <Image
                      src={resolveImageSrc(img.src)}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={75}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(212,175,55,0.04)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                      }}
                      className="img-overlay"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "#525252",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📷</div>
              <p style={{ fontSize: "1rem" }}>Photos coming soon for this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            style={{
              position: "absolute",
              top: "24px",
              right: "32px",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FAFAFA",
              cursor: "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            disabled={lightboxIndex === 0}
            style={{
              position: "absolute",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: lightboxIndex === 0 ? "#333" : "#FAFAFA",
              cursor: lightboxIndex === 0 ? "default" : "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Previous image"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            style={{ position: "relative", width: "85vw", height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={resolveImageSrc(images[lightboxIndex].src)}
              alt={images[lightboxIndex].alt}
              fill
              style={{ objectFit: "contain" }}
              quality={90}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            disabled={lightboxIndex === images.length - 1}
            style={{
              position: "absolute",
              right: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: lightboxIndex === images.length - 1 ? "#333" : "#FAFAFA",
              cursor: lightboxIndex === images.length - 1 ? "default" : "pointer",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
            aria-label="Next image"
          >
            <ArrowRight size={20} />
          </button>

          <p
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "#737373",
            }}
          >
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
      <style>{`
        .masonry-item:hover .img-overlay { opacity: 1 !important; }
      `}</style>
    </>
  );
}
