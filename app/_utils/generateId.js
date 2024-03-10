export const generateId= () =>{

    const chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let id= ""
    for(let i=0; i<6; i++){
        let index= Math.floor(Math.random()*chars.length)
        id+= chars.at(index)
    }
    console.log(id)

    return id;
}