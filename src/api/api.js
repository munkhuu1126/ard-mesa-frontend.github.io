import axios from "axios";


async function api(){
    const response = await axios.get('https://strapi.monnom.mn/mesas').catch(() => console.log("error occured during initialization"))
    let data = await response.data
    console.log(data)
    return data
}
async function put(player){
    const response = await axios.put(`https://strapi.monnom.mn/mesas/${player.id}`, {vote: player.score + 1})
}

export default 0
export {api, put}