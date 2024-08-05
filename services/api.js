import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://lynfypiyqcivrgnaiohz.supabase.co/rest/v1',
    headers: {
        "apikey": process.env.APIKEY,
        "Authorization": process.env.AUTH
    }
})