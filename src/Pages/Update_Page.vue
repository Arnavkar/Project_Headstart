<template>
<div>
    <portal to="header">
        <p class="text-h5 q-mt-md"> Update Information </p>
    </portal>
    <q-page>
    <div>
        <p class=" text-h6 q-px-md" style="position: absolute;top:15vh; color:white;"> Tell us what we don't know!</p>
        <q-form
        flat
        class="q-pa-md absolute-bottom my-form"
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
                <p class="text-h6"> 
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
                class = "item q-mt-md"
                icon="send"
                label="Submit" 
                type="submit" 
                color="primary"/>
            </div>
        </q-form>
    </div>
    </q-page>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    computed:{
        ...mapGetters("info",{ userInfo: "info" }),
        ...mapActions('info',['updateItemInfoTally']),
	},
    data () {
        return {
            name: null,
            code: null,
            other: null,
            photo:null,
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

        submitResult.unshift(this.userInfo.email)
        this.send(submitResult)
        this.updateItemInfoTally()
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
                range: 'Update_Info!A2:Z100',
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
  border-radius: 20px;
}
.item:hover {
  background: #26A69A;
  color: white;
}
</style>