import Image from './frontpage/image/image'
import Multipuledata from './frontpage/multipuledata/multipuledata'

export default function Resume() {
    return (
        <div className='ms-main-container'>
            <div className='resume-card-container' >
                <h1>Resume</h1>
                <Image />
                <Multipuledata />
            </div>
        </div>
    )
}