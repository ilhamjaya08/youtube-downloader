import axios from 'axios'
import { Elysia, t } from 'elysia'
import qs from 'qs'


const yt = new Elysia()
    .get('/yt', async ({ query: { url } }) => getVideo(url))


 async function getVideo(u: string | undefined) {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

    const form = {
        url: u,
        token: "b9f3941d2b2b27d8e926b9dc02855ff9bc193f31f05577e0b28bd925bf32bcbb",
    }
    const base = "https://y2date.com/wp-json/aio-dl/video-data/"
    let x
    const res = await axios
              .post(base, qs.stringify(form), { headers })
              .then((res) => {
                x = res.data
                return  x
              })
              .catch((err) => {
                console.log(err)
                return err
              })
    return res
}

export default yt