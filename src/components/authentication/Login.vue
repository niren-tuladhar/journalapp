

<template>
    <div class="row">
        <div class="col-md-6">
            <h3 style="text-align: left; margin-bottom: 50px">Login</h3>
            <form @submit.prevent="onLogin">
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" required>
                </div>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-success">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    watch: {
        user(value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/')
            }
        }
    },
    methods: {
        onLogin() {
            this.$store.dispatch('loginUser', {email: this.email, password: this.password});
        }
    }
}
</script>