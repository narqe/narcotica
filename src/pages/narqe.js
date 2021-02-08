import React from "react";
import "./pages-css/cv.css"

const IndexPage = () => (
    <body className="cv">
        <main class="contenedor">
            <section class="contenedor-izq">
                <header class="contenedor-izq__menu">
                    <figure class="foto-cv">
                        <img src="assets/images/cv/cv.jpg" alt="Joel Acef" title="Joel Acef" width="200" />
                    </figure> 
                    <h1 class="nombre">Joel <span>Acef</span></h1>
                    <nav>
                        <ul class="contenedor-izq__list-nav">
                            <li><a className="link-cv" href="#section1" title="¿Quién Soy?">¿Quién Soy?</a></li>
                            <li><a className="link-cv" href="#section2" title="Formación Académica">Formación Académica</a></li>
                            <li><a className="link-cv" href="#section3" title="Experiencia Laboral">Experiencia Laboral</a></li>
                            <li><a className="link-cv" href="#section4" title="Habilidades">Habilidades</a></li>
                            <li><a className="link-cv" href="#section5" title="Datos de Contacto">Datos de Contacto</a></li>
                            <li><a className="link-cv" href="#section6" title="Idiomas">Idiomas</a></li>
                        </ul>
                    </nav>
                </header>
            </section>
            <section class="contenedor-der">
                <article id="section1" class="contenedor-der__quiensoy">
                    <h2>¿Quién Soy?</h2>
                    <ul class="contenedor-der__list-datos">                            
                        <li><span>Nombre y Apellido:</span> Joel Acef</li>
                        <li><span>Fecha de nacimiento:</span> 24/07/1992 (26 años)</li>
                        <li><span>Lugar de nacimiento:</span> Córdoba</li>
                    </ul>
                    <p class="text-quiensoy">Soy Diseñador Interactivo, especializado en Frontend. También estudié Comunicación Social en la UNC. Me considero una persona proactiva que nunca se queda con dudas. <br/>
                    Me encanta aprender siempre algo nuevo, soy una persona muy curiosa. Soy un apasionado por la música, me gusta ir a recitales, descubrir bandas nuevas en internet. 
                    Además toco la guitarra, la batería y el teclado. Me apasiona mucho escribir, leer y ver series.</p>
                </article>
                <article id="section2" class="contenedor-der__formacion">
                    <h2>Formación Académica</h2>
                    <ol class="contenedor-der__list-formacion">
                        <li><span>2004 - 2009:</span> Egresado del CEF San Buenaventura.</li>
                        <li><span>2010 - 2012:</span> Egresado de la carrera “Diseño Interactivo” en la Escuela La Metro.</li>
                        <li><span>2012 - 2018:</span> Cursando la carrera de Comunicación Social en la UNC.</li>
                        <li><span>2019 - Actualidad:</span> Cursando la carrera de Desarrollo Web Full Stack en Acámica.</li>
                    </ol>
                </article>
                <article id="section3" class="contenedor-der__experiencia">
                    <h2>Experiencia Laboral</h2>
                    <ol class="contenedor-der__list-experiencia">
                        <li><span>Febrero 2011 – Julio 2011:</span> 
                        Operador en ventas en <a className="link-cv" href="http://www.protectionone.com.ar/" rel="noreferrer" target="_blank" title="Protection One"> Protection One</a>.</li>
                        <li><span>Septiembre 2011 – Junio 2013:</span> 
                        Desarrollo Web en <a className="link-cv" href="https://criterionet.com/" rel="noreferrer" target="_blank" title="Criterio Net">Criterio Net</a>.</li>
                        <li><span>Junio 2013 - Noviembre 2014:</span> 
                        Inicié un Proyecto Freelance de páginas webs.</li>
                        <li><span>Diciembre 2014 - Mayo 2017:</span> 
                        Supervisor de Turno en la empresa <a className="link-cv" href="http://starbucks.com.ar" rel="noreferrer" target="_blank" title="Starbucks">Starbucks</a>.</li>
                        <li><span>Enero 2018 - Actualidad:</span>
                         Desarrollador Web en <a className="link-cv"  href="http://trompoagencia.com/" rel="noreferrer" target="_blank" title="Trompo Agencia">Agencia Trompo</a>.</li>
                    </ol>
                </article>
                <article id="section4" class="contenedor-der__habilidades">
                    <h2>Habilidades</h2>
                    <h3>Lenguajes:</h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/html.png" alt="HTML" title="HTML" width="32"/>
                                <figcaption>HTML5</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/css.png" alt="CSS" title="CSS" width="32"/>
                                <figcaption>CSS3</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/php.png" alt="php" title="PHP" width="32"/>
                                <figcaption>php</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/javascript.png" alt="js" title="js" width="32"/>
                                <figcaption>javaScript</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                    <h3>Librerias y Frameworks:</h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/jquery.png" alt="jquery" title="jquery" width="32"/>
                                <figcaption>jQuery</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/bootstrap.png" alt="boorstrap" title="bootstrap" width="32"/>
                                <figcaption>bootstrap</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                    <h3>Herramientas de Diseño:</h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/photoshop.png" alt="photoshop" title="photoshop" width="32"/>
                                <figcaption>photoShop</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/illustrator.png" alt="illustrator" title="illustrator" width="32"/>
                                <figcaption>illustrator</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/indesign.png" alt="indesign" title="indesign" width="32"/>
                                <figcaption>inDesign</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/premiere.png" alt="premiere" title="premiere" width="32"/>
                                <figcaption>premiere</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                    <h3>Gestores de Contenido: </h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/wordpress.png" alt="wordpress" title="wordpress" width="32"/>
                                <figcaption>wordPress</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/prestashop.png" alt="prestashop" title="prestashop" width="32"/>
                                <figcaption>prestaShop</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                    <h3>Base de Datos: </h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/mysql.png" alt="mysql" title="mysql" width="32"/>
                                <figcaption>mySql</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/xampp.png" alt="xampp" title="xampp" width="32"/>
                                <figcaption>xampp</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                    <h3>Marketing: </h3>
                    <ul class="contenedor-der__list-habilidades">
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/adwords.png" alt="adwords" title="adwords" width="32"/>
                                <figcaption>adWords</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure class="habilidades">
                                <img src="assets/images/cv/iconos/analytics.png" alt="analytics" title="analytics" width="32"/>
                                <figcaption>analytics</figcaption>
                            </figure>
                        </li>
                    </ul><hr/>
                </article>
                <article id="section5" class="contenedor-der__contacto">
                    <h2>Datos de Contacto</h2>
                    <address>
                        <ul class="contenedor-der__list-contacto">
                            <li><strong>Telefono Celular: <a href="tel:03515994700" rel="noreferrer" target="_blank" title="(0351)155994700">(0351)155994700</a></strong></li>
                            <li><strong>E-mail: <a href="mailto:joelacef@gmail.com" rel="noreferrer" target="_blank" title="joelacef@gmail.com">joelacef@gmail.com</a></strong></li>
                        </ul>
                    </address>
                </article>
                <article id="section6" class="contenedor-der__idiomas">
                    <h2>Idiomas</h2>
                    <ul class="contenedor-der__list-idiomas">
                        <li>
                            <figure class="idiomas">
                                <img src="assets/images/cv/idiomas/espanol.png" alt="Español" title="Español" width="32"/>
                            </figure> Nativo
                        </li>
                        <li>
                            <figure class="idiomas">
                                <img src="assets/images/cv/idiomas/ingles.png" alt="Ingles" title="Inglés" width="32"/>
                            </figure> Nivel Avanzado (Lecto Comprensión)
                        </li>
                        <li>
                            <figure class="idiomas">
                                <img src="assets/images/cv/idiomas/frances.png" alt="Frances" title="Frances" width="32"/>
                            </figure> Nivel Inicial
                        </li>
                    </ul>
                </article>
            </section>
        </main>
    </body>
)

export default IndexPage
