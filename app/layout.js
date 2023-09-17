import NavBar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'WikiRocket App',
	description:
		'Mini project learning about client and server components in Next.js',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`bg-slate-800 ${inter.className}`}>
				<header>
					<NavBar />
				</header>
				{children}
			</body>
		</html>
	)
}
