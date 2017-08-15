<template>

    
    <div class="row">
        <div class="col-md-6">
            <h3 style="text-align: left; margin-bottom: 50px">Login and Sign up</h3>
            <form>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" required>
                </div>
                <div class="form-group" style="text-align: left">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
                </div>
                <button @click="dismissAlert" type="button" class="close">
                    <span aria-hidden="true">×</span>
                </button>
                <p>
                    <strong></strong>
                </p>
                <button type="button" @click="login" class="btn btn-primary">Login</button>
                <button type="button" @click="signUp" class="btn btn-success">Signup</button>
            </form>
        </div>
    </div>


</template>

<script>
export default{
    date(){
        return {
            email: "",
            password: "",
            
        }
    }
}
</script>