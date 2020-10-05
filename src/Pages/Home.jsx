import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fuse from 'fuse.js'
import { setPictures } from '../redux/Actions/pictureAction'
import CardItem from '../components/CardItem'
import Loader from '../components/Loader'


const Home = () => {
    const state = useSelector(store => store)
    const [input, setInput] = useState("")
    const [pictures, setpictures] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (!state.picture) {
            dispatch(setPictures())
        }
    }, [])

    useEffect(() => {
        if (state.pictures) {
            setpictures(state.pictures)
            let fuse = new Fuse(pictures, {
                keys: ['title']
            })
            if (input) {
                let result = fuse.search(input).map(obj => {
                    return obj.item
                })
                setpictures(result)
                console.log("result",result)
            }
        }
    }, [state.pictures, input])

    return (
        <div className="fluid-container">
            <div className="row">
                <div className="col-sm-6 m-auto fixed">
                    <form style={{ marginTop: "100px" }}>
                        <input className="form-control" placeholder="Refine it by title" value={input} onChange={(e) => setInput(e.target.value)} />
                    </form>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-1 m-auto">
                    {state.loader && <Loader />}
                </div>
            </div>
                <div className="row">
                    {pictures.map((obj, index) =>
                        <div className="col-md-3">
                            <CardItem key={index} picture={obj} />
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Home
