<template>
  <div class="main">
    <Logo />
    <Banner />

    <section class="ruta">
      <div class="cabecera-de-seccion">
        <p class="cabecera-de-seccion__titulo">
          Escoge la <strong class="strong-verde">mejor ruta</strong> para ti
        </p>
        <p class="cabecera-de-seccion__subtitulo">
          Dale clic a las zonas de tu interés en este mapa de #MiraNavidad y descubrelos puntos iluminados
        </p>
      </div>
      <div class="body-de-seccion">
        <div class="d-flex  justify-content-center">
          <img width="80%" src="./../static/img/home/mapa.PNG" alt="">
        </div>
      </div>
    </section>

    <section class="planes">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cabecera-de-seccion">
              <p class="cabecera-de-seccion__titulo">
                Descubre los <strong class="strong-amarillo">planes para ti</strong>
              </p>
              <p class="cabecera-de-seccion__subtitulo">
                Selecciona la fecha de tu interés y agenda el evento en tu Calendario. #MiraNavidad.
              </p>
            </div>
            <div class="body-de-seccion">
              <div class="container">
                <div class="row">
                  <div class="col-12  col-lg-4" >
                    <div class="eventos-nuevos" >
                      <p class="eventos-nuevos--titulo">Eventos nuevos</p>
                      <div class="eventos-nuevos__item" v-for="(item, index) in eventosNuevos" :key="index">
                        <p class="item-titulo">{{item.titulo}}</p>
                        <p> {{item.lugar}}</p>
                        <p> {{item.fecha}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12  col-lg-4" >
                    <div class="d-flex  justify-content-center">
                      <vc-calendar :attributes='attributes' :from-date="new Date(2020, 11, 4)" @dayclick=dayClicked></vc-calendar>
                    </div>
                    
                  </div>

                  <div class="col-12  col-lg-4">
                    <div class="eventos-del-dia" v-for="(item, index) in diaSeleccionado" :key="index">
                      <p class="eventos-del-dia--cabecera">Diciembre {{ item.dia}}</p>
                      <div class="eventos-del-dia--body">
                        <div class="evento-item"  v-for="(item, index) in item.eventosDia" :key="index">
                          <p class="titulo">{{item.titulo}}</p>
                          <p class="descripcion">{{item.descripcion}}</p>
                        </div>                        
                      </div>
                    </div>  
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <section class="galeria">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cabecera-de-seccion">
              <p class="cabecera-de-seccion__titulo">
                Tu foto hará inolvidable esta <strong class="strong-azul">Navidad</strong>
              </p>
              <p class="cabecera-de-seccion__subtitulo">
                Si ya te tomaste la foto de #MiraNavidad, encuéntrala y compártela con quien más quieres.
                Síguenos en Facebook, Twitter e Instagram y conoce los puntos claves donde estará nuestro fotógrafo.
              </p>
            </div>
            <div class="body-de-seccion">
              <div class="container">
                <div class="row">
                  <div class="col-12  col-lg-4"  >
                    <vc-calendar :attributes='atribFotos' :from-date="new Date(2020, 11, 1)" @dayclick=metodoAtribFotos></vc-calendar>
                  </div>
                  <div class="col-12  col-lg-8">
                    <div class="fotos-seccion">
                      <div class="fotos-dia" v-for="(item, index) in fotoSeleccionado" :key="index">
                        <div class="fotos-grupo" v-for="(item, index) in item.fotosDia" :key="index">
                          <img class="img-principal" v-bind:src=item.url height="100">
                          <div class="box-imagenes-secundarias">
                            <img v-for="(item, index) in item.fotos" :key="index" v-bind:src=item.url height="100" class="image">
                          </div>                  
                        </div>
                      </div>
                    </div>                           
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="redes">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cabecera-de-seccion">
              <p class="cabecera-de-seccion__titulo">
                Esto es lo que están diciendo de <strong class="strong-rojo">#MiraNavidad</strong>
              </p>
              <p class="cabecera-de-seccion__subtitulo">
                Hay momentos especiales que merecen ser recordados para siempre, coméntalos en Twitter e Instagram con el hashtag #MiraNavidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer-rutaNavidad">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>© Todos los derechos reservados 2020</p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
<style lang="scss">
  .fotos-seccion{
    overflow-x: scroll;
    .fotos-dia{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    .fotos-grupo{
      width: 100%;
      .img-principal{
        width: 100%;
        height: auto;
      }
      .box-imagenes-secundarias{
        display: flex;
        img{
          width: 50%;
          height: auto;
        }
      }
    }
  }
  .fotos-seccion::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }
  .fotos-seccion {
  scrollbar-width: thin;
  }
  .fotos-seccion::-webkit-scrollbar-track {
      background: rgb(228, 215, 223);
  }
  .fotos-seccion::-webkit-scrollbar-thumb {
      background-color: #1b001f ;
      border-radius: 6px;
  }
  .eventos-nuevos{
    &--titulo{
      padding-bottom: 12px;
      font-size: 22px;
    }
    &__item{
      padding-bottom: 24px;
    }
    .item-titulo{
      border-radius: 4px 0 4px 0;
      background: #AFB200;
      font-size: 20px;
      line-height: 24px;
      height: 26px;
      padding-left: 12px;      
    }
  }
  .eventos-del-dia{
    background: white;
    height: 100%;
    color: #1a001e;
    border-radius: 8px 8px 0 0;
    &--cabecera{
      background: #AFB200;
      border-radius: 8px 8px 0 0;
      padding: 10px 0;
      color: white;
      padding-left: 12px;
      font-size: 20px;
    }
    &--body{
      background: white;
      border-radius: 8px 8px 0 0;
      position: relative;
      top: -6px;
      padding-left: 12px;
      padding-top: 24px;
      max-height: 340px;
      overflow-y: scroll;
      .evento-item{
        padding-bottom: 18px;
      }
      .titulo{
        color: #1a001e;
        font-size: 16px;
        font-weight: 700;
      }
      
    }
    .eventos-del-dia--body::-webkit-scrollbar {
      width: 6px;
      height: 8px;
    }
    .eventos-del-dia--body {
      scrollbar-width: thin;
    }
    .eventos-del-dia--body::-webkit-scrollbar-track {
        background: rgb(228, 215, 223);
    }
    .eventos-del-dia--body::-webkit-scrollbar-thumb {
        background-color: #AFB200 ;
        border-radius: 6px;
    }
  }
  .planes, .galeria{
    .vc-header{
      display: none;
    }
  }
  .vc-arrows-container{
     display: none;
  }
  .planes{
    background-image: url('./../static/img/home/f5.png');
    background-size: cover;
    background-position: center;
    position: relative;
    &:before{
      content: "";
      position: absolute;
      background: #38003fc7;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .redes{
    background-image: url('./../static/img/home/f3.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &:before{
      content: "";
      position: absolute;
      background: #38003fc7;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .footer-rutaNavidad{
    padding: 24px 0;
    background: #1a001e;
    p{
      text-align: center;
      font-size: 18px;
    }
  }
  @media (min-width: 992px) {
    .fotos-seccion{
      .fotos-dia{
        width: 100%;
        flex-wrap: nowrap;
      }
      .fotos-grupo{
        min-width: 400px;
        .img-principal{
        }
        .box-imagenes-secundarias{
          img{
          }
        }
      }
    }
  }
</style>
<script>
import Logo from './../components/Logo'
import Banner from './../components/Banner'
export default {
  data() {
    const date = new Date();
    return {
      eventosNuevos: [
        {
          "titulo": "Feria navidad",
          "lugar": "Parque central de miraflores",
          "fecha": "Lunes 21 diciembre 2020"
        },
        {
          "titulo": "Feria navidad 2",
          "lugar": "Parque central de miraflores 2",
          "fecha": "Lunes 22 diciembre 2020"
        },
        {
          "titulo": "Feria navidad 3",
          "lugar": "Parque central de miraflores",
          "fecha": "Lunes 24 diciembre 2020"
        }
      ],
      diaSeleccionado: [],
      fotoSeleccionado: [],
      eventosMes: [
        {
          "dia" : "2",
          "eventosDia": [
            {
              "titulo": "evento uno del dia 2",
              "descripcion": "descripcion uno del día 2"
            },
            {
              "titulo": "evento dos del dia 2",
              "descripcion": "descripcion dos del día 2"
            },
            {
              "titulo": "evento tres del dia 2",
              "descripcion": "descripcion uno del día 2"
            },
            {
              "titulo": "evento cuatro del dia 2",
              "descripcion": "descripcion dos del día 2"
            },
            {
              "titulo": "evento cinco del dia 2",
              "descripcion": "descripcion dos del día 2"
            },
            {
              "titulo": "evento seis del dia 2",
              "descripcion": "descripcion dos del día 2"
            }
          ]
        },
        {
          "dia" : "8",
          "eventosDia": [
            {
              "titulo": "evento uno del dia 8",
              "descripcion": "descripcion uno del día 8"
            },
            {
              "titulo": "evento dos del dia 8",
              "descripcion": "descripcion dos del día 8"
            }
          ]
        },
      ],
      fotosMes: [
        {
          "dia" : "12",
          "fotosDia": [
            {
              "titulo": "Fotos del dia 12",
              "url": require('./../static/img/galeria/12-g1-f1.jpg'),
              "fotos": [
                {
                  "url": require('./../static/img/galeria/12-g1-f1.jpg'),
                },
                {
                  "url": require('./../static/img/galeria/12-g1-f1.jpg'),
                }
              ]
            },
            {
              "titulo": "Fotos del dia 12",
              "url": require('./../static/img/galeria/12-g2-f1.jpg'),
              "fotos": [
                {
                  "url": require('./../static/img/galeria/12-g2-f1.jpg'),
                },
                {
                  "url": require('./../static/img/galeria/12-g2-f1.jpg'),
                }
              ]
            }
          ]
        },
        {
          "dia" : "13",
          "fotosDia": [
            {
              "titulo": "Fotos del dia 12",
              "url": require('./../static/img/galeria/13-g1-f1.jpg'),
              "fotos": [
                {
                  "url": require('./../static/img/galeria/12-g1-f1.jpg'),
                },
                {
                  "url": require('./../static/img/galeria/12-g1-f1.jpg'),
                }
              ]
            },
            {
              "titulo": "Fotos del dia 12",
              "url": require('./../static/img/galeria/13-g2-f1.jpg'),
              "fotos": [
                {
                  "url": require('./../static/img/galeria/12-g2-f1.jpg'),
                },
                {
                  "url": require('./../static/img/galeria/12-g2-f1.jpg'),
                }
              ]
            }
          ]
        }
      ],
      selectedDate : null,
      attributes: [
        {
          highlight: 'yellow',
          contentClass: 'italic',
          fillMode: 'solid',
          dates: new Date(2020,11,2),
          excludeDates: null,
          order: 0
        },
        {
          highlight: 'yellow',
          contentClass: 'italic',
          fillMode: 'light',
          dates: new Date(2020, 11, 8),
          excludeDates: null,
          order: 0
        }
      ],
      atribFotos: [
        {
          highlight: 'blue',
          contentClass: 'italic',
          fillMode: 'solid',
          dates: new Date(2020,11,12),
          excludeDates: null,
          order: 0
        },
        {
          highlight: 'blue',
          contentClass: 'italic',
          fillMode: 'solid',
          dates: new Date(2020, 11, 13),
          excludeDates: null,
          order: 0
        }
      ]
    }
  },
  methods: {
    metodoAtribFotos(day) {
      console.log(day)
      this.fotoSeleccionado = this.fotosMes.filter((fotos)=>{
        console.log()
        if (fotos.dia == day.label) {
          console.log("fotosS DIA",fotos.fotosDia)
          return fotos.fotosDia
        }
      })
    },
    dayClicked(day) {
      console.log(day)
      this.diaSeleccionado = this.eventosMes.filter((evento)=>{
        if (evento.dia == day.label) {
          console.log("EVENTOS DIA",evento.eventosDia)
          return evento.eventosDia
        }
      })
    }
  },
  components:{
    Logo, Banner
  },
  mounted() {
    AOS.init();
  },
}
</script>

<style>

</style>
