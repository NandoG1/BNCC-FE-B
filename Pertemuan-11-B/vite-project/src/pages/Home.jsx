import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

function Home(){
    return (
        <div>
            <h1>Home Page</h1>
            <Button variant="destructive">Submit</Button>
            <Slider/>
        </div>
    )
}

export default Home