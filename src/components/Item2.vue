<template> 
  <div id = 'phone'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <span class = "field-data">
        <div style="float: left" id='itemimg'></div>
        <h1> {{ItemName}}</h1>
        <a href="#" class="back">&#8249;</a>
        <!-- <button class = "item"> Back </button> -->
     </span> 
     <p>Category: {{CatName}}</p>
     <p>Place of Manufacture: {{Origin}}</p>
     <br>
     <hr style="height:2px;border-width:0;background-color:lightgray" >
     <p>Sorry! We don’t have additional info on this product just yet. You can still add this item to your cart but it would not count to your average score!</p>
     <p>We’re constantly working to add new items, help us along by sending us a request directly!</p>
     <button class = "item request"> Request information on this item </button>
     <button class = "item save"> Save item </button>
    </div>
</template>

<script>
  export default {
    name: 'Item1',
    props: {
     ItemName: String,
     CatName: String,
     Origin: String,
     Pros: String,
     Cons: String,
     Rating: String,
   }
 }
</script>

<style>
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
border: 1px solid;
}

#itemimg {
border-radius: 7px;
background: url(https://placekitten.com/g/74/76);
background-position: center center;
background-repeat: no-repeat;
background-size: 100% 100%;
width: 5em;
height: 5em;  
border-color: black;
}

.field-data {
  display: flex;
  text-align: justify;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.back {
  background-color: #f1f1f1;
  color: black;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.item {
background-color: #99D3B9;
border: 1px solid rgba(0, 0, 0, 0.8);
color: black;
text-align: center;
justify-content: center;
align-items: center;
transition-duration: 0.2s;
cursor: pointer;
position: absolute;
border-radius: 7px;
}
.item:hover {
background: grey;
color: white;
	}

.save{
top: 90%;
left: 50%;
margin-left: -25px;
}
.request{
    top: 50%;
    left: 50%;
    margin-left: -40%;
    width: 80%;
    margin-top: 20px;
}


</style>