

<template>

    <div class="row">
        <div class="col-md-6">
            <h3 style="text-align: left; margin-bottom: 50px">Sign Up</h3>
            <form @submit.prevent="onSignup">
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" required>
                </div>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
                </div>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <!-- <input type="password" class="form-control" id="confirmPassword" v-model="confirmpassword" placeholder="Password" :rules="[comparePassword]"> -->
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-success">Signup</button>
            </form>
        </div>
    </div>

</template>
    

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? "Passwords do not match" : "";
        }
    },
    methods: {
        onSignup() {
            
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password});
        }
    }
}
</script>

<style>

</style>