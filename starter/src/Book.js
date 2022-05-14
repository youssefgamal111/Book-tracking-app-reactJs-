const Book=({book,ind,updateShelf,books})=>{
  const getShelfValue=(book)=>{
    if(book.shelf!==undefined)return book.shelf;
    const shelfVal=books.filter(b=>b.id===book.id);
   book.shelf=shelfVal.length!==0?shelfVal[0].shelf:"None";
   return book.shelf;
    
  }

  
    return(  
        <div key={ind} className="book">
                <div className="book-top">
                  
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      margin:20 ,   backgroundImage:
                      book.imageLinks!==undefined?`url(${book.imageLinks.thumbnail})`:"",
                    
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select value={getShelfValue(book)} onChange={(event)=>updateShelf(book,event.target.value)} >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read" >Read</option>
                      {book.shelf==="None" ? <option value="None" >None</option>:""}  
                      
                     </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors!==undefined?book.authors.map((a,index)=>(index+1)===book.authors.length?a:a+','):""
                }</div>
                </div>
      
      );
}

export default Book;