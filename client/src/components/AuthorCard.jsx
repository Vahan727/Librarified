import React from "react";
import {Link} from 'react-router-dom'


function AuthorCard({author}) {

return (
    <ul className="card">
    <img src={author.image} alt={author.name} />
    <h4>{author.name}</h4>
    <p>Born: {author.date_of_birth}</p>
    <Link to={`/author_details/${author.id}`}>
    <button className="primary" >Author Details</button>
    </Link> 
    </ul>
);
}


export default AuthorCard;