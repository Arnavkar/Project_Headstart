<template>
    <q-page>
        <div class="q-pa-sm q-ml-lg q-mr-lg">
            <h2 class="text-dark q-mt-sm q-mb-sm">FAQ</h2>
            <p class="text-dark text-subtitle2"> We're here to answer your questions! </p>
        </div>

        <div class="list q-pl-lg q-pr-lg">
            <q-list class="rounded-borders text-dark text-subtitle1">
                <q-expansion-item
                    group="all"
                    expand-separator
                    border-none
                    icon="mdi-leaf"
                    label="How is the rating derived?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section square class="text-body2 text-secondary">
                    We calculate the rating based on the number of criteria that a product fufills.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-information"
                    label="How is your information sourced?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary">
                        We source our information from reports made by independent organisations and from the information on the company's website.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-lock-question"
                    label="Why are there so many items that do not have a rating available?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary">
                        We are currently working on expanding our database to include more items. To speed up the process, you can submit a product request at the sidebar.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-exclamation-thick"
                    label="I noticed that some information is outdated. How do I amend submit a request to amend that?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary">
                        We know that companies can sometimes improve a product. If you noticed that the information shown on our app is no longer true, please submit a request to update information at the sidebar. We will work to update the information as soon as possible.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                
                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-sprout"
                    label="How do I make my plant grow faster?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary">
                        Your plant can grow faster when you make more product request and scan products that are more highly rated.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>
                
                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-cards-heart"
                    label="How do I save a product so that I can always know the rating and monitor any change in sustainability?"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary">
                        You can save an item when you tap the heart button that shows up after you scan a product. You can refer to your saved items by clicking the 'Saved' button on the navigation bar.
                    </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-expansion-item
                    group="all"
                    expand-separator
                    dense-toggle
                    icon="mdi-cellphone-information"
                    label="I would like to see more information reflected on this platform"
                    class="q-mb-md dropdown"
                >
                    <q-card class="info">
                    <q-card-section class="text-body2 text-secondary bg-transparent">
                        We are constantly working to include more factors like the toxicity of certain products and ethical practices. Do bear with us while we work on that.
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
    // data(){
    //     return{
    //         activeClass: 'activeclass',
    //     }
    // }
}
</script>
<style>
.list{
    width:100%;
}
.dropdown{
    /* background-color: #c3efdb4f; */
    border-radius: 15px;
    border: 0px solid #C3EFDB;
    box-shadow: 0 2px 4px 0 rgba(65, 184, 131, 0.4), 0 3px 10px 0 rgba(65, 184, 131, 0.19);
}
.info{
    /* border-top: 1px solid lightgray; */
    background-image: linear-gradient(white,#C3EFDB) !important;
    padding-left:1em !important;
    border-radius: 0 0 15px 15px !important;
}
.activeclass{
    background-color:black ;
    padding: 100px;
}
.q-separator--horizontal {
    display: block;
    height: 0px;
    width: 100%;
}
</style>