'use client';
import { Typography } from "@mui/material"
import { useEffect } from "react";

export const ComponentD = () => {
    console.log('Component D');
    useEffect(() => {
        console.log('Component D is mounted');
        return () => {
            console.log('Component D is unmounted');
        }
    },[]);
    return (
        <Typography>
            Component D
        </Typography>
    )
}