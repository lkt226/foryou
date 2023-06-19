import { Header } from '@/components/organisms/Header';

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
