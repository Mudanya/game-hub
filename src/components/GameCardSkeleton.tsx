import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} width={{"lg":'400px',"md":'45vw'}} overflow="hidden">
        <Skeleton height={'200px'}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton