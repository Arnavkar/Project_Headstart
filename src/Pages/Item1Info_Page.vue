<template>
    <div> 
        <Item1
        ItemName = 'Item 1'
        CatName = 'Food and Beverage'
        Origin = 'Singapore'
        Pros = '1) Local -> Less emissions from distrubution method' 
        Cons = '1) Packaging is not recyclable'/>
        <NavbarProfile/>
	</div>
</template>

<script>
    import Item1 from '../components/Item1.vue';
    import NavbarProfile from '../components/Navbar.vue';
    // import StarRating from 'vue-dynamic-star-rating';

	export default{
		name: 'Item1Info',
		components: {
            Item1,
            NavbarProfile,
		}
    }
</script> 
