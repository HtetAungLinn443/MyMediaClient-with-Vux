<template>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
        <div class="container">
            <div class="d-flex justify-content-end my-3">
                <p class="btn btn-sm btn-danger " @click="home()" v-if="tokenStatus">Home</p>
                <p class="btn btn-sm btn-dark " @click="login()" v-if="!tokenStatus">Login</p>
                <p class="btn btn-sm btn-dark ms-2" @click="logout()" v-else-if="tokenStatus">Logout</p>
            </div>

            <div class="">
                <div class="d-flex justify-content-center align-items-center" style="height:80vh" v-if="!tokenStatus">
                    <div class="text-danger bg-light p-5 rounded shadow">
                        <h1 class="text-danger">You Don't Have Permission for that data.</h1>
                        <p class="text-center mt-3 text-danger">Please Login</p>
                    </div>
                </div>
                <div class="" v-else-if="tokenStatus">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row d-flex justify-content-between">
                                <div class="col-lg-3 col-md-3">
                                    <div class="section-tittle mb-30">
                                        <h3>Whats New</h3>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9">
                                    <div class="properties__button">
                                        <!--Nav Button  -->
                                        <nav>
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                                    href="#" role="tab" aria-controls="nav-home" aria-selected="true"
                                                    @click="searchCategory('')">All</a>
                                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                                    href="#" role="tab" aria-controls="nav-profile"
                                                    aria-selected="false" v-for="(category, index) in categoryLists"
                                                    :key="index" @click="searchCategory(category.title)">{{
                                                            category.title
                                                    }}</a>

                                            </div>
                                        </nav>
                                        <!--End Nav Button  -->
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class=" d-flex py-3 justify-content-end">
                                        <input type="text" name="" class="form-control w-25" v-model="searchKey"
                                            v-on:keyup.enter="search()">
                                        <i class="fa-solid fa-magnifying-glass mt-1 mx-3" @click="search()"
                                            style="font-size:25px"></i>
                                    </div>
                                    <!-- Nav Card -->
                                    <div class="tab-content" id="nav-tabContent">
                                        <!-- card one -->
                                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                            aria-labelledby="nav-home-tab">
                                            <div class="whats-news-caption">
                                                <div class="row">

                                                    <div class=" justify-content-center d-flex align-items-center "
                                                        style="height:70vh;" v-if="postLists.length == 0">
                                                        <h1 class="text-danger p-3 bg-light shadow rounded">There is no
                                                            data!
                                                        </h1>
                                                    </div>

                                                    <div class="col-lg-6 col-md-6" v-for="(post, index) in postLists"
                                                        :key="index" v-else-if="postLists.length != 0">
                                                        <div class="single-what-news mb-100 "
                                                            @click="newsDetails(post.post_id)" style="cursor:pointer;">
                                                            <div class="what-img ">
                                                                <img v-bind:src="post.image" style="height:400px;"
                                                                    alt="" />
                                                            </div>
                                                            <div class="what-cap">
                                                                <span class="color1">Night party</span>
                                                                <h4>
                                                                    <a href="details.html">{{ post.title }}</a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- End Nav Card -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow roted"></span></a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="details.html">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow right-arrow"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- End pagination  -->

</template>

<script src="../js/homePage.js"></script>
