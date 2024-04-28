'use client'
import { ComponentA } from "@/components/rerender/ComponentA";
import { ComponentB } from "@/components/rerender/ComponentB";
import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
    content:JSX.Element;

}

export const ExampleD:FC<Props> = ({content}) => {
    console.log('-------------ExampleD-------------');
    const [count,setCount] = useState(1);

    return (
        <>
        {
            count % 4 === 0 ?  
            <div>
                <Typography>
                ExampleC: This is an example of passing a react component as prop and render the prop as a child component.
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
                {content}
        </div> :  
        <div>
            <Typography>
            ExampleC: This is an example of passing a react component as prop and render the prop as a child component.
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
            {content}
        </div>
        }
        </>
       

    )
}