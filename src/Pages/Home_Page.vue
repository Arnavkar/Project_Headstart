<template>
    <div>
    <q-page>
        <Homepage
    />
        <div class="q-pa-md">
            <q-dialog v-model="carousel">
                <q-carousel
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                fullscreen
                animated
                v-model="slide"
                control-color="primary"
                navigation-icon="radio_button_unchecked"
                navigation-active-icon="mdi-record"
                navigation
                padding
                class="bg-white shadow-1 rounded-borders"
                >

                <template v-slot:control>
                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    >
                    <q-btn
                    push 
                    rounded 
                    dense 
                    label="Got it" 
                    color="positive" 
                    text-color="dark"
                    class="btn-fixed-width"
                    v-on:click="firstTime()"
                    v-close-popup
                    />
                    </q-carousel-control>
                </template>



                <q-carousel-slide :name="1" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide1.png" />
                    <div class="q-mt-lg text-center text-h5">
                    {{ slide1 }}
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide2.png" />
                    <div class="q-mt-lg text-center text-h5">
                    {{ slide2 }}
                    </div>
                </q-carousel-slide>
                
                <q-carousel-slide :name="4" class="column no-wrap flex-center">
                    <img class="rounded-borders col-6 slides" src="../assets/Slide4.png" />
                    <div class="q-mt-lg text-center text-h5">
                    {{ slide4 }}
                    </div>
					<!-- <q-btn 
					v-close-popup
					flat
                    rounded
                    text-color="dark"
                    class="btn-fixed-width q-pa-xs bg-primary"
                    label="Got it"
                    size="20px"
					dense/> -->
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
    </q-page>
    </div>
</template>

<script>
import Homepage from '../components/Homedisplay.vue';



export default {
    data () {
        return {
            carousel: JSON.parse(localStorage.getItem("firstTime")).firstTime,
            slide: 1, 
            slide1: "Start shopping",
            slide2: "Start scanning",
            slide3: "View sustainability rating",
            slide4: "Watch your plant grow",
        }
    },
    components: {
        Homepage,
    },
    methods:{
        firstTime(){
            var firstTime = {firstTime:false}
            localStorage.setItem("firstTime",JSON.stringify(firstTime))
        }
    }
}

</script>
<style>

.q-carousel{
    min-width:90vw;
    min-height: 90vh;
}

.buttonstyle{
    width: 40vw;
    position:relative;
    right: 5vw;
    bottom: 5vw;
}
.btn-fixed-width{
    /* position: absolute;
    left: 20vw; */
    min-width: 20vw;
}

</style>