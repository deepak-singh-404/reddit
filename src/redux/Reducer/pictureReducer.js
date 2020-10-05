
const initialState = {
    pictures: [],
    picture: {},
    loader: false,
    error: {}
}


const pictureReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PICTURE":
            let pic;
            if (state.pictures) {
                pic = state.pictures.find(picture => {
                    return picture.title === action.payload
                })
            }
            return {
                ...state,
                picture: pic,
            }
        case "SET_PICTURES":
            return {
                ...state,
                pictures: action.payload,
                loader: false
            }
        case "SET_LOADER":
            return {
                ...state,
                loader: true
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default pictureReducer


