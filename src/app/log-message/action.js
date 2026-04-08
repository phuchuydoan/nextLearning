"use server";

export async function logClientMessage(message) {
  console.log(`[Server action] recevied message: "${message}" at ${new Date().toISOString()}`)

  return {
    success: false,
    responseMessage: `Server da nhan tin nhan: ${message}`
  }
}