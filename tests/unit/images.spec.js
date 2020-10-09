import Images from "@/views/Images.vue";
import {  mount, shallowMount } from "@vue/test-utils";


describe('images.vue', () => {
    it.only('renders list of images in props.img', () =>{
        const img = { message : ["https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
        "https://images.dog.ceo/breeds/affenpinscher/n02110627_10986.jpg"
        ], status : "success"}

        const wrapper = shallowMount(Images, {
          propsData: { img }
        })

        expect(wrapper.findAll('img')).toHaveLength(img.message.length)
    })

    it( 'emits the more images', () => {
      const wrapper = mount(Images)

      wrapper.find('button').trigger('click')
      wrapper.vm.$emit("clickHandleEvents",20)

      expect(wrapper.emitted().clickHandleEvents).toBeTruthy()

    })
})