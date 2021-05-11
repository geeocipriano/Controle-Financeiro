<template>
<v-app>
    <SideUserCard />
    <SideDashCard />
</v-app>

</template>
<script>
    import SideUserCard from '../components/side/SideUserCard'
    import SideDashCard from '../components/side/SideDashCard'
    export default {
        name: 'BaseSide',
        components: {
            SideUserCard,
            SideDashCard
        }
    }
</script>