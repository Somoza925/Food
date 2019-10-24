import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1bEisLsa3UJpLjCBFwdMeNPkq50dd23IeHEgBViJ5EceTA3NXJT31EoSzUNX2Rqd_7_KJnl2sRldWfjf8Ko9jBT6ODrpRvMAunxwXg96KyF3gDTRESoWOWNjPyWuXXYx'
    }
});

