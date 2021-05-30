<template>
    <div class="main-layout-page">
        <div class="wrapper">
            <TheSidebar/>
            <div class="content">
                <router-view class="content-field"/>
            </div>
        </div>
    </div>
</template>
<script>
import TheSidebar from '../components/TheSidebar.vue'
export default {
    name: 'MainLayout',
    components: { TheSidebar },
    props: {
        msg: String
    },
    computed: {}
}
</script>
<style scoped lang="scss">
.wrapper {
    display: flex;
    .content {
        width: 100%;
    }

}
</style>
