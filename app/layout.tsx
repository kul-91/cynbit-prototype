import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Solution Blueprint | Cynbit Technologies',
  description: 'Shape your project into a clear first blueprint with Cynbit Technologies.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
