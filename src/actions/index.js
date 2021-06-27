export const addMusic = (data) => {
    return {
        type: "ADD_MUSIC",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteMusic = (id) => {
    return {
        type: "DELETE_MUSIC",
        payload:{
            id: id
        }
    }
}
