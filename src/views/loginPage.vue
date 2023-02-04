<template>
    <section class="whats-news-area pt-50 pb-20">
        <div class="container" style="height:90vh; ">
            <div class="d-flex justify-content-end my-3">
                <p class="btn btn-sm btn-danger " @click="home()">Home</p>
                <p class="btn btn-sm btn-dark " @click="login()" v-if="tokenStatus">Login</p>

            </div>
            <div class=" shadow col-6 offset-3 p-5 rounded ">
                <h2 class="text-center mb-3 text-danger">Login Page</h2>
                <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="userStatus">
                    The Crendential Do Not Match !
                </div>
                <div class="mb-2">
                    <label for="email" class="label-form ">Email</label>
                    <input type="email" v-model="userData.email" id="email" class="form-control"
                        placeholder="Ender Email">
                </div>
                <div class="mb-4">
                    <label for="password" class="label-form">Password</label>
                    <input type="password" v-model="userData.password" id="password" class="form-control"
                        placeholder="Ender Password">
                </div>

                <div class="">
                    <button class="btn btn-primary" @click="accountLogin()">Login</button>
                </div>

            </div>
        </div>
    </section>
</template>

<script src="../js/loginPage.js"></script>

