"use client";

import { useState } from 'react';
import styles from'./InteractiveWelcome.module.css'
import { useSearchParams } from 'next/navigation';

const InteractiveWelcome = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword')

  const inititalMessage = keyword ? `Chao mung ${keyword} den voi Letdiv` : "Chao mung ban den voi Letdiv"

  console.log("keyword", keyword)

  const [message, setMessage] = useState(inititalMessage)

  const toggleMessage = () => {
      setMessage(prev => 
        prev === inititalMessage
          ? "Ban da tuong tac voi client COmponent"
          : inititalMessage
      )
  }

  return (
    <div className={styles.container}>
        <h2>Vi du ve client component don gian</h2>
        <p>{message}</p>
        <button onClick={toggleMessage} className={styles.button}>
              Thay doi noi dung
        </button>
    </div>
  )
}

export default InteractiveWelcome;