<template>
    <v-container>
        <div>Test component {{message}}</div>
    </v-container>
</template>
<script>
    export default {
        name: 'TestComponent',
        data() {
            return {
                message: 'message'
            }
        }
    }
</script>
