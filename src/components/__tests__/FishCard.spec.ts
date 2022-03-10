import { describe, test, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { mount } from "@vue/test-utils";
import FishCard from "../Cards/Fish.vue";

describe("Fish Card", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })
  
  test("Le prop showItemCollection set à true affiche l'icône pour ajouter le poisson à sa collection", () => {
    const wrapper = mount(FishCard, {
      props: {
        id: 1,
        name: 'Napoléon',
        image: 'https://newhorizonsinventory.com/images/fishes-500px/FishNaporeonfish.webp',
        showItemCollection: true,
      }
    });
    expect(wrapper.find('.fish-leaf').isVisible()).toBe(true);
  });
  test("Le prop showItemCollection set à false n'affiche pas l'icône pour ajouter le poisson à sa collection", () => {
    const wrapper = mount(FishCard, {
      props: {
        id: 1,
        name: 'Napoléon',
        image: 'https://newhorizonsinventory.com/images/fishes-500px/FishNaporeonfish.webp',
        showItemCollection: false,
      }
    });
    expect(wrapper.find('.fish-leaf').exists()).toBe(false);
  });
});
