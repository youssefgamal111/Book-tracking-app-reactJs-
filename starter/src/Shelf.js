import Book from "./Book";
const Shelf=({books,updateShelf,shelfName})=>{
    return(
        <div style={{

            display: "inline",
          }}>
             
            {
        books===[]?"":books.filter(b=>b.shelf===shelfName).map((b,index)=>
        <Book key ={index} book={b} ind={index} updateShelf={updateShelf} books={books}/>)
   
       }
    
        </div>
    );

}


export default Shelf;