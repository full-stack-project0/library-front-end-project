import React from 'react'
import bookImage from '../../assets/Image/book3.jpg';
const BookComponent = ({book}) => {
return (
        <div className="card">
          
          <div className="text-container">
          <img src={bookImage} width="100" height="100"></img>
            <h3>{book.bookName}</h3>
            <p className="status">
              ({book.genre})
            </p>
            <p className="status">
              ISBN : {book.ISBN}
            </p>
            <p className="title">Written by</p>
            <p className='author'>{book.authorName}</p>
            <p className="availability">{book.availability}</p>
          </div>
        </div>
      );
}

export default BookComponent