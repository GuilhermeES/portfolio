<script lang="ts">
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination  } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/bundle';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination ],
      };
    }
  };
</script>

<template>
    <section class="projetos" id="projetos">
        <div class="container">
            <div class="projetos__top">
                <div class="projetos__text">
                    <h2>Projetos</h2>
                    <p> 
                        Confira <strong>principais projetos</strong> desenvolvidos por mim. <br>
                    </p>
                </div>
                <div class="projetos__all">
                    <NuxtLink  to="/projetos">
                        Ver mais
                        <img src="/img/arrow-interno.svg" alt="Ver todos">
                    </NuxtLink >
                </div>
            </div>
        </div>
        <div class="projetos__items">
            <img src="/img/gui_projetos.svg" alt="Guilherme" class="projetos__gui-img">
            <swiper
                :breakpoints="{600:{ slidesPerView:1}, 900:{ slidesPerView:2}, 1200:{ slidesPerView:2, }, 1600:{ slidesPerView:3, }  }"
                :space-between="50"
                :pagination="{clickable:true}"
                :modules="modules"
                
            >
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/mentormap.png" alt="Mentormap" class="projetos__img">
                         
                        </div>
                        <h3>  Mentormap </h3>
                        <div class="">Primeiro projeto sendo desenvolvido com Laravel :) </div>
                        <a href="#" target="_blank" class="projetos__link" style="text-decoration: none;">
                            Em desenvolvimento
                            
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/universal.png" alt="Trium" class="projetos__img">
                         
                        </div>
                        <h3>  Universal Music Store | Blog </h3>
                        <a href="https://blog.umusicstore.com/" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/trium_2.png" alt="Trium" class="projetos__img">
                           
                        </div>
                        <h3> Trium Capital | XP Investimentos </h3>
                        <div class="designer"> Designer por : <a href="https://somocollab.com/" target="_blank"> Somo Collab </a> </div>
                        <a href="https://triumcapital.com.br" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/goodstorage.png" alt="Trium" class="projetos__img">
                           
                        </div>
                        <h3> GoodStorage - 10 anos </h3>
                        <div class="designer"> Designer por : <a href="https://somocollab.com/" target="_blank"> Somo Collab </a> </div>
                        <a href="https://goodstorage.com.br/10-anos" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/montebravo.png" alt="Trium" class="projetos__img">
                           
                        </div>
                        <h3> Montebravo Experience </h3>
                        <div class="designer"> Designer por : <a href="https://somocollab.com/" target="_blank"> Somo Collab </a> </div>
                        <a href="https://mbexperience.com.br/" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/expands.png" alt="Trium" class="projetos__img">
                            
                        </div>
                        <h3>  Expand Brands </h3>
                        <div class="designer"> Designer por : <a href="https://somocollab.com/" target="_blank"> Somo Collab </a> </div>
                        <a href="https://expandbrands.com.br/" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="projetos__info">
                        <div class="projetos__header">
                            <img src="/img/kuster.png" alt="Trium" class="projetos__img">
                          
                        </div>
                        <h3>  Juliano Kuster Imóveis </h3>
                        <a href="https://julianokusterimoveis.com.br/" target="_blank" class="projetos__link">
                            Acessar
                            <img src="/img/arrow.png" alt="">
                        </a>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>