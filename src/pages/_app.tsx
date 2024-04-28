import type { AppProps } from 'next/app'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function App({ Component, pageProps }: AppProps) {
    console.log('App');
    
  return <>
  <AccessTimeIcon />
  </>
}