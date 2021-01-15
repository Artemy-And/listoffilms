import axios from "axios";





// const instance = axios.create({
//     // withCredentials: true,
//     baseURL: 'https://api.themoviedb.org/3/discover/',
//     headers: {
//         "API-KEY": "4237669ebd35e8010beee2f55fd45546"
//     }
// })


//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1
//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&include_adult=false&include_video=false&page=1
//{"genres":[{"id":28,"name":"Action"},
// {"id":12,"name":"Adventure"},
// {"id":16,"name":"Animation"},
// {"id":35,"name":"Comedy"},
// {"id":80,"name":"Crime"},
// {"id":99,"name":"Documentary"},
// {"id":18,"name":"Drama"},
// {"id":10751,"name":"Family"},
// {"id":14,"name":"Fantasy"},
// {"id":36,"name":"History"},
// {"id":27,"name":"Horror"},
// {"id":10402,"name":"Music"},
// {"id":9648,"name":"Mystery"},
// {"id":10749,"name":"Romance"},
// {"id":878,"name":"Science Fiction"},
// {"id":10770,"name":"TV Movie"},
// {"id":53,"name":"Thriller"},
// {"id":10752,"name":"War"},
// {"id":37,"name":"Western"}]}

let myFavoiriteMovie = {
    "media_type": "movie",
    "media_id": 464052,
    "favorite": true
}

let requestToken = {
    "request_token": "bf71824d1c0a7439f1ab3bfc0459d4eb15901f18"
}




export const infoAPI = {

    getFilms(page:number,sort:string,genre:string){
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&${sort}&include_adult=false&include_video=false&page=${page}${genre}`)
            .then(res=>{
                    return res
            }
            )
    },
    getFilmsFavoirite(myMovie:any){
        return axios.post(`https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4237669ebd35e8010beee2f55fd45546&session_id=3daafbf1bb655d7b9a4d48021ed128381d6d6b40`,myMovie)
            .then(res=>{

                    return res
                }
            )
    },
    getReauestTokenReauest(){
        return axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=4237669ebd35e8010beee2f55fd45546', requestToken)
            .then(res=>{

                return res
            })
    },
    showFavoiriteMovies(){ //'https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=4237669ebd35e8010beee2f55fd45546&session_id=3daafbf1bb655d7b9a4d48021ed128381d6d6b40&language=en-US&sort_by=created_at.asc&page=1'
        return axios.get('https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=4237669ebd35e8010beee2f55fd45546&session_id=3daafbf1bb655d7b9a4d48021ed128381d6d6b40&language=en-US&sort_by=created_at.asc&page=1')
            .then(res=>{

                return res

            })
    }

}

