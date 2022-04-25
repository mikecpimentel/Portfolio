export function NoteItem(props) {
   const title = props.data.title;
   const message = props.data.message;
   const dateModified = props.data.dateModified;

   console.log("NoteItem component run");
   return (
      <div className="message-box">
         <button className="close">
            &#10006;
         </button>
         <p className="title">{title}</p>
         <p className="text">{message}</p>
         <p className="date">{dateModified}</p>
      </div>
   );
}
