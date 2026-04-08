"use client";

import { makeStore } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children
}) {
  //dùng useRef để đảm bảo redux store chỉ 
  //khởi tạo 1 lần khi componnent này rerender lần đầu tiền
  const storeRef = useRef(null);

  if(!storeRef.current) {
    storeRef.current = makeStore();
  }


  return <Provider store={storeRef.current}>{children}</Provider>
}