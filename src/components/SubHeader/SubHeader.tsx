interface HeaderProps {
    subHeaderItems: {name: string; link: string; }[];
    subHeaderTitles: string[];
}

export default function SubHeader({subHeaderItems = [], subHeaderTitles = []}: HeaderProps) {
    return (
            <div>
                {subHeaderTitles?.map((item, index) => (
                    <div>
                        <h2 key={index}>{item}</h2>
                        <ul className='header__subheader'>
                            {subHeaderItems?.map((item, index) => (
                                <li className='header__subheader--item' key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
    )
}