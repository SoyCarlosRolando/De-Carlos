(async() => {

    const { value: mensaje1 } = await Swal.fire({
        title: 'Hola Rayda',
        text: 'Qué hiciste, es la pregunta, te lo he perdonado, pero no olvido. Hubo un momento en el que si me dieran la posibilidad de viajar en el tiempo e interrumpir lo que provocó eso que fumarás o que tomaras de esa manera que lo haces ahora, lo haría',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
    confirmButtonText: 'Siguiente',
    });
    if (mensaje1) {
        const { value: mensaje2 } = await Swal.fire({
                        text: 'He tratado de mantenerme ocupado, nunca te voy a olvidar, y la verdad que no se que hubiera hecho si hubieses venido.  Diría me sorprende, pero ya es común que estes acompañada',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
        });
        if (mensaje2) {
            const { value: mensaje3 } = await Swal.fire({
            
                text: 'Cada persona tiene como llevar las cosas, tú antes de conocerme el hacer lo que haces ahorita no era algo fuera de lo normal',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
            });
            if (mensaje3) {
              const { value: mensaje4 } = await Swal.fire({
            
                  text: 'No lo tomes a mal, pero te subestimas demasiado, eres una mujer maravillosa, muy hermosa y gentil, agradezco al destino por haberte conocido.',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
              });
                if (mensaje4) {
                const { value: mensaje5 } = await Swal.fire({
            
                    text: 'Gracias por haber llegado a mi vida, apoyarme en esos momentos, por las llamadas de todo el día, por haber venido. Mi plan era vivir tranquilo',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
                });
                    if (mensaje5) {
                      const { value: mensaje6 } = await Swal.fire({
            
                          text: 'Pero contigo lo quise todo, me abriste los ojos, pude sentir lo que es el amor por primera vez, pero también repetí lo que es la traición',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
                      });
                        if (mensaje6) {
                     const { value: mensaje7 } = await Swal.fire({
            
                         text: 'Se acabo, haz de nuevo tu vida, sé feliz, cumple tus sueños y metas, vuelve a enamorarte (sé que lo haras), que yo estaré viendote desde la distancia, siempre recordaré nuestra historia...',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Siguiente',
                     });
                            if (mensaje7) {
                                 const { value: mensaje6 } = await Swal.fire({
                                                 text: 'Y agrego esto, sin más',
                                     imageUrl: 'img/Imagen1.png',
            allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        StopKeydownPropagation: false,
            confirmButtonText: 'Aceptar',
                      });
                            }
                }        
                    }
            } 
            }
        }
    }
})()
