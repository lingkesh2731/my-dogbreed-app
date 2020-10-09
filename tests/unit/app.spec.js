import{ shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import app from '@/App.vue';

describe('In App component', () => {
    let appWrapper;
    const router = new VueRouter({ path: '/', name: 'Home'});

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);

        appWrapper = shallowMount(app, {
            localVue,
            router,
        });
    });
    afterEach(() => {
        appWrapper.destroy();
    });

    it('is a local Vue instance', () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    });

    it('renders the correct markup', () =>{
        expect(appWrapper.html()).toContain('<div id="app">');
    });
    
});