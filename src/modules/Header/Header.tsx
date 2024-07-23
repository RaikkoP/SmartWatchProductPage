import './Header.scss';
import Icon from '../../components/Icon/Icon';
interface HeaderProps {
    hasSubHeader? : boolean;
    subHeaderItems?: {name: string; link: string; }[];
}

export default function Header({hasSubHeader = false, subHeaderItems = []}: HeaderProps) {
    return (
        <header className='header'>
            <Icon icon='xiaomi.svg' alt='Company Logo' size='icon__lg'/>
            <ul className='header__list'>
                <li className='header__list--item'> <a href='#'>Products</a></li>
                <li className='header__list--item'><a href='#'>Store</a></li>
                <li className='header__list--item'><a href='#'>About</a></li>
                <li className='header__list--item'><a href='#'>Support</a></li>
            </ul>
            { hasSubHeader && 
                <ul className='header__subheader'>
                    {subHeaderItems?.map((item, index) => (
                        <li className='header__subheader--item' key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            }
        </header>
    )
}