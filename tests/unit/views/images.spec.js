import Images from "../../../src/views/images.vue";
import { shallowMount,createLocalVue } from "@vue/test-utils";
import { imageUrl } from '../testing_data'

describe('images.vue', () => {
    let imageWrapper;
    beforeEach(() => {
        const localVue = createLocalVue();

        imageWrapper = shallowMount(Images, {
            localVue,
        });
    });
    afterEach(() => {
        imageWrapper.destroy();
    });

    it('is a local Vue instance', () => {
        expect(imageWrapper.isVueInstance).toBeTruthy();
    });

    it('renders list of images in props.img', () =>{

        imageWrapper.setProps({ imgUrl: imageUrl})
        expect(imageWrapper.vm.imgUrl).toHaveLength(imageUrl.length);
        //console.log("here")
        //console.log(imageWrapper.find('img'));
        // const selector = (imageWrapper.find('.images'))
        // expect(selector.exists()).toBe(true);
        // console.log(selector);
      //  expect(imageWrapper.find('img').exists()).toBe(true);
    })

    it('calls the moreImages method on the click event', () => {
        imageWrapper.vm.moreImages = jest.fn();
        imageWrapper.find('button').trigger('click');
        expect(imageWrapper.vm.moreImages).toBeCalled();
    })

    it( 'emits the more images', () => {

        imageWrapper.find('button').trigger('click')
        imageWrapper.vm.$emit("clickHandleEvents",20)
        expect(imageWrapper.emitted().clickHandleEvents).toBeTruthy()

    })
})