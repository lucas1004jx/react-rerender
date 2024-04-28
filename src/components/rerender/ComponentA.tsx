'use client'
import { Button, Typography } from "@mui/material"
import { ComponentB } from "./ComponentB";
import { useEffect, useState } from "react";
import { log } from "console";

export const ComponentA = () => {
    console.log('Component A');
    useEffect(() => {
        console.log('Component A is mounted');
        return () => {
            console.log('Component A is unmounted');
        }
    },[]);
    return (
            <Typography>
                Component A 
            </Typography>
   )
}