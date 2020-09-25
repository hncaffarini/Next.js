import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Prueba</title>
			</Head>
			<h1>First post</h1>
			<h2>
				<Link href="/">
					<a>Volver</a>
				</Link>
			</h2>
		</Layout>
	)
}