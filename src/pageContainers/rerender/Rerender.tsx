import { ComponentA } from "@/components/rerender/ComponentA";
import { ExampleA } from "@/pageContainers/rerender/ExampleA";
import { Button, List, ListItem, Typography } from "@mui/material";
import { link } from "fs";
import Link from "next/link";


const linksConfig = [{
    link:'/rerender/exampleA',
    content:'Example A: react re-render'
},
{
    link:'/rerender/exampleB',
    content:'Example B: pass a react element as a prop'
},
{
    link:'/rerender/exampleC',
    content:'Example C: pass a render content function  as a prop'
},
{
    link:'/rerender/exampleD',
    content:'Example D: conditional render'
}
]

export const Rerennder = () => {
    return (
        <div>
        <Typography variant="h4">
         Explore how react rerender works:
        </Typography>
        <List>
            <ListItem>- What is a React Component, and what is a React Element</ListItem>
            <ListItem>- How React rerender works</ListItem>
        </List>
        <List>
            {
                linksConfig.map((linkConfig,index) => {
                    return (
                        <ListItem key={index}>
                            <Link href={linkConfig.link}>
                                <Button variant="contained">{linkConfig.content}</Button>
                            </Link>
                        </ListItem>
                    )
                })
            }
        </List>
       
        </div>
        
    )
}