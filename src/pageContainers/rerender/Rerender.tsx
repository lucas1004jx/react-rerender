import { ComponentA } from "@/components/rerender/ComponentA";
import { ExampleA } from "@/sectionContainer/rerender/ExampleA";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export const Rerennder = () => {
    return (
        <div>
        <Typography variant="h4">
         Explore how react rerender works
        </Typography>
        <Button>
            <Link href='/rerender/exampleA'>Example A</Link>
        </Button>
        <Button>
            <Link href='/rerender/exampleB'>Example B</Link>
        </Button>
        </div>
        
    )
}