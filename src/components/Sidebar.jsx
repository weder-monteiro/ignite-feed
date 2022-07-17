import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1573166953836-06864dc70a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlciUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=40" 
            />
            <div className={styles.profile}>
                <strong>Nome do usuario</strong>
                <span>Cargo do usuario</span>
                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}