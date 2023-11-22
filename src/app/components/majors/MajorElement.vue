<script setup lang="ts">

defineProps({
    title: {
        type: String,
        required:true
    }
});

</script>

<template>
    <div class="major-container">
        <h1>{{ title }}</h1>
        <div class="major-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.major-container {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    gap: 3rem;
    padding: 6rem 2rem;
    background-color: white;
}

.major-container > h1 {
    font-size: 1.3rem;
    color: black;
    font-style: normal;
    font-weight: 700;
    margin: 0;
}

.major-content {
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 768px) {
    .major-container {
        gap: 5rem;
    }
    .major-content {

        flex-direction: row;
        flex-wrap: wrap;
    }

    .major-container > h1 {

        font-size: 1.5rem;
    }
}

@media screen and (min-width: 1024px) {
    .major-container > h1 {

        font-size: 1.6rem;
    }
    .major-content {

        gap: 3.5rem;
    }
}

@media screen and (min-width: 2560px) {
    .major-container > h1 {

        font-size: 2.5rem;
    }
    .major-content {

        gap: 5rem;
    }
}
</style>