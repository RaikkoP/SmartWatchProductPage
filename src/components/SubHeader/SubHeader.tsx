import './SubHeader.scss';
interface HeaderProps {
    subHeaderItems: {name: string; link: string; }[][];
    subHeaderTitles: string[];
}

export default function SubHeader({subHeaderItems = [[]], subHeaderTitles = []}: HeaderProps) {
    return (
            <div className='subHeader'>
                <div className='subHeader--filler'>
                    <div className='subHeader--filler-inner'>
                        <div className='shapes shapes--left'>
                            <div className='shapes__circle'/>
                            <div className='shapes__triangle-down'/>

                        </div>
                        <h2 className='subHeader--filler-name'>Xiaomi</h2>
                        <div className='shapes shapes--right'>
                            <div className='shapes__circle'/>
                            <div className='shapes__triangle-down'/>

                        </div>
                    </div>
                </div>
                <div className='subHeader--content'>
                    <img src='../../images/phone.png' className='subHeader--image' alt='phone'/>
                    <div className='subHeader--content-lists'>
                        {subHeaderTitles?.map((item, index) => (
                            <div className='subHeader__section'>
                                <h2 className='subHeader__section--title' key={index}>{item}</h2>
                                <ul className='subHeader__section--list'>
                                    {subHeaderItems[index]?.map((item, index) => (
                                        <li className='subHeader__section--list-item' key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    )
}