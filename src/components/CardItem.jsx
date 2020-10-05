import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = ({ picture }) => {
    return (
        <div class="card mx-4 my-2" style={{ width: "18rem" }}>
            <Link to={`/picture/${picture.title}`}><img class="card-img-top" src={picture.thumbnail} alt="Card image cap" /></Link>
            <div class="card-body">
                <h5 class="card-title">{picture.title}</h5>
                <p>{picture.category}</p>
            </div>
        </div>
    )
}

export default CardItem
