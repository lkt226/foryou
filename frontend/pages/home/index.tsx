import { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';

import css from './home.module.css';

import { User } from '@/src/scripts/graphql/types';

const userId = "9686aff8-6f10-475b-95d6-42bdcdb79da9"

export default function Home() {
  const [user, setUser] = useState({} as User);

  return (
    <main id={css.home}>
      <h1>Home</h1>
    </main>
  );
}
