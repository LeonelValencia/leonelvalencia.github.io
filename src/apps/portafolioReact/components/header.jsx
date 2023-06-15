import './header.css'

export default function Header({links = [],logo = ""}){
    return (
        <div className="Header">
            <a href={links[0].link}>
                <img src={logo} alt={links[0].label} />
            </a>
            <div className='navbar'>
                {links.map((link) => (
                    <a href={link.link} key={link.label}>{link.label}</a>
                ))}
            </div>
        </div>
    )
}