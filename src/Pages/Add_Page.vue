<template>
<div>
    <portal to="header">
        <p class="text-h5 q-mt-md"> Add Item </p>
    </portal>
    <q-page>
    <img src="../assets/Background.png" class = "background"/>
    <div>
        <p class="text-darktext text-h5 q-pa-sm q-pt-xl"> Thank you for working with us!</p>
        <q-form
        flat
        class="q-mt-sm q-pa-md absolute-bottom my-form"
        @submit="onSubmit"
        @reset="onReset">
            <div style="display:flex; justify-content:center;">
                <div class="text-h6" style="flex-grow:5;"> 
                    <q-icon name="announcement" 
                    class ="icon"
                    style="font-size:2em"/>
                    Product Name 
                    <q-input 
                    filled 
                    name="name"
                    v-model="name"
                    label="Product Name"
                    lazy-rules
                    :rules="[ val => val&&val.length > 0 || 'Please type a product name']"/>
                </div>
                <div class="text-h6" style="flex-grow:1; margin-left:5px"> 
                    <q-icon name="add_a_photo" 
                    class ="icon"
                    style="font-size:2em"/>
                    Photo
                    <q-file 
                    outlined 
                    name="photo"
                    v-model="photo">
                        <template v-slot:append>
                            <q-icon 
                            name="attach_file"
                            class="rotate-45" />
                        </template>
                    </q-file>
                </div>
            </div>
            <div class = "text-h6">
                <q-icon 
                name="information" 
                class ="icon"
                style="font-size:2em"/>
                Category 
                <q-select
                filled
                clearable
                name="category"
                v-model="category"
                label="Category"
                :options = "categories"
                />
            </div>
            <div class="q-pt-sm">
                <span class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Place of manufacture
                </span>
                <div style="display:flex; justify-content:center;">
                    <q-option-group
                    name="location"
                    v-model="location"
                    :options="options1"
                    inline
                    color="green"/>
                </div>
            </div>
            <div class="q-pt-sm">
                <span class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Packaging
                </span>
                <div>
                    <q-option-group
                    name="packaging"
                    v-model="packaging"
                    :options="options2"
                    inline
                    color="green"
                    type="checkbox"/>
                </div>
            </div>
            <div class="q-pt-sm">
                <span class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Ingredients
                </span>
                <span>
                    <q-option-group
                    name="ingredients"
                    v-model="ingredients"
                    :options="options3"
                    inline
                    color="green"
                    type="checkbox"/>
                </span>
            </div>
            <div>
                <p>
                    <q-input 
                    filled 
                    v-model="other"
                    type="autogrow"
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
//import { bus } from '../main'

export default {
  data () {
    return {
        name: null,
        category: null,
        other: null,
        photo:null,
        location:'m1',
        packaging:[],
        ingredients:[],
        options1:[
            {
            label:"Local",
            value:'m1',
            },
            {
            label:"In Asia",
            value:'m2'
            },
            {
            label:"Outside of Asia",
            value:'m3'
            },
        ],
        options2:[
            {
            label:"Sustainably Sourced",
            value:"Sustainably Sourced",
            falseValue:true
            },
            {
            label:"Biodegradable",
            value:"Biodegradable"
            },
            {
            label:"Made with Recyclable material",
            value:"Made with Recyclable material"
            },
            {
            label:"Recyclable",
            value:"Recyclable"
            },
        ],
        options3:[
            {
            label:"Organic",
            value:"Organic"
            },
            {
            label:"Plant-based alternatives",
            value:"Plant-based alternatives"
            },
            {
            label:"Cruelty Free",
            value:"Cruelty Free"
            },
            {
            label:"Carbon-Certification",
            value:"Carbon-Certification"
            },
        ],
        categories:[
            {
            label:"Skin Care & Hygiene",
            value:"Skin Care & Hygiene"
            },
            {
            label:"Food & Beverage",
            value:"Food & Beverage"
            },
            {
            label:"Cleaning Products",
            value:"Cleaning Products"
            },
        ],
        submitResult:[]
    }
},

methods: {
    onSubmit (evt) {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
        
        const formData = new FormData(evt.target)
        const submitResult =[]
        const names=[]
        for (const [ name ,value ] of formData.entries()) {
                names.push(name)
                submitResult.push({
                value
            })
        }
        this.submitResult = submitResult
        localStorage.setItem('form',JSON.stringify(this.submitResult))
        var form = JSON.parse(JSON.stringify(this.submitResult)) //cannot retrieve submitresult directly
        var payload =[]
        for (var i=0;i<form.length;i++){
                var val = Object.values(form[i]).toString()
                payload.push(val)
            }
        this.send(payload)
    },

    send(payload) {
        console.log("received")
        this.$gapi.getGapiClient().then((gapi) => {
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            
            function updateSigninStatus(isSignedIn) {
                console.log(isSignedIn);
                return isSignedIn
            }

            var values = [payload];
            var body = {
                values: values
            };
            gapi.client.sheets.spreadsheets.values.append({
                spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
                range: 'test!A2:H9',
                valueInputOption: "USER_ENTERED",
                resource: body
            }).then((response) => {
                var result = response.result;
                console.log(`${result.updatedCells} cells updated.`);
            });
        }, function(error) {
            console.log(JSON.stringify(error, null, 2));
        });
    },

    onReset () {
        this.name = null,
        this.other = null,
        this.location="m1",
        this.packaging=[],
        this.ingredients=[]
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
    z-index:-100;
    position:absolute;
    top:-17%;
    left:-20%;
    width:150%;
}

.icon{
    color:#41B883
}



</style>