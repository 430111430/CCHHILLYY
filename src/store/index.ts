
import Vue from 'vue';
import Vuex from 'vuex';
import portraits from './modules/portraits';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portraits
    }
})