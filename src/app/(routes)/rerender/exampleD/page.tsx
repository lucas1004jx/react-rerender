import { ComponentC } from "@/components/rerender/ComponentC";
import { ExampleD } from "@/pageContainers/rerender/ExampleD";

export default function ExampleDPage() {
    return <ExampleD content={<ComponentC/>}/>
}   