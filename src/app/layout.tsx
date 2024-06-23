import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/tailwind.css'
import { Suspense } from 'react'

const font = Poppins({ subsets: ['latin'], weight: '600' })

export const metadata: Metadata = {
	title: "Rubik's Cube",
	description: "Rubik's cube 3D with custom skybox.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Suspense fallback={null}>{children}</Suspense>
			</body>
		</html>
	)
}
