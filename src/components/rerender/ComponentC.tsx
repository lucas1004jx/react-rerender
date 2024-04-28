'use client';
import { Typography } from "@mui/material"
import { useEffect } from "react";

export const ComponentC = () => {
    console.log('Component C');
    useEffect(() => {
        console.log('Component C is mounted');
        return () => {
            console.log('Component C is unmounted');
        }
    },[]);
    return (
        <Typography>
            Component C
        </Typography>
    )
}