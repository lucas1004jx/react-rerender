'use client'
import { ComponentA } from "@/components/rerender/ComponentA";
import { ComponentB } from "@/components/rerender/ComponentB";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const ExampleA = () => {
    console.log('-------------ExampleA-------------');
    const [count,setCount] = useState(0);
    //     console.log('ComponentA',ComponentA);
    //   console.log('<ComponentA />',<ComponentA />);

      
  
    return (
        <div>
            <Typography>
            ExampleA:This is an example of how the rerender works normally in react.
            </Typography>
            <Typography>
                When the state changed, the component itself and its children will be rerendered.
            </Typography>
            <Button onClick={() => setCount(count+1)} variant="contained">Increment count: {count}</Button>
           <Typography>
            Children:
           </Typography>
            <ComponentA />
            <ComponentB />
        </div>

    )
}