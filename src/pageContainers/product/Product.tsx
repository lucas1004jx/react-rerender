
'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Product = () => {
    return (
        <div>
            product page container
          <button><Link href='/'>home page</Link></button>
        </div>
    )
}