<template>
    <div>
    <Homepage
    UserName = 'Jerry'/>
    <q-page padding>
        <div class="q-pa-md q-gutter-sm">
            <q-dialog v-model="carousel">
                <q-carousel
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                v-model="slide"
                control-color="primary"
                navigation-icon="radio_button_unchecked"
                navigation-active-icon="mdi-record"
                navigation
                padding
                class="bg-white shadow-1 rounded-borders slides"
                >
                <q-carousel-slide :name="1" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide1.png" />
                    <div class="q-mt-lg text-center text-h4">
                    {{ slide1 }}
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide2.png" />
                    <div class="q-mt-lg text-center text-h4">
                    {{ slide2 }}
                    </div>
                </q-carousel-slide>
                
                <q-carousel-slide :name="3" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide3.png" />
                    <div class="q-mt-lg text-center text-h4">
                    {{ slide3 }}
                    </div>
                </q-carousel-slide>

                <!-- <q-carousel-slide :name="2" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide4.png" />
                    <div class="q-mt-lg text-center text-h4">
                    {{ slide4 }}
                    </div>
                </q-carousel-slide> -->

                </q-carousel>
            </q-dialog>
        </div>
        <div> 
	</div>
    </q-page>
    </div>
</template>

<script>
import Homepage from '../components/Homedisplay.vue';

export default {
    data () {
        return {
            carousel: true,
            slide: 1, 
            slide1: "Start shopping",
            slide2: "Start scanning",
            slide3: "View sustainability rating",
            slide4: "Watch your plant grow",
        }
    },
    components: {
        Homepage,
    }
}

</script>
<style>

.slides{
    height: 100%;
    width: 100%;
    /* min-width: 60vw;
    min-height: 60vh; */
}

</style>