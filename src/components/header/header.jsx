import './header.css';

export default function Header() {
    const headerItems = ['Home', 'Details', 'About', 'Contact'];
    return (
        <nav className='msHeader' >
            {
                headerItems.map((item, index) => {
                    return <a href={`/${item === 'Home' ? '' : item}`} className='msHeaderItem' key={index}> {item} </a>
                })
            }
        </nav>
    )
}