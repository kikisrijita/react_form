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
        case "DELETE_MUSIC":
            // const {id} = action.payload
            return {
                ...state,
                musicList:
                    state.musicList.filter((el) =>  el.id !== action.payload.id)
                
            }
        default: return state
    }
}

export default todoReducer