
<template>
    <div class="progress-container">
        <div class="progress-track">
            <div
                class="progress-fill"
                :style="{
                    width: width + '%',
                    background: bgcolor
                }"
            ></div>
        </div>

        <label>{{ width }}% Complete</label>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",

    props: {
        width: {
            type: Number,
            default: 0
        },
        bgcolor: {
            type: String,
            default: "grey"
        }
    }
}
</script>

<style scoped>
.progress-container {
    position: sticky;
    z-index: 9999;
    top:0;
    display: flex;
    align-items: center;
    gap: 1px;
    width: 90%;
    margin: auto;
    background-color:skyblue;
    border-radius: 16px;
}

label{
    line-height: 0.8;
    width:fit-content;
    color:white;
    white-space: nowrap;
    padding-right:5px;
}
.progress-track {
    background: lightsteelblue;
    width: 100%;
    height: 20px;
    border-radius: 12px;
    overflow: hidden;
    padding:4px;
    margin:0;
}

.progress-fill {
    height: 100%;
    border-radius: 12px;
    transition: width 0.4s ease;
}
</style>
