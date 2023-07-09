const galeria = document.getElementById('galeria')

const carousel = (direccion) => {
    const opciones ={
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9
    }
    const observer = new IntersectionObserver((entradas) => {

        const slidesVisibles = entradas.filter((entrada) =>{
            if(entrada.isIntersecting === true){
                return entradas
            }
        })

        if(direccion === 'atras'){

            const primerSlideVisible = slidesVisibles[0]
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible)

            if(indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
            })
            }

        }else if(direccion === 'adelante'){
            const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1]
            const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible)

            if(entradas.length - 1 > indexUltimoSlideVisible){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
            })
            }
            
        }

        const slide = galeria.querySelectorAll('.galeria__carousel-slide')

        slide.forEach((slide)=>{
            observer.unobserve(slide)
        })

    }, opciones)

    const slide = galeria.querySelectorAll('.galeria__carousel-slide')

    slide.forEach((slide)=>{
        observer.observe(slide)
    })


}

export default carousel