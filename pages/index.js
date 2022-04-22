import Head from 'next/head'
import Hero from '../components/Hero/Hero'

export default function Home() {
	return (
		<>
			<Head>
				<title>Joey Yax - Full-stack web developer based in Portland, OR</title>
				<meta
					name='description'
					content='I work with brands and businesses of all sizes to create modern, engaging and thoughtful web experiences.'
				/>
			</Head>
			<Hero />
		</>
	)
}
