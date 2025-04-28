import msi from './IMG-20240712-WA0001.jpg'

export default function Image() {
    return (
        <div className='image-container'>
            <img className='msi_image' src={msi} alt="MSI product" />
        </div>
    )
}
