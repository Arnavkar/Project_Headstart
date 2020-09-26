<template>
<div>
    <portal to="header">
        <p class="text-h5 q-mt-md"> Product Request </p>
    </portal>
    <q-page>
    <img src="../assets/Background.png" class = "background"/>
    <div>
        <p class="text-darktext text-h5 q-pa-sm q-pt-xl"> Tell us more</p>
        <q-form
        flat
        class="q-mt-sm q-pa-md absolute-bottom my-form"
        @submit="onSubmit"
        @reset="onReset">
            <div>
                <p class="text-h6"> 
                    <q-icon name="announcement" 
                    class ="text-secondary"
                    style="font-size:2em"/>
                    Product Name 
                </p>
                <p>
                    <q-input 
                    filled 
                    v-model="name"
                    label="Product Name"
                    lazy-rules
                    :rules="[ val => val&&val.length > 0 || 'Please type a product name']"/>
                </p>
            </div>
            <div>
                <p class="text-h6"> 
                    <q-icon name="add_a_photo" 
                    class ="text-secondary"
                    style="font-size:2em"/>
                    Attach a product photo
                </p>
                <p>
                <q-file outlined v-model="input">
                    <template v-slot:append>
                        <q-icon 
                        name="attach_file"
                        class="rotate-45" />
                    </template>
                </q-file>
                </p>
            </div>
            <div>
                <p class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="text-secondary"
                    style="font-size:2em"/>
                    Tell us what you know!
                </p>
                <p>
                    <q-option-group
                    v-model="group"
                    :options="options"
                    inline
                    color="green"
                    type="checkbox"/>
                </p>
                <p>
                    <q-input 
                    filled 
                    v-model="other"
                    type="textarea"
                    label="Other Information"/>
                </p>
            </div>
            <div style="display:flex; justify-content:center">
                <q-btn 
                rounded
                icon="send"
                label="Submit" 
                type="submit" 
                color="secondary" />
            </div>
        </q-form>
    </div>
    </q-page>
</div>
</template>

<script>
export default {
  data () {
    return {
        name: null,
        other: null,
        input:null,
        group:[ ],
        options:[
            {
            label:"Recyclable Packaging",
            value:'op1'
            },
            {
            label:"Made Locally",
            value:'op2'
            },
            {
            label:"Reduced Emission",
            value:'op3'
            },
            {
            label:"Responsibly Sourced",
            value:'op4'
            },
        ],
    }
  },

  methods: {
    onSubmit () {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
    },
    onReset () {
      this.name = null
    }
  }
}
</script>

<style scoped>
.my-form{
    height:89%;
    z-index:1000;
    background-color:white;
    border-radius: 30px 30px 0px 0px;
}

.background{
	width: 102%;
	z-index: -100;
	opacity: 80%;
}



</style>