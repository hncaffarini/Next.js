import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
	return (
		<>
			<Head>
				<title>Prueba</title>
			</Head>
			<h1>First post</h1>
			<h2>
				<Link href="/">
					<a>Volver</a>
				</Link>
			</h2>
		</>
	)
}