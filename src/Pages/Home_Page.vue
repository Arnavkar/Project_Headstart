<template>
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
                {{ lorem }}
                </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" class="column no-wrap flex-center">
                <q-icon name="live_tv" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
                </div>
            </q-carousel-slide>
            
            <q-carousel-slide :name="3" class="column no-wrap flex-center">
                <q-icon name="layers" color="primary" size="56px" />
                <div class="q-mt-md text-center">
                {{ lorem }}
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
        <p>Home Page</p>
    </q-page>
</template>

<script>

export default {
    data () {
        return {
            carousel: true,
            slide: 1, 
            lorem: "INSERT INFO HERE FOR EACH SLIDE AS REQUIRED"
        }
    }
}

</script>
<style>

</style>