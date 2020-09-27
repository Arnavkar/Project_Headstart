<template>
<div class = "container">
    <portal to="header">
        <p class="text-h5 q-mt-md"> Add Item </p>
    </portal>
    <q-page>
    <div>
        <p class=" text-h4 q-pa-sm" style="padding-top:8vh; color:white;"> Thank you for working with us!</p>
        <q-form
        flat
        class="q-mt-sm q-pa-md absolute-bottom my-form"
        @submit="onSubmit">
            <div style="display:flex;">
                <div class="text-h6" style="flex-grow:5;"> 
                    <p> <q-icon 
                    name="mdi-barcode-scan" 
                    class ="icon" 
                    style="font-size:2em"/>
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
                    class ="icon"
                    style="font-size:2em"/>
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
                    class ="icon" 
                    style="font-size:2em"/>
                    Product name</p>
                    <q-input 
                    filled 
                    name="name"
                    v-model="name"
                    label="Product Name"
                    lazy-rules
                    :rules="[ val => val&&val.length > 0 || 'Please enter the product name']"/>
                </div>
                <div class="text-h6" style="width:25vw; margin-left:5px"> 
                    <p><q-icon name="money" 
                    class ="icon"
                    style="font-size:2em"/>
                    Price</p>
                    <q-input 
                    outlined 
                    name='price'
                    v-model="price"  
                    prefix="$"
                    :rules="[ val => val&&val.length > 0 || 'Please enter a price']"/>
                </div>
            </div>
            <div class = "text-h6">
                <p><q-icon 
                name="shopping" 
                class ="icon"
                style="font-size:2em"/>
                Category</p>
                <q-select
                filled
                clearable
                name="category"
                v-model="category"
                label="Category"
                :options = "categories"
                />
            </div>
            <div class = "q-pt-md">
                <p class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Place of manufacture
                </p>
                <div class = "select">
                    <q-option-group
                    name="location"
                    v-model="location"
                    :options="options1"
                    inline
                    color="green"/>
                </div>
            </div>
            <div class="q-pt-sm">
                <p class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Packaging
                </p>
                <div class= "select" >
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
                <p class="text-h6 q-pt-md"> 
                    <q-icon 
                    name="eco" 
                    clickable
                    class ="icon"
                    style="font-size:2em"/>
                    Ingredients
                </p>
                <div class = "select">
                    <q-option-group
                    name="ingredients"
                    v-model="ingredients"
                    :options="options3"
                    inline
                    color="green"
                    type="checkbox"/>
                </div>
            </div>
            <div>
                <p>
                    <q-input 
                    filled 
                    name="other"
                    v-model="other"
                    type="autogrow"
                    label="Other Information"/>
                </p>
            </div>
            <div style="display:flex; justify-content:center">
                <q-btn 
                rounded
                elevated
                class = "item q-mb-lg"
                icon="send"
                label="Submit" 
                type="submit"  />
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
        code:null,
        name: null,
        other: null,
        category: null,
        photo:null,
        price:null,
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
            value:"p1",
            },
            {
            label:"Biodegradable",
            value:"p2"
            },
            {
            label:"Made with Recyclable material",
            value:"p3"
            },
            {
            label:"Recyclable",
            value:"p4"
            },
        ],
        options3:[
            {
            label:"Organic",
            value:"i1"
            },
            {
            label:"Plant-based alternatives",
            value:"i2"
            },
            {
            label:"Cruelty Free",
            value:"i3"
            },
            {
            label:"Carbon-Certification",
            value:"i4"
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
        ]
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
                submitResult.push(
                value
            )
        }
        var x = submitResult[submitResult.length - 1]
        submitResult[submitResult.length - 1] = submitResult[4]
        submitResult[4] = x
        this.send(submitResult)
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
                range: 'Reception!A2:Z100',
                valueInputOption: "USER_ENTERED",
                resource: body
            }).then(() => {
                console.log('cells updated');
            });
        }, function(error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }
  }
}
</script>

<style scoped>

.q-page{
    background-image: url('../assets/Background.png');
}

.my-form{
    position:absolute;
    top:13vh;
    z-index:1000;
    background-color:white;
    border-radius: 30px 30px 0px 0px;
}

.background{
	height: auto;
	width: 100%;
	z-index: -100;
	opacity: 80%;
}

.icon{
    color:#41B883
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