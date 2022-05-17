<template>
    <div class="searchField">
        <button 
            class="searchButton" 
            type="submit" 
            @click="$emit('clickEvent', inputValue)"
        >
            <svg class="search-svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8292 14.0045L11.1684 10.3438C12.0784 9.24958 12.6266 7.84447 12.6266 6.31348C12.6266 2.83221 9.79443 0 6.31332 0C2.83213 0 0 2.83221 0 6.31348C0 9.79451 2.83213 12.6265 6.31332 12.6265C7.84424 12.6265 9.24942 12.0784 10.3436 11.1684L14.0045 14.8292C14.1183 14.9431 14.2676 15 14.4168 15C14.566 15 14.7153 14.9431 14.8292 14.8292C15.057 14.6014 15.057 14.2322 14.8292 14.0045ZM1.16638 6.31348C1.16638 3.47536 3.47528 1.16638 6.31332 1.16638C9.15129 1.16638 11.4601 3.47536 11.4601 6.31348C11.4601 9.15137 9.15129 11.4601 6.31332 11.4601C3.47528 11.4601 1.16638 9.15137 1.16638 6.31348Z" fill="#D5444C"/>
            </svg>
        </button>
        <input 
            v-model="inputValue"
            class="inputSearch" 
            placeholder="найти" 
            type="search"
            @keyup.enter="$emit('enterEvent', inputValue)"
        >
    </div>
</template>

<script>
export default {
    name: 'Search',

    props: {
        value: {
            type: String,
            default: '',
        }
    },

    data() {
        return {
            inputValue: '',
        };
    },

    watch: {
        value: {
            handler(newValue) {
                this.inputValue = newValue;
            },
            immediate: true,
        }
    },

    methods: {
        clearInput() {
            this.inputValue = '';
        }
    },
}
</script>