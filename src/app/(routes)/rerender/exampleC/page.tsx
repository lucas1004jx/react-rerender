'use client';

import { ComponentC } from "@/components/rerender/ComponentC";
import { ExampleB } from "@/pageContainers/rerender/ExampleB";
import { ExampleC } from "@/pageContainers/rerender/ExampleC";

export default function ExampleCPage() {

    return <ExampleC renderContent={()=><ComponentC/>} />
}   