import React, { Fragment, useEffect } from 'react'
import '../css/chapters.css'

const Chapters = () => {

	useEffect(() => {
		document.body.style.background = '#313a4e';
		document.title = 'SGA|EL Feo'
	}, []);

	return (
		<Fragment>
			<div className='practice03'>
				<div className="chapters2">
					<div className="header-chapters">
						<div className="container">
							<h1>capitulos</h1>
							<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10 fa-9x"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path></svg>
						</div>
					</div>
					<section className="chapters" id="chapters">
						<article className="container" id="capitulo1">
							<h2>capitulo 1</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo <span>profesor</span></li>
										<li>Kidori<span>Alumna y exnovia de Oscar</span></li>
										<li>Oscar<span>sobrino de Daniel</span></li>
										<li>La Cuñada</li>
										<li>Tabata<span>novia actual de Oscar</span></li>
										<li>Luciano<span>el exnovio de Tabata</span></li>
										<li>Mendel<span>Mejor amigo de Oscar</span></li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Picada<span>Exprecion que se refiere a que alguien lo apuñalaron</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"La chica que acaba de perder a su unico amor de su vida"
								</p>
									<p className="reflection">
										Me parese una frase muy triste por el contexto del capitulo porque no hay forma de remediar lo que paso
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo2">
							<h2>capitulo 2</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>El Rector</li>
										<li>El Secretario</li>
										<li>Luciano<span>El que aseciono a Oscar</span></li>
										<li>Oscar</li>
										<li>Narciso Rizo<span>exparticipante de GRE</span></li>
										<li>Pablo</li>
										<li>Kidori</li>
										<li>Mendel</li>
										<li>Tabata</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Celerida<span>Rapidez, velocidad o prontitud en el movimiento o la ejecución de algo</span></li>
										<li>Taciturno <span> Que es habitualmente callado o silencioso.</span></li>
										<li>Estocismo<span>Concepción ética de esta escuela según la cual el bien no está en los objetos externos, sino en la sabiduría y dominio del alma, que permite liberarse de las pasiones y deseos que perturban la vida</span></li>
										<li>Ascuas<span>Se llama ascua al resto de brasa o cualquier fragmento de materia incandescente</span></li>
										<li>Aciagos<span>Que conlleva desgracia y causa tristeza o sufrimiento</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Agacho la cara y aprieto los párpados. Tengo una herida tan profunda en el alma"
								</p>
									<p className="reflection">
										Me parese una Frase desgarradora por lo que a perdido un ser muy sercano para el y no la a podido supera porque a pasado poco tiempo para que la herida que tiene sane
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo3">
							<h2>capitulo 3</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Dr. Carlos Z. Badillo<span>El Rector</span></li>
										<li>Leoncio Ayala<span>Profesor y lider del campamento</span></li>
										<li>Gaviota<span>Profesora y lider del campamento</span></li>
										<li>Mendel Yepez</li>
										<li>Kidori Emi</li>
										<li>Tabata Sosapavon</li>
										<li>Narciso Rizo</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Legajo <span>Conjunto de informaciones, documentos o papeles recopilados, referentes a una persona o un asunto</span></li>
										<li>Engargolados <span>Sistema para encuadernar que consiste en pasar una espiral de plástico a través de una serie de agujeros hechos previamente en uno de los bordes de las hojas de papel</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Leo la carta dos veces. Su forma me hace recordar aquella vieja serie de televisión en la que osados
										agentes secretos tomaban un vuelo hacia lo desconocido y en el trayecto recibían un mensaje en el que se
										les encomendaba una misión imposible. Sonrío esperando que la carta se autodestruya en cinco segundos"
								</p>
									<p className="reflection">
										Me parese garcioso este parrafo que sin importar lo que a susedido le coloca humor a algunas cosas, este parrafo me cayo de sorpresa no me lo esperaba
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo4">
							<h2>capitulo 4</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel Yepez</li>
										<li>Leoncio</li>
										<li>Gaviota Ayala</li>
										<li>Narciso</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Adecan <span>Ayudante de campo</span></li>
										<li>Anonadado <span>Alucinado, sorprendido, desconcertado</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Jamás creí que fuera tan lejos. Y ahora ¿qué vas a hacer sin ropa ni cobijas? Sobreviviré."
								</p>
									<p className="reflection">
										Me parese una frase muy explisita y cierta por el contexto del capitulo y me da gracia la manera en la que el contesta
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo5">
							<h2>capitulo 5</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Kidori</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Reselo<span>Sospecha o falta de confianza hacia una persona por suponer que oculta malas intenciones o hacia una cosa por suponer que conlleva algún peligro.</span></li>
										<li>Lasismo<span>Referirse a las organizaciones e instituciones que no están bajo el influjo de una organización religiosa.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"A pesar de que su físico no era bello, cautivaba. Tenía un magnetismo que lo hacía atrayente. Como te ven te tratan"
								</p>
									<p className="reflection">
										Me parese una frase muy Cierta y muy triste por que la socieda discrimina a las pesona que tiene mal aspecto fisico com el personaje Mendel que sus compañeros le hacen bullying por ser hasi
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo6">
							<h2>capitulo 6</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Follage<span>Follaje es un término que toman los botánicos para designar al conjunto de las ramas y de los tallos cargados de hojas abiertas, de flores y de frutos.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Al estudiarlo se darán cuanta que no es suficiente pensar lo correcto, también hay que actuar correctamente: cuidar su cuerpo, estar en buena forma física, saber arreglarse, usar bien la voz y las palabras"
								</p>
									<p className="reflection">
										Me parese una frase muy buena para aplicar en nosotros mismos para ser mejores personas y tenernos mas amor propio
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo7">
							<h2>capitulo 7</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Tabata</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Febril<span>Ardoroso , desasosegado , inquieto .</span></li>
										<li>Horrísono<span>Que causa horror o molestia por su sonido.</span></li>
										<li>Gargo<span>inteligente, astuta, traviesa.</span></li>
										<li>Azorado<span>Es un termino de uso anticuado, que hace alusión como inquieto, preocupado, alarmado, travieso, intranquilo, desasosegado y turbado. </span></li>
										<li>Gresca<span>Disputa o riña.</span></li>
										<li>Aviesa<span>Que es malintencionado o perverso.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Me parece sumamente extraño ver tal inseguridad en una mujer tan atractiva"
								</p>
									<p className="reflection">
										me parese una frase que es muy cierta por yo no logro entender por que no se acepta tal y como somo o sino son persona muy superficial que viven de apariencia
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo8">
							<h2>capitulo 8</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Tabata</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>anodina<span>que calma el dolor</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Blais Pascal en su libro póstumo Pensamientos escribió una tesis revolucionaria: Los hábitos son muy difíciles de romper porque provienen de actos repetidos. Para cambiar de hábitos es necesario forzarnos a la inducción de nuevos actos <b>haciendo como si</b>"
								</p>
									<p className="reflection">
										para mi toda la lectura de <b>La apuesta de pascal</b> me parecio muy inspiradora y muy util para mejorar acciones que esta muy arraigada a uno y que no nos gusta
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo9">
							<h2>capitulo 9</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Leoncio</li>
										<li>Mendel</li>
										<li>Narciso</li>
										<li>Kidori</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Apatia<span>Estado de desinterés y falta de motivación o entusiasmo en que se encuentra una persona y que comporta indiferencia ante cualquier estímulo externo.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Nada de lo que hagamos por fuera nos va a hacer más atractivos, si no aprendemos que todo en la vida es un proceso de acciones y pensamientos; los unos generan a los otros y viceversa creando un círculo cinético imparable"
								</p>
									<p className="reflection">
										como hable en un a refleccion pasada de la gente superficial y esta frase los describe muy bien y da a entender porque actuan de esa manera para que la gente no hablen mal de ellos
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo10">
							<h2>capitulo 10</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Leoncio</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Tabata</li>
										<li>Oscar</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>No encontre palabras desconocida en este capitulo</li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote confucio">
										"Cada persona tiene su belleza, pero no todos pueden verla"
								</p>
									<p className="reflection">
										la gran mayoria del capitulo se vaso en el esta frase y todo el capito le deja un gran refleccion que es no jusguemos al las peresonas como se ven pero si como actuan o como son por dentro en el sentido de sentimiento
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo11">
							<h2>capitulo 11</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Jenaro <span>hermano mayor de Tabata y acosador sexual</span></li>
										<li>Tabata</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Oscar</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Desasosiego<span>falta de tranquilidad</span></li>
										<li>Energúmeno<span>Persona colérica y que al enojarse se expresa con violencia.</span></li>
										<li>Mohin<span>Gesto del rostro con el que se expresa desagrado o enfado, especialmente el que se hace con los labios.</span></li>
										<li>Zaherido<span>Decir o hacer algo a alguien con lo que se sienta humillado o mortificado </span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"Ya deja de llorar, Tábata, te portas como una mártir desconsolada."
								</p>
									<p className="reflection">
										me parese una frase inzensata e inesperada no fue el momento ni el contexto correcto para desir esa frase y daniel tiene toda la rason del lo que dijo finalizando el capitulo
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo12">
							<h2>capitulo 12</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Tabata</li>
										<li>Narciso</li>
										<li>Kidori</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Agreste<span>Que es abrupto o está lleno de maleza por falta de cultivo.</span></li>
										<li>Exhorto<span>Despacho o comunicación que libra un juez a otro de igual categoría para que ordene dar cumplimiento de lo que se le pide.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										" Uno de los maestros cae al agua, lo vemos nadar a la orilla a toda prisa. Sufre picazón insoportable. Sale gritando y bailando; se agarra los genitales con evidente dolor"
								</p>
									<p className="reflection">
										esta parte de el texto uno se puede imaginar el dolor que el pobre maestro lo compadesco
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo13">
							<h2>capitulo 13</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Tabata</li>
										<li>Narciso</li>
										<li>Kidori</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Mandilon<span>Hombre de poco espíritu, cobarde, pusilánime.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"¿Por qué se fue y por qué murió? ¿Por qué el Señor me lo quitó? Se ha ido al cielo y para poder ir yo, debo también ser bueno para estar con mi amor… "
								</p>
									<p className="reflection">
										esta frase es muy ofensiva por las situaciobes que anpansado en los capitulos anteriores y muy inspropiedad
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo14">
							<h2>capitulo 14</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Tabata</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>vanagloria<span>Presunción u orgullo del propio valer.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										" ¡Si te descuidas, te eliminan! Las personas alrededor son agresivas, usan caretas y armas, nos miran en constante asedio"
								</p>
									<p className="reflection">
										casi nunca me fijo en eso per tiene razon es que uno de esta prebenida ante algunas persona porqe ellas nos quiere hacer daño emosional o fisicamente
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo15">
							<h2>capitulo 15</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Tabata</li>
										<li>Narciso</li>
										<li>Kidori</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>dócilmente<span>se refiere con docilidad, bondad, dulzura, maleabilidad, obediencia, sumisión, disciplina, ductilidad, humildad y mansedumbre refiriendo a las personas </span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"—Auto-cuidado significa ser sanos, vestirse bien, arreglarse mejor, ser limpios, saber hablar. De inicio, el agotamiento que sienten demuestra cuan perezosos han sido para cuidar sus cuerpos. Por aquí debemos empezar: ¿Quieren tener una personalidad de impacto? ¡Ejercítense a diario!; la flojera, el sedentarismo, la ingestión de drogas permitidas o no, destruyen sus cuerpos. "
								</p>
									<p className="reflection">
										hace un tiempo atras vi algo parerecido relacionado con este tema cuando lo lei me hiso reflexionar mucho sobre varias cosas y me realize unas metas para este año y ya empeze hacer algnas como insgribirme a un gimnacio y ir todo los dias y mejorar mi alimentacion y desdde eso me siento mas activo y energico
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo16">
							<h2>capitulo 16</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Kidori</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>neurastenia<span>en psiquiatría, es un trastorno neurótico caracterizado por un cansancio inexplicable que aparece después de realizar un esfuerzo mental o físico.</span></li>
										<li>Tapajós<span>El Tapajós es una propuesta de nueva unidad federativa de Brasil, resultado del desmembramiento del Pará, específicamente de las regiones del Bajo Amazonas y del suroeste paraense,</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Refleccion</h3>
									<p className="reflection">
										la verdad no encontre una frace el capitulo estubo mu trite la historia de mendel aunque es figticia un se compadese de ele pero eso no justifica que hagara ha su hermanito
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo17">
							<h2>capitulo 17</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Gaviota</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>no encontre palabras desconocidas en este capitulo</li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"no compren ropa que parece avejentada sólo porque está de moda."
								</p>
									<p className="reflection">
										Gaviota tiene mucha razon en ese aspecto aveses es mejor no giarse por moda si no como uno secienta mejor , me gsta mucho lo que dijo ella que la ropa no debe resaltar sino hacerlo resaltar a uno
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo18">
							<h2>capitulo 18</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Gaviota</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>Vivificante<span>Que incluye vida o nace de ella.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Cita del libro</h3>
									<p className="textualQuote">
										"según la mitología griega Hércules escribió entre los montes Abila y Calpe la rúbrica <b>Non plus ultra</b>que significa no hay nada más allá; España adoptó esta frase como su lema porque para ellos, pasando sus fronteras no había nada; siglos después, se retractaron y alteraron su lema a <b>plus ultra</b>"
								</p>
									<p className="reflection">
										tiene rason esa paralabra un poco egocetrica por lo que significa y en mi opinion uno no debe ser haci casi siempre las personas egocentias le caen mal a muchaspersonas por su manera de comportarse y actuar
								</p>
								</div>
							</div>
						</article>

						<article className="container" id="capitulo19">
							<h2>capitulo 19</h2>
							<div className="content">
								<div className='people'>
									<h3>Personajes</h3>
									<ul>
										<li>Pablo</li>
										<li>Mendel</li>
										<li>Kidori</li>
										<li>Gaviota</li>
										<li>Leoncio</li>
									</ul>
								</div>
								<div className="dictionary">
									<h3>Diccionario</h3>
									<ul>
										<li>estatismo<span>Inmovilidad de lo que permanece estático.</span></li>
									</ul>
								</div>
								<div className="bookQuote">
									<h3>Refleccion</h3>
									<p className="reflection">
										esta capitulo lo deja a uno pensando un poco y tambien por el giro de trama que le dejaron en el final y lo coloca pensar un poco en el papel de el Pablo y por lo que esta paseando en la cabaña de ellos
								</p>
								</div>
							</div>
						</article>
					</section>
				</div>
			</div>
		</Fragment>
	);
};

export default Chapters;