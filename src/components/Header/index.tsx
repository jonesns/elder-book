import Link from "next/link";
import Image from "next/image";
import { ButtonEntrar, ButtonCadastrar } from "../Button";
import styles from '../../styles/Header.module.scss'
import Search from "./Search/Index";

function Header() {
    return (
        <header>
            <div className={styles.navbar}>
                <div>
                    <Link href="/">
                        <a className={styles.logo}>
                            <Image src="/assets/elderbook.svg"
                                alt="logo elder book"
                                width='60px'
                                height='49px' />
                            <h1>Elder Book</h1>
                        </a>
                    </Link>
                </div>
                <nav className={styles.container}>
                    <ul className={styles.link_itens}>
                        <li><Link href="/" ><a className={styles.link_a}>Início</a></Link></li>
                        <li><Link href="/" ><a className={styles.link_a}>Sobre Nós</a></Link></li>
                        <li><Link href="/cursos" ><a className={styles.link_a}>Cursos</a></Link></li>
                        <li><Link href="/parceiros" ><a className={styles.link_a}>Parceiros</a></Link></li>
                        <li><Link href="/transparencia" ><a className={styles.link_a}>Transparência</a></Link></li>
                        <li><Link href="/" ><a className={styles.link_a}>Contato</a></Link></li>
                        <li><Search></Search> </li>
                        <li>
                            <ButtonEntrar>
                                Entrar
                            </ButtonEntrar>
                        </li>
                        <li>
                            <ButtonCadastrar>
                                Cadastrar
                            </ButtonCadastrar>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;