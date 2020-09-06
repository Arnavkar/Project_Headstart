<template>
    <q-page>
        <div class="q-pa-sm">
            <h2 class="text-secondary q-mt-md q-mb-sm">FAQ</h2>
            <p class="text-primary text-h7 q-mb-md"> We're here to answer your questions! </p>
        </div>

        <div class="list">
            <q-list class="rounded-borders text-secondary text-h5">
                <q-expansion-item
                    expand-separator
                    icon="help"
                    label="How do we rate items?"
                >
                    <q-card>
                    <q-card-section>
                    INSERT INFO HERE
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="signal_wifi_off"
                    label="INSERT QUESTION"
                >
                    <q-card>
                    <q-card-section>
                        INSERT INFO HERE
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    expand-separator
                    icon="drafts"
                    label="INSERT QUESTION"
                >
                    <q-card>
                    <q-card-section>
                        INSERT INFO HERE
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <!-- <q-expansion-item icon="assessment" label="Disabled" disable>
                    <q-card>
                    <q-card-section>
                        INSERT INFO HERE
                    </q-card-section>
                    </q-card>
                </q-expansion-item> -->
            </q-list>
        </div>
    </q-page>
</template>

<script>
export default {
    
}
</script>
<style scoped>

.list{
    width:100%;
}


</style>