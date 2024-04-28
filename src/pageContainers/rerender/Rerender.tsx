import { ComponentA } from "@/components/rerender/ComponentA";
import { ExampleA } from "@/sectionContainer/rerender/ExampleA";
import { Button, List, Typography } from "@mui/material";
import Link from "next/link";

export const Rerennder = () => {
    return (
        <div>
        <Typography variant="h4">
         Explore how react rerender works:
        </Typography>
        <List>
            <li>What is a React Component, and what is a React Element</li>
            <li>How React rerender works</li>
        </List>
        <Button>
            <Link href='/rerender/exampleA'>Example A</Link>
        </Button>
        <Button>
            <Link href='/rerender/exampleB'>Example B</Link>
        </Button>
        </div>
        
    )
}