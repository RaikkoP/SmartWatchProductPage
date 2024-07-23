import './Icon.scss';

interface IconProps {
    icon: string,
    size: string,
    alt: string
}

export default function Icon({icon, size, alt}: IconProps) {
    return (
        <img className={`icon ${size}`} src={`../../${icon}`} alt={alt} />
    )
}