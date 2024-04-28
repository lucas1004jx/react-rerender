import Image from 'next/image'
import styles from './page.module.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <main >
        <Button><Link href='/product'>product page</Link></Button>
        <Button><Link href='/rerender'>react rerender</Link></Button>
    </main>
  )
}
