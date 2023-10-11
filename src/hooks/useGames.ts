import { useEffect, useState } from "react"
import apiClient, { AxiosError } from "../services/api-client"

export type PlatForm = {
    id:number,
    name:string,
    slug:string
}
export type Game = {
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:PlatForm}[],
    metacritic:number
}
type FetchGameResults = {
    count:number,
    results:Game[]
}

const useGames = () => {
    const [error, setError] = useState<string>('')
    const [games, setGames] = useState<Game[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const controller = new AbortController()
    useEffect(()=>{
        setLoading(true)
        apiClient.get<FetchGameResults>('games',{signal:controller.signal})
        .then(res=> {
            setGames(res.data.results)
            setLoading(false)
            console.log('data',res.data)
        })
        .catch((err:AxiosError) =>{
            setError(err.message)
            setLoading(false)
        })
    },[])
    return {error,games,isLoading}
}
export default useGames
