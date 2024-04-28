import { ComponentC } from "@/components/rerender/ComponentC";
import { ExampleB } from "@/sectionContainer/rerender/ExampleB";

export default function ExampleBPage() {
    return <ExampleB content={<ComponentC/>}/>
}   