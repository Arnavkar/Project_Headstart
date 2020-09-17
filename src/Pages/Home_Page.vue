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
                navigation
                padding
                height="200px"
                class="bg-white shadow-1 rounded-borders"
                >
                <q-carousel-slide :name="1" class="column no-wrap flex-center">
                    <q-icon name="style" color="primary" size="56px" />
                    <div class="q-mt-md text-center">
                    {{ slide1 }}
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column no-wrap flex-center">
                    <q-icon name="live_tv" color="primary" size="56px" />
                    <div class="q-mt-md text-center">
                    {{ slide2 }}
                    </div>
                </q-carousel-slide>
                
                <q-carousel-slide :name="3" class="column no-wrap flex-center">
                    <q-icon name="layers" color="primary" size="56px" />
                    <div class="q-mt-md text-center">
                    {{ slide3 }}
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="4" class="column no-wrap flex-center">
                    <q-icon name="terrain" color="primary" size="56px" />
                    <div class="q-mt-md text-center">
                    {{ lorem }}
                    </div>
                </q-carousel-slide>
                </q-carousel>
            </q-dialog>
        </div>
        <div> 
	</div>
    </q-page>
    </div>
</template>

<script>
import Homepage from '../components/Homepage.vue';

export default {
    data () {
        return {
            carousel: true,
            slide: 1, 
            slide1: "START SHOPPING",
            slide2: "START SCANNING",
            slide3: "VIEW SUSTAINABILITY RATING",
            lorem: "INSERT INFO HERE FOR EACH SLIDE AS REQUIRED"
        }
    },
    components: {
        Homepage,
    }
}

</script>
<style>

</style>