import './SidePanelStyle.css'

function SocialLinks() {
    return (
        <div className='social-links'>
            <a href='https://www.linkedin.com/in/thomas-o-cuilleanain-02205a241/'>
                <button className='invisible-button'>
                    <img className='social-logo' src='/linked-in-logo.png' alt='LinkedIn logo' />
                </button>
            </a>
            <a href='https://github.com/thomaoc1' >
                <button className='invisible-button'>
                    <img className='social-logo' id='github-logo' src='/github-logo.png' alt='Github logo'/>
                </button>
            </a>
        </div>
    )
}

export default SocialLinks;