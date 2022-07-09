import { IconeSearch } from '../../Icones';
import styles from './Search.module.scss';

export default function Search() {

    return (
        <div className={styles.search}>
            <div className={styles.icon}>{IconeSearch}</div>
            <input type="text" className={styles.search_text} />
        </div>

    );
}