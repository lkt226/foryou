import css from './header.module.scss';

export const Header = () => {

  return (
    <header id={css['header']} >
      <div className={css['content']}>
        <h2>ForYou</h2>
      </div>
    </header>
  );
}