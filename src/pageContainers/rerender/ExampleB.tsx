'use client'
import { ComponentA } from "@/components/rerender/ComponentA";
import { ComponentB } from "@/components/rerender/ComponentB";
import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
    content:JSX.Element;
}

export const ExampleB:FC<Props> = ({content}) => {
    console.log('-------------ExampleB-------------');
    const [count,setCount] = useState(0);

    console.log('<ComponentA />',<ComponentA />);
    console.log('<ComponentB />',<ComponentB />);
    console.log('content',content);
    
    return (
        <div>
            <Typography>
            ExampleB:This is an example of passing a prop and render the prop as a child component.
            </Typography>
            <Typography>
                When the state changed, the component itself and its children will be rerendered. Except the element passed as a prop.
            </Typography>
            <Button onClick={() => setCount(count+1)} variant="contained">Increment count: {count}</Button>
           <Typography>
            Children:
           </Typography>
            <ComponentA />
            <ComponentB />
            {content}
        </div>

    )
}