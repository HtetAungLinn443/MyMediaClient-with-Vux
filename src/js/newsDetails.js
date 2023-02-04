import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'newsDetails',
    data() {
        return {
            postId: 0,
            posts: {},
            viewCount: 0,
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
        loadPost(id) {
            let post = {
                postId: id,
            };
            axios.post('http://127.0.0.1:8000/api/details', post).then((response) => {
                if (response.data.post.image != null) {
                    response.data.post.image = "http://127.0.0.1:8000/postImage/" + response.data.post.image;
                } else {
                    response.data.post.image = "http://127.0.0.1:8000/defaultImage/default_image.png"
                }

                this.posts = response.data.post
            }).catch((error) => console.log(error));
        },
        back() {
            this.$router.push({
                name: 'homePage',
            })
        },
        login() {
            this.$router.push({
                name: 'loginPage'
            })
        },
        home() {
            this.$router.push({
                name: 'home'
            })
        },
    },

    mounted() {

        let data = {
            'user_id': this.storageUserData.id,
            'post_id': this.$route.params.newsId,
        }
        axios.post('http://127.0.0.1:8000/api/post/actionLog', data).then((response) => {
                this.viewCount = response.data.post.length;

            })
            .catch((error) => console.log(error));
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);
    }
}