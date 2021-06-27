const initialData = {
    musicList: []
}

const todoReducer = (state=initialData,action) => {
    switch(action.type){
        case "ADD_MUSIC":

        const {id, data} = action.payload;
            return {
                ...state,
                musicList:[
                    ...state.musicList, 
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        default: return state
    }
}

export default todoReducer