import { useMessages } from "./hooks/useMessages";
import { NoteItem } from "./NoteItem";

export function NotesList(props) {
   console.log('NotesList component run')
   const { messages, isLoading, error } = useMessages();

   /*
      const handleDeleteButton = async (messageId) => {
         const response = await fetch("http://localhost:4000/messages", {
            method: "delete",
            credentials: "include",
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ messageId: messageId }),
         });
         if (!response.ok) {
            refreshAccessToken();
            console.log("There was a problem deleting the note.");
            return;
         }
         const newMessagesState = messages.filter(
            (item) => item.id != messageId
         );
         setMessages(newMessagesState);
      };
   */

   return (
      <div>
         {messages.map((item) => (
            <NoteItem data={item} />
         ))}
      </div>
   );
}
