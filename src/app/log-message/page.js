"use client";

import { useState } from "react";
import styles from "./log-message.module.css";
import { logClientMessage } from "./action";

const LogMessagePage = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    setIsLoading(true);
    setResponse(null);

    try {
      const result = await logClientMessage(message);
      if (result.success) {
        setResponse({
          type: "success",
          message: result.responseMessage,
        });
      } else {
        setResponse({
          type: "error",
          message: `error: ${error.responseMessage}`,
        });
      }
    } catch (error) {
      setResponse({
        type: "error",
        message: `co loi xay ra khi goi action server: ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vi du viec goi server action tu onClick</h1>
      <p className={styles.description}>
        Nhan cac nut duoi day de goi server action voi cac tin nhan khac nhau.
        Kiem tra console log cua server de thay tin nhan duoc ghi lai
      </p>
      <div className={styles.buttonGroup}>
        <button
          className={styles.buttonPrimary}
          onClick={() => handleSendMessage("Tin nhan tu button 1")}
        >
          {isLoading ? "Dang gui" : "Gui tin nhan 1"}
        </button>

        <button
          className={styles.buttonSecondary}
          onClick={() => handleSendMessage("Tin nhan tu button 2")}
        >
          {isLoading ? "Dang gui" : "Gui tin nhan 2"}
        </button>
      </div>

      {response && (
        <div
          className={`${styles.responseContainer} ${response.type === "success" ? styles.responseSuccess : styles.responseError}`}
        >
          <strong className={styles.responseMessage}>{response.message}</strong>
        </div>
      )}
    </div>
  );
};

export default LogMessagePage;
