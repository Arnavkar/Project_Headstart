<template> 
  <div id = phone>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <div class = 'header'>
      <img src="https://placekitten.com/g/74/76" id="kitty">
      <p class = "field-data" id = 'profilename'>
       <span> {{Name}} </span>
       <span class="material-icons" id = "mainedit"> edit </span>
     </p>  
    </div>
    <h2 id = 'tag'> Personal Information </h2>
    <div>
      <div class = 'deets' id = 'email'> 
        <h3>Email Address</h3>
        <hr>
        <p class = "field-data">
          <span>{{email}}</span>
          <span class="material-icons"> edit </span>
        </p>
      </div>
      <div class = 'deets' id = 'mobile'>
        <h3> Phone Number </h3>
        <hr>
        <p class = "field-data">
          <span>{{mobile}}</span>
          <span class="material-icons"> edit </span>
        </p>
      </div>
      <div class = 'deets' id = 'dob'> 
        <h3> Date of Birth (DD/MM/YY) </h3>
        <hr>
        <p class = "field-data">
          <span>{{dob}}</span>
          <span class="material-icons"> edit </span>
        </p>
      </div>
      <div class = 'deets' id = 'gen'>
        <h3> Gender </h3>
        <hr>
        <p class = "field-data">
          <span>{{gen}}</span>
          <span class="material-icons"> edit </span>
        </p>
      </div>
      <div class = 'deets' id = 'bank'>
        <h3> Bank Details </h3>
        <hr>
        <p class = "field-data">
          <span>{{bank}}</span>
          <span class="material-icons"> edit </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Content',
    props: {
     Name: String,
     email: String, 
     mobile: String, 
     dob: String, 
     gen: String, 
     bank: String, 
   }
 }
</script>

<style>

#mainedit{
  padding-top: 4px;
  font-size: 24px;
}

#phone{
  margin: 0px auto;
  width: 377px;
  height: 814px;
  padding: 1em;
  box-sizing:border-box;
  border-radius: 30px 30px 0px 0px;
  font-family:'Montserrat';
  background-color: white;
  overflow: hidden;
  position: relative;

}

.header{
  display:flex;
}

#profilename{
  margin-top:44px;
  font-size: 26px; 
  margin-left: 20px;
}

.header span:first-child{
  width:220px;
}

#kitty{
  margin-bottom: 2em;
  border-radius: 80%;
}

h2 {
  font-style: italic;
  font-size:19px;
  margin-bottom:0;
}

.deets{
  width:359px;
  height:10em;
  box-sizing: content-box;
  border-radius: 30px 30px 0px 0px;
  padding-left:1em;
  padding-top:1px;
  margin-left:-1em; 
  position: relative;
}

.field-data {
  display: flex;
}

.field-data span:first-child {
  flex: 1;
}

#email{
  background-color: rgb(230,250,230);
  top:1em;

}

#mobile{
  background-color: rgb(210,245,210);
  top:-2em;
}

#dob{
  background-color: rgb(190,240,190);
  top:-5em;
}

#gen{
  background-color: rgb(170,235,170);
  top:-8em;
}

#bank{
  background-color: rgb(150,230,150);
  top:-11em;
}

hr{
  width: 330px;
  margin-left:0px;
  margin-top:-1em;
  border-color:grey;
}
</style>

