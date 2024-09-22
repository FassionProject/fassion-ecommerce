"use client";

import { getCatData } from "@/services/service";


export default function FormInput() {
  const getCatDatas = async () => {
    console.log('loading...');

    console.log(await getCatData());

    console.log('loaded!');
  }

  return (
    <>
      <button onClick={getCatDatas}>send</button>
    </>
  )
}