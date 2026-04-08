"use server";

export async function addTodo(prevState, formData) {
  const todo = formData.get("todo")

  if(!todo || todo.trim() === "") {
    return {
      success: false,
      message: "Ten cong viec khong duoc de trong"
    }
  }

  console.log('cong viec duoc them:', todo)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true, 
    message: `Cong viec "${todo} da duoc them thanh cong!"`,
  }
}