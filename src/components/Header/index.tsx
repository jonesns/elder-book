import Link from "next/link";
import Image from "next/image";

function Header() {
    return(
        <header>
            <div>
                <Link href="/">
                    <a>
                    <Image src="/assets/elderbook.svg" 
                        alt="logo elder book"
                        width='60px' 
                        height='49px'/>
                        Elder Book
                    </a>
                </Link>
            </div>
            <nav>
                <Link href="/" >Início</Link>
                <Link href="/" >Sobre Nós</Link>
                <Link href="/" >Cursos</Link>
                <Link href="/" >Parceiros</Link>
                <Link href="/" >Transparência</Link>
                <Link href="/" >Contato</Link>
            </nav>
        </header>
    );
}

export default Header;