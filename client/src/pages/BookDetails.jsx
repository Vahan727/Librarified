import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../components/NavBar';
// import BookList from '../components/BookList';


function BookDetail() {

const [book, setBook] = useState()

const {id} = useParams()

function getBook() {
    fetch(`/api/books/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setBook(data)
    })
}


useEffect(() => {
    getBook()
}, [])


if (!book) {
    return null
}

return ( 
    <>
    <div>
    <NavBar />
    <h2>Book Details</h2>
    </div>
    <div className="detailsContainer" >
        <figure className="bookImg">
            <img src={book.image} alt={book.name} />
        </figure>
        <p className="title">  {book.title}</p>
        <p className="author">By: {book.author.name} </p>
        <p className="publicationDate">Published: {book.publication_date}</p>
        <p className="length">Page Count:  {book.length}</p>
        <button className="primary" >Add To Favorites</button> 
    </div>
    <section>
    <figure className="bookAuthorImg">
            <img src={book.author.image} alt={book.author.name} />
    </figure>
    </section>
    </>
    );
}

export default BookDetail;