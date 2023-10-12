import useData from "./useData";

export type Platform = {
    id:number;
    slug:string;
    name:string
}
const usePlatforms = () => useData<Platform>('platforms/lists/parents')

export default usePlatforms