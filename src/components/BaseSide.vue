<template>
<v-app>
    <SideUserCard />
    <SideDashCard />
</v-app>

</template>
<script>
    import SideUserCard from '../components/SideUserCard'
    import SideDashCard from '../components/SideDashCard'
    export default {
        name: 'BaseSide',
        components: {
            SideUserCard,
            SideDashCard
        }
    }
</script>