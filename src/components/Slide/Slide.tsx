import { ButtonAcesse } from "../Button";
import { SlideType } from "./types";
import Image from "next/image";
import styles from '../../styles/Slide.module.scss'

interface SlideProps {
    slide: SlideType;
}

export function Slide({ slide }: SlideProps) {
    const { title, about, link, image } = slide;

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{about}</p>
            <ButtonAcesse link={link}>
                Acesse
            </ButtonAcesse>
            <Image src={image.url} alt={image.alt}
                width='1117px'
                height='424px'
            />
        </div>
    )
}