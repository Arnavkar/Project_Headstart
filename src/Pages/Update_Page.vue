<template>
<div>
    <portal to="header">
        <p class="text-h5 q-mt-md"> Update Information </p>
    </portal>
    <q-page>
    <div>
        <p class=" text-h4 q-pa-sm" style="padding-top:1vh; color:white;"> Tell us what we don't know!</p>
        <q-form
        flat
        class="q-mt-sm q-pa-md absolute-bottom my-form"
        @submit="onSubmit">
            <div style="display:flex;">
                <div class="text-h6" style="flex-grow:5;"> 
                    <p> <q-icon 
                    name="mdi-barcode-scan" 
                    class ="icon" />
                    Barcode Number</p>
                    <q-input 
                    filled 
                    name="code"
                    v-model="code"
                    label="Barcode Number"
                    lazy-rules
                    :rules="[ val => val&&val.length > 0 || 'Please enter a barcode number']"/>
                </div>
                <div class="text-h6" style="width:25vw; margin-left:5px"> 
                    <p><q-icon name="add_a_photo" 
                    class ="icon"/>
                    Photo</p>
                    <q-file 
                    outlined 
                    v-model="photo">
                        <template v-slot:append>
                            <q-icon name="attach_file" class="rotate-45" />
                        </template>
                    </q-file>
                </div>
            </div>
            <div style="display:flex;">
                <div class="text-h6" style="flex-grow:5;"> 
                    <p> <q-icon 
                    name="announcement" 
                    class ="icon" />
                    Product name</p>
                    <q-input 
                    filled 
                    name="name"
                    v-model="name"
                    label="Product Name"
                    lazy-rules
                    :rules="[ val => val&&val.length > 0 || 'Please enter the product name']"/>
                </div>
            </div>
            <div>
                <p class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    class = "icon"
                    clickable/>
                    Tell us what you know!
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
                class = "item q-mb-lg"
                icon="send"
                label="Submit" 
                type="submit" />
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
  }
}
</script>

<style scoped>
.q-page{
    background-image: url('../assets/Background.png');
    background-color:#41B883;
}

.my-form{
    position:absolute;
    top:20vh;
    z-index:1000;
    background-color:white;
    border-radius: 30px 30px 0px 0px;
}

.icon{
    color:#41B883;
    font-size:1.5em;
}

.select{
    display:flex;
    justify-content:space-between;
    font-size: 20px;
}

.item {
  width:30.5%;
  background-color:white;
  transition-duration: 0.2s;
  cursor: pointer;
  border-radius: 7px;
}
.item:hover {
  background: #26A69A;
  color: white;
}
</style>