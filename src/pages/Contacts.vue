<script>
import axios from 'axios';
export default {
    name: 'Contacts',
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            text: ''
        }
    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                text: this.text
            }
        }
    },
}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
               <h2>Contacts</h2> 
            </div>
            <div class="col-12 info">
                <div class="row content-info w-75">
                    <div class="col-6">
                        <h4><i class="fa-solid fa-desktop"></i> ONLINE</h4>
                        <div>
                            <h6>Website:</h6>
                            <a href="#">www.loremipsum.com</a>
                        </div>
                        <div>
                            <h6>Social:</h6>
                            <ul class="list-unstyled d-flex">
                                <li class="me-2">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </li>
                                <li class="me-2">
                                    <i class="fa-brands fa-square-twitter"></i>
                                </li>
                                <li class="me-2">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </li>
                                <li>
                                    <i class="fa-brands fa-square-pinterest"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6">

                    </div>
                </div>
            </div>
            <div class="col-6 contact-us mb-5">
                <h4 class="text-center text-white">Contact Us</h4>
                <form @submit.prevent="sendForm">
                    <div class="container d-flex justify-content-center">
                        <div class="row g-2 w-75 mt-3 mb-5">
                            <div class="col-6">
                                <input type="text" name="name" class="form-control" placeholder="First name" v-model="name">
                            </div>
                            <div class="col-6">
                                <input type="text" name="surname" class="form-control" placeholder="Last name" v-model="surname">
                            </div>
                            <div class="col-6">
                                <input type="email" name="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="col-6">
                                <input type="phone" name="phone" class="form-control" placeholder="Phone" v-model="phone">
                            </div>
                            <div class="col-12">
                                <textarea class="form-control" name="text" placeholder="Leave a text here"  style="height: 100px" v-model="text"></textarea>
                            </div>
                            <div class="col-12 text-center mt-2">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-image: url('https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.contact-us {
    background-color: rgba(0, 0, 0, 0.651);
    border-radius: 0.5rem;
}
</style>