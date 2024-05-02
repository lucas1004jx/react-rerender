'use client';

import { ComponentA } from "@/components/rerender/ComponentA";
import { Button, Input, List, ListItem, TextField, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";


export const ExampleE = () => {
    console.log('-------------ExampleD-------------');

    const [count,setCount] = useState(1);
    const [items,setItems] = useState(['item1','item2','item3']);

    useEffect(() => {
        if(count % 4 === 0){
            setItems(['item1',`item${count}`,'item2','item3']);
        }
    },[count]);

    

    return (
        <div>
            <Typography>
            ExampleE: This is an example of rendering an array of elements.
            </Typography>
            <Typography>
                When the the count can be divided by 4, we will add a new element to the array.and put is in the second position.
            </Typography>
            <Button onClick={() => setCount(count+1)} variant="contained">Increment count: {count}</Button>
            <Typography>
                Children:
            </Typography>
            <List>
            {
               items.map((item,index) => (
                <ListItem key={index}> 
                <TextField  placeholder={item} label={item}/>
                </ListItem>
                ))
            }
            <ComponentA />
            </List>
            
        </div>
    )
}