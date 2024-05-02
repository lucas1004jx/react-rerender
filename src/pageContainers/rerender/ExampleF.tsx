'use client';

import { ComponentA } from "@/components/rerender/ComponentA"
import { Button, Typography } from "@mui/material"
import { useState } from "react";
import Image from "next/image";

export const ExampleF = () => {
    const [count,setCount] = useState(1);

    const NestedComponent = () => {
        return (
            <div>
                <Typography>Component inside a component</Typography>
                <img src="https://source.unsplash.com/an-aerial-view-of-a-sandy-area-with-a-river-running-through-it-u6e3tACA__o" alt="nextjs" />
            </div>
        )
    }
    return (
        <div>
            <Typography>Why declare a component inside a component is a bad idea</Typography>
            <Button onClick={() => setCount(count+1)} variant="contained">Increment count: {count}</Button>
            <ComponentA/>
            <NestedComponent/>
        </div>
    )
}