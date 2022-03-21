export const addTodo = async (todoTitle, todoDescription) => {
   const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         title: todoTitle,
         description: todoDescription,
      }),
   };

   const response = await fetch("http://localhost:3010/todo", options);
   return await response.json();
}