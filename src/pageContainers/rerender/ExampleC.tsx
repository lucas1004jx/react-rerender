'use client'
import { ComponentA } from "@/components/rerender/ComponentA";
import { ComponentB } from "@/components/rerender/ComponentB";
import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
    renderContent:()=>JSX.Element;

}

export const ExampleC:FC<Props> = ({renderContent}) => {
    console.log('-------------ExampleC-------------');
    const [count,setCount] = useState(0);

    // console.log('<ComponentA />',<ComponentA />);
    // console.log('<ComponentB />',<ComponentB />);
    // console.log('content()',content());

    
    
    return (
        <div>
            <Typography>
            ExampleC: This is an example of passing a render function as prop and render the prop as a child component.
            </Typography>
            <Typography>
                Now the prop is re-rendered when the state changed. Because each render of the ExampleC will create a new instance of the content element.
            </Typography>
            <Button onClick={() => setCount(count+1)} variant="contained">Increment count: {count}</Button>
           <Typography>
            Children:
           </Typography>
            <ComponentA />
            <ComponentB />
            {renderContent()}
        </div>

    )
}