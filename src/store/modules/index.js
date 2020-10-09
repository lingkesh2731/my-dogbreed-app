export const namespaced = true;

export { default as actions } from '../../store/modules/actions';

export { default as mutations } from '../../store/modules/mutations';

export const state = {
    allBreeds: [],
    imageUrl: [],
    randomImageUrl: "",
}

export { dogActions } from '../../store/modules/action-types.const'
    