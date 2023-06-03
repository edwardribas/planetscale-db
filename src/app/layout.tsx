import { ModalContextProvider } from '@/contexts/ModalContext';
import './globals.scss'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata = {
	title: 'PlanetScale DB',
	description: 'Just practicing!',
}

export interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({
	children,
}: RootLayoutProps) {
	return (
		<html lang="pt-br">
			<body className={outfit.className}>
				<ModalContextProvider>
					{children}
				</ModalContextProvider>
			</body>
		</html>
	)
}
