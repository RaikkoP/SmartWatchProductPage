import './Header.scss';
import Icon from '../../components/Icon.astro';

interface HeaderProps {
    hasSubHeader? : boolean | false;
    subHeaderItems?: {name: string; link: string; }[];
}

export default function Header({hasSubHeader, subHeaderItems}: HeaderProps) {
    return (
        <header className='header'>
            <Icon icon='company_logo' alt='Company Logo' size='md'/>
            <ul>
                <li> <a href='#'>Products</a></li>
                <li><a href='#'>Store</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Support</a></li>
            </ul>
            { hasSubHeader && 
                <ul>
                    {subHeaderItems?.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            }
        </header>
    )
}