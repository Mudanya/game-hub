import { useEffect, useState } from "react"
import apiClient, { AxiosError } from "../services/api-client"

type Game = {
    id:number,
    name:string
}
type FetchGameResults = {
    count:number,
    results:Game[]
}

const useGames = () => {
    const [error, setError] = useState<string>('')
    const [games, setGames] = useState<Game[]>([])

    const controller = new AbortController()
    useEffect(()=>{
        apiClient.get<FetchGameResults>('games',{signal:controller.signal})
        .then(res=> {
            setGames(res.data.results)
        })
        .catch((err:AxiosError) =>{
            setError(err.message)
        })
    },[])
    return {error,games}
}
export default useGames
