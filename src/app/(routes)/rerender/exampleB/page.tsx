import { ComponentC } from "@/components/rerender/ComponentC";
import { ExampleB } from "@/pageContainers/rerender/ExampleB";

export default function ExampleBPage() {
    return <ExampleB content={<ComponentC/>}/>
}   