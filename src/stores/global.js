import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        openContactForm: false
    }),
    actions: {
        toggleContactForm (isOpen) {
            this.$state.openContactForm = isOpen
            if(isOpen) document.body.classList.add('overflow-hidden');
            else document.body.classList.remove('overflow-hidden');
        }
    },
    getters: {
        isFormOpen: (state) => state.openContactForm
    },
})
