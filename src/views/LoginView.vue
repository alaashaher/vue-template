<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from 'vue-use-form'
import * as yup from 'yup'
import Cookies from 'js-cookie';

import { useRouter } from 'vue-router'

const router = useRouter()

// import { useYupResolver } from '@vue-use-form/yup'

// const schema = yup.object().shape({
//     username: yup.string().required(),
//     age: yup.number().required().positive().integer(),
//     email: yup.string().email(),
// })

const {
    register,
    formState: { errors },
    handleSubmit,
} = useForm({
    // resolver: useYupResolver(schema),
    mode: 'all',
    defaultValues: {
        name: '',
        password: '',
        // remember: true
    }
})
const onSubmit = createSubmitHandler((data) => {
    console.log(data)
    Cookies.set('currentUser', JSON.stringify(data), {
        sameSite: 'strict'
        // expires: 90
        // expires: 5 / (24 * 60 * 60) // 5 secondas
    });
    router.push('/')
})

const onError = createErrorHandler((errors) => {
    console.log(errors)
})
</script>

<template>
    <div class="login-page">
        <div class="custom-container">
            <div class="page-wrapper">
                <div class="img-wrap">
                    <img src="../assets/images/signin.svg" alt="signin" />
                </div>
                <div class="form-top-level-wrapper">
                    <form class="login-form" @submit.prevent="handleSubmit(onSubmit, onError)()">
                        <div class="form-header">
                            <p>Log in</p>
                        </div>

                        <div class="form-body">
                            <input :="register('name', { required: true })" type="text">
                            <input :="register('password', { required: true })" type="password">
                            <button type="submit" class="submit-btn">
                                log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>