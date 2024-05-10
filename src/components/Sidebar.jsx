import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import Retangle from './../images/Rectangle 4240.png'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={Retangle}
      />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/hugo4s.png" />

        <strong>Pedro Miguel</strong>
        <span>Desenvolvedor Frontend</span>
      </div>
      <footer>
        <a>
          <PencilLine style={{ marginRight: '0.5rem' }} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}