import axios from "axios";

export default  axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key: '5a43b74edfbc482a91f772e46217e96c'
  }
})


