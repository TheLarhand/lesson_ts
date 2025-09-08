import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

function MainLayoute({ children }: Props) {
  return (
      <div>
        <Header />
        <main >{children}</main>
        <Footer />
      </div>
  );
}


export default MainLayoute;
