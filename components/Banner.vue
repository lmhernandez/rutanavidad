<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="box-btn">
            <button class="ver_video"  @click="showModalHomeVideo()">
              Ver el video
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modalHomeVideo"
      title="Bootstrap-Vue"
      hide-footer
      hide-header
      ref="modalHomeVideo"
    >
      <div class="modal-content modalHomeVideo">
        <div class="modal-body">
          <div>
            <div class="close" @click="hidemodalHomeVideo()">
              X
            </div>
            <div id="etiqueton" class="endosoSesion">
              <iframe width="560" height="450" src="https://www.youtube.com/embed/om3WQWZZQUw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div class="row"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    showModalHomeVideo() {
      this.$refs.modalHomeVideo.show()
    },
    hidemodalHomeVideo() {
      this.$refs.modalHomeVideo.hide()
    },
  },
}
</script>
<style lang="scss">
  .modalHomeVideo{
    
    iframe{
      height: 315px;
      width: 100%;
    }
    .close{
      position: absolute;
      right: -4px;
      top: -10px;
      background: white;
      z-index: 999;
      opacity: 1;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2b3a41;
      cursor: pointer;
    }
  }
  .banner{
    background-image: url('./../static/img/home/banner-borrador.jpg');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
  }
  .ver_video{
    background: #efff00;
    height: 48px;
    width: 186px;
    color: #130429;
    font-size: 1.3rem;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    
  }

  @media (min-width: 992px){
    .modalHomeVideo{
      iframe{
        height: 450px;
        width: 700px;
      }
    }
    .modal-dialog {
      max-width: 760px !important;
      margin: 1.75rem auto;
    }
  }
</style>
