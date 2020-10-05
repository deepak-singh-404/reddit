import React, { useEffect, useState, useParams, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPictureHelper, setPictures } from '../redux/Actions/pictureAction'
import Loader from './Loader'

const SingleCard = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(store=>store)
    const [picture, setpicture] = useState({})

    useEffect(() => {
        if (!state.pictures) {
            dispatch(setPictures())
        }
    },[])

    useEffect(() => {
            dispatch(setPictureHelper(props.match.params.title))
    }, [props.match.params.title, state.pictures])
    
    useEffect(() => {
        if (state.picture) {
            setpicture(state.picture)
        }
    }, [state.picture])

    return (
        <Fragment>
            {state.pictures ? <div class="card ml-5 my-5" style={{ width: "18rem", display: "inline-block" }}>
                <img src={picture.thumbnail} style={{ width: "100%", height: "360px" }} class="card-img-top" alt="userPost" />
                <div class="card-body">
                    <h5 class="card-title">{picture.author}</h5>
                    <h5 class="card-title">{picture.title}</h5>
                    <h6 class="card-title">Comments: {picture.comments}</h6>
                    <h6 class="card-title">Awards: {picture.awards}</h6>
                    <p class="card-text">{picture.description}.</p>
                </div>
            </div> :
                <Loader />
            }
         </Fragment>
       
    )
}

export default SingleCard
