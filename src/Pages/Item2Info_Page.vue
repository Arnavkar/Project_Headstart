<template>
    <div> 
        <Item2
        ItemName = 'Item 2'
        CatName = 'Meat and Produce'
        Origin = 'Malaysia'/>
        <NavbarProfile/>
	</div>
</template>

<script>
    import Item2 from '../components/Item2.vue';
    import NavbarProfile from '../components/Navbar.vue';
    // import StarRating from 'vue-dynamic-star-rating';

	export default{
		name: 'Item1Info',
		components: {
            Item2,
            NavbarProfile,
		}
    }
</script> 
