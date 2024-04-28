'use client';
import { Typography } from "@mui/material"
import { useEffect } from "react";

export const ComponentB = () => {
    console.log('Component B');
    useEffect(() => {
        console.log('Component B is mounted');
        return () => {
            console.log('Component B is unmounted');
        }
    },[]);
    return (
        <Typography>
            Component B
        </Typography>
    )
}