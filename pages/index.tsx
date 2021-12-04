import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/bg-1.jpg" width={200} height={200} alt="bg" />
      <h1>Welcome Maul</h1>
    </Layout>
  )
}