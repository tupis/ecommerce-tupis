import './About.css'

const About = () => {
    return (
        <main class="About">
            <h1>Desafio feito a partir do site <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a></h1>
            <h2>Site feito com o intuito de treinar meu primeiro contato com a biblioteca <a href='https://pt-br.reactjs.org/' target="_blank">React</a></h2>
            <div>
                <p>Tecnologias usadas neste site: </p>
                <div className='images-languagens'>
                    <img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-9.png" alt="HTML5 Logo" />
                    <img src="https://img1.gratispng.com/20180816/ql/kisspng-cascading-style-sheets-logo-clip-art-css3-html-5b7617f6479ca3.8709748315344660382933.jpg" alt="CSS3 Logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" />
                    <img src="https://miro.medium.com/max/880/0*k9CL2yoHU6ELTkmi.png" alt="React Logo" />
                </div>
            </div>
        </main>
    );
}
 
export default About;