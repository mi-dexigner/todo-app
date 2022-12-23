
import { Inter } from '@next/font/google'
import Layout from '../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <h2 className={`${inter.className}`}>Deploy</h2>
    </Layout>
  )
}
