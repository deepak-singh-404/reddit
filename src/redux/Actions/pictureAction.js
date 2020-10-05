import axios from 'axios'

const setLoaderHelper = () => {
    return {
        type: "SET_LOADER"
    }
}

const setPicturesHelper = (data) => {
    return {
        type: "SET_PICTURES",
        payload: data
    }
}

export const setPictureHelper = (data) => {
    return {
        type: "SET_PICTURE",
        payload: data
    }
}

export const setPictures = () => {
    return async (dispatch) => {
        dispatch(setLoaderHelper())
        try {
            const { data } = await axios({
                method: "Get",
                url: "https://www.reddit.com/r/pics/.json?jsonp="
            })

            const requiredData = data.data.children.map(pic_details => {
                let obj = {
                    author: pic_details.data.author,
                    fullname: pic_details.data.author_fullname,
                    awards: pic_details.data.all_awardings.length,
                    category: pic_details.data.content_categories,
                    comments: pic_details.data.num_comments,
                    thumbnail: pic_details.data.thumbnail,
                    title: pic_details.data.title,
                }
                return obj
            })
            dispatch(setPicturesHelper(requiredData))
        }
        catch (err) {
            dispatch({
                type: "SET_ERROR",
                payload: err.response.data
            })
            console.log("Error in setPictures Action", err.message)
        }
    }
}