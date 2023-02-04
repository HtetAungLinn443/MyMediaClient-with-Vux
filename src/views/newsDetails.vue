<template>
    <div>
        <main>
            <!-- About US Start -->
            <div class="about-area">
                <div class="container">
                    <!-- login and home btn -->
                    <!-- <div class="d-flex justify-content-end my-3">
                        <p class="btn btn-sm btn-danger me-3" @click="home()">Home</p>
                        <p class="btn btn-sm btn-dark " @click="login()">Login</p>
                    </div> -->
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">

                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="posts.image" alt="">
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3>{{ posts.title }}</h3>
                                </div>
                                <div class="about-prea">
                                    <p class="about-pera1 mb-25">{{ posts.description }}</p>

                                </div>
                                <div class="social-share pt-30">
                                    <div class="section-tittle">
                                        <p>
                                            <i class="fa-solid fa-eye me-2"></i>
                                            <span>{{ viewCount }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- From -->
                            <div class="row">
                                <div class="col-lg-8">
                                    <form class="form-contact contact_form mb-80" action="contact_process.php"
                                        method="post" id="contactForm" novalidate="novalidate">

                                        <div class="form-group mt-3">
                                            <button type="submit" class="button button-contactForm boxed-btn"
                                                @click="back()">Back</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- About US End -->
        </main>
    </div>
</template>

<script src="../js/newsDetails.js"></script>


