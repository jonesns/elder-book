import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import styles from '../../styles/Header.module.scss'

function Header() {
    return (
        <header >
            <div className={styles.navbar}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Image src="/assets/elderbook.svg"
                            alt="logo elder book"
                            width='60px'
                            height='49px' />
                        <h1>Elder Book</h1>
                    </a>
                </Link>
                <nav>
                    <ul className={styles.link_items}>
                        <li><Link href="/" ><a className={styles.link_a}>Início</a></Link></li>
                        <li><Link href="/" ><a className={styles.link_a}>Sobre Nós</a></Link></li>
                        <li><Link href="/cursos" ><a className={styles.link_a}>Cursos</a></Link></li>
                        <li><Link href="/parceiros" ><a className={styles.link_a}>Parceiros</a></Link></li>
                        <li><Link href="/transparencia" ><a className={styles.link_a}>Transparência</a></Link></li>
                        <li><Link href="/" ><a className={styles.link_a}>Contato</a></Link></li>
                    </ul>
                </nav>
                <div>
                    <p>Pesquisa</p>
                    <Button>
                        Entrar
                    </Button>
                    <Button>
                        Cadastrar
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;