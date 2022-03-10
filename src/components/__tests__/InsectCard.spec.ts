import { describe, test, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { mount } from "@vue/test-utils";
import InsectCard from "../Cards/Insect.vue";

describe("Insect Card", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })
  
  test("Le prop showItemCollection set à true affiche l'icône pour ajouter l'insecte à sa collection", () => {
    const wrapper = mount(InsectCard, {
      props: {
        id: 1,
        name: 'Agrias',
        image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/insectes/Agrias.png',
        showItemCollection: true,
      }
    });
    expect(wrapper.find('.insect-leaf').isVisible()).toBe(true);
  });
  test("Le prop showItemCollection set à false n'affiche pas l'icône pour ajouter l'insecte à sa collection", () => {
    const wrapper = mount(InsectCard, {
      props: {
        id: 1,
        name: 'Agrias',
        image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/insectes/Agrias.png',
        showItemCollection: false,
      }
    });
    expect(wrapper.find('.insect-leaf').exists()).toBe(false);
  });
});
