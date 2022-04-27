import './Contact.css';

const Contact = () => {
    return (
        <main className='Contact'>
            <h2>Olá, eu sou o João Henrique, mais conhecido como "Tupi"</h2>
            <div className='social-media'>
                <a href="https://www.linkedin.com/in/joaotupinamba/">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn logo" />
                        <p>LinkedIn</p>
                    </div>
                </a>
                <a href="https://github.com/tupis">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Logo" />
                        <p>Github</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/jh.tupinamba/">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram Logo" />
                        <p>Instagram</p>
                    </div>
                </a>
                <a href="mailto:joaoh.tupinamba@gamil.com">
                    <div>
                        <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png" alt="" />
                        <p>E-mail</p>
                    </div>
                </a>
            </div>
        </main>
    );
}
 
export default Contact;