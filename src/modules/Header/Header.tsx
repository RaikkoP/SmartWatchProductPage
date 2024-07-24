import './Header.scss';
import Icon from '../../components/Icon/Icon';
import SubHeader from '../../components/SubHeader/SubHeader';
interface HeaderProps {
    hasSubHeader? : boolean;
    subHeaderItems?: {name: string; link: string; }[];
    subHeaderTitles?: string[];
}

export default function Header({hasSubHeader = false, subHeaderItems = [], subHeaderTitles = []}: HeaderProps) {
    return (
        <header className='header'>
            <Icon icon='xiaomi.svg' alt='Company Logo' size='icon__lg'/>
            <ul className='header__list'>
                <li className='header__list--item'> <a href='#'>Products</a></li>
                <li className='header__list--item'><a href='#'>Store</a></li>
                <li className='header__list--item'><a href='#'>About</a></li>
                <li className='header__list--item'><a href='#'>Support</a></li>
            </ul>
            {hasSubHeader &&
                <SubHeader subHeaderItems={subHeaderItems} subHeaderTitles={subHeaderTitles} />
            }
        </header>
    )
}