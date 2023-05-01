import MenuButton from '@/components/atoms/menu-button'
import ReactLink from '@/components/atoms/react-link'
import Link from 'next/link'

export default function Header () {
  return (
    <aside id="navbar">
      <div className="_content">
        <div className="_menu">
          <MenuButton />
          <menu className='_submenu'>
            <ReactLink href="/config">Configurações</ReactLink>
            <ReactLink href="/">Dashboard</ReactLink>
            <ReactLink href="/tarefas">Tarefas</ReactLink>
          </menu>
        </div>
      </div>
    </aside>
  )
}