import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'loginPage',
    data() {
        return {
            userData: {
                email: '',
                password: '',
            },
            tokenStatus: false,
            userStatus: false,
        };

    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },
    methods: {
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
        accountLogin() {
            axios.post('http://127.0.0.1:8000/api/user/login', this.userData).then((response) => {
                    if (response.data.token == null) {
                        this.userStatus = true;
                        console.log('there is no user');
                    } else {
                        this.userStatus = false;
                        this.$store.dispatch("setToken", response.data.token);
                        this.$store.dispatch('setUserData', response.data.user);
                        this.home();
                        console.log('store success ...');
                    }
                })
                .catch((error) => console.log(error));

        },


    }
}