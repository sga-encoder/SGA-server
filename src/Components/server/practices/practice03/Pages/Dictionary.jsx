import React, { Fragment, useEffect } from 'react';
import '../css/dictionary.css';

const Dictionary = () => {

	useEffect(() => {
		document.body.style.background = '#a66328';
		document.title = 'SGA|EL Feo'
	})
	return (
		<Fragment>
			<div className='practice03'>
				<div className="dictionary1">
					<section className='container-dicctionary'>
						<h1>Diccionario</h1>
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-down fa-w-10 fa-9x"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
					</section>
					<section>
						<div className='dictionary2'>
							<h2 className='letter'>A</h2>
							<ul className='listLetters'>
								<li>
									<h3>Aciagos</h3>
									<p>
										Que conlleva desgracia y causa tristeza o sufrimiento
									</p>
								</li>
								<li>
									<h3>Adecan</h3>
									<p>Ayudante de campo</p>
								</li>
								<li>
									<h3>Agreste</h3>
									<p>Que es abrupto o está lleno de maleza por falta de cultivo</p>
								</li>
								<li>
									<h3>Anodina</h3>
									<p>que calma el dolor</p>
								</li>
								<li>
									<h3>Anonadado </h3>
									<p>Alucinado, sorprendido, desconcertado</p>
								</li>
								<li>
									<h3>Apatia</h3>
									<p>
										Estado de desinterés y falta de motivación o entusiasmo en que se encuentra una persona y que comporta indiferencia ante cualquier estímulo externo.
									</p>
								</li>
								<li>
									<h3>Ascuas</h3>
									<p>Se llama ascua al resto de brasa o cualquier fragmento de materia incandescente</p>
								</li>
								<li>
									<h3>Aviesa</h3>
									<p>
										Que es malintencionado o perverso.
									</p>
								</li>
								<li>
									<h3>Azorado</h3>
									<p>
										Es un termino de uso anticuado, que hace alusión como inquieto, preocupado, alarmado, travieso, intranquilo, desasosegado y turbado.
									</p>
								</li>
							</ul>

							<h2 className='letter'>C</h2>
							<ul className="listLetters">
								<li>
									<h3>Celeridad</h3>
									<p>
										Rapidez, velocidad o prontitud en el movimiento o la ejecución de algo
									</p>
								</li>
							</ul>

							<h2 className='letter'>E</h2>
							<ul className="listLetters">
								<li>
									<h3>Energúmeno</h3>
									<p>
										Persona colérica y que al enojarse se expresa con violencia.
									</p>
								</li>
								<li>
									<h3>Engargolados</h3>
									<p>
										Sistema para encuadernar que consiste en pasar una espiral de plástico a través de una serie de agujeros hechos previamente en uno de los bordes de las hojas de papel
									</p>
								</li>
								<li>
									<h3>Estatismo</h3>
									<p>
										Inmovilidad de lo que permanece estático.
									</p>
								</li>

								<li>
									<h3>Estocismo</h3>
									<p>
										Concepción ética de esta escuela según la cual el bien no está en los objetos externos, sino en la sabiduría y dominio del alma, que permite liberarse de las pasiones y deseos que perturban la vida
									</p>
								</li>

								<li>
									<h3>Exhorto</h3>
									<p>
										Despacho o comunicación que libra un juez a otro de igual categoría para que ordene dar cumplimiento de lo que se le pide.
									</p>
								</li>
							</ul>

							<h2 className='letter'>F</h2>
							<ul className="listLetters">
								<li>
									<h3>Folloge</h3>
									<p>
										Follaje es un término que toman los botánicos para designar al conjunto de las ramas y de los tallos cargados de hojas abiertas, de flores y de frutos.
									</p>
								</li>
								<li>
									<h3>Febril</h3>
									<p>
										Ardoroso , desasosegado , inquieto
									</p>
								</li>
							</ul>

							<h2 className='letter'>G</h2>
							<ul className="listLetters">
								<li>
									<h3>Gargo</h3>
									<p>
										inteligente, astuta, traviesa.
									</p>
								</li>
								<li>
									<h3>Gresca</h3>
									<p>
										Disputa o riña.
									</p>
								</li>
							</ul>

							<h2 className='letter'>H</h2>
							<ul className="listLetters">
								<li>
									<h3>Horrísono</h3>
									<p>
										Que causa horror o molestia por su sonido.
									</p>
								</li>
							</ul>

							<h2 className='letter'>L</h2>
							<ul className="listLetters">
								<li>
									<h3>Lasismo</h3>
									<p>
										Referirse a las organizaciones e instituciones que no están bajo el influjo de una organización religiosa.
									</p>
								</li>
								<li>
									<h3>Legajo</h3>
									<p>
										Conjunto de informaciones, documentos o papeles recopilados, referentes a una persona o un asunto
									</p>
								</li>
							</ul>

							<h2 className='letter'>M</h2>
							<ul className="listLetters">
								<li>
									<h3>Mandilon</h3>
									<p>
										Hombre de poco espíritu, cobarde, pusilánime.
									</p>
								</li>
								<li>
									<h3>Mohin</h3>
									<p>
										Gesto del rostro con el que se expresa desagrado o enfado, especialmente el que se hace con los labios.
									</p>
								</li>
							</ul>


							<h2 className='letter'>N</h2>
							<ul className="listLetters">
								<li>
									<h3>Neurastenia</h3>
									<p>
										en psiquiatría, es un trastorno neurótico caracterizado por un cansancio inexplicable que aparece después de realizar un esfuerzo mental o físico.
									</p>
								</li>
							</ul>


							<h2 className='letter'>P</h2>
							<ul className="listLetters">
								<li>
									<h3>Picada</h3>
									<p>
										Exprecion que se refiere a que alguien lo apuñalaron
									</p>
								</li>
							</ul>

							<h2 className='letter'>R</h2>
							<ul className="listLetters">
								<li>
									<h3>Reselo</h3>
									<p>
										Sospecha o falta de confianza hacia una persona por suponer que oculta malas intenciones o hacia una cosa por suponer que conlleva algún peligro.
									</p>
								</li>
							</ul>

							<h2 className='letter'>T</h2>
							<ul className="listLetters">
								<li>
									<h3>Taciturno</h3>
									<p>
										Que es habitualmente callado o silencioso.
									</p>
								</li>
							</ul>

							<h2 className='letter'>V</h2>
							<ul className="listLetters">
								<li>
									<h3>Vanagloria</h3>
									<p>
										Presunción u orgullo del propio valer.
									</p>
								</li>
								<li>
									<h3>Vivificante</h3>
									<p>
										Que incluye vida o nace de ella.
									</p>
								</li>
							</ul>

							<h2 className='letter'>Z</h2>
							<ul className="listLetters">
								<li>
									<h3>Zaherido</h3>
									<p>
										Decir o hacer algo a alguien con lo que se sienta humillado o mortificado
									</p>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</Fragment>
	);
};

export default Dictionary;