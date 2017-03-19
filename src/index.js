import reduce from 'lodash/reduce';
import styles from './styles.scss';

let component = () => {
    var element = document.createElement('div');

    element.innerHTML = '<div class="title">Hello webpack</div>';
    element.classList.add(styles.body);
    return element;
}

document.body.appendChild(component());