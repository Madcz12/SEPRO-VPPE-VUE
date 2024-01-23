import { reactive, readonly } from 'vue'

const stateDefault = {
    name: 'mi nombre'
}

const state = reactive(stateDefault);

const getters = []

const actions = [
    function saveProject(){
        return 'Hola desde la funcion'
    }
]


export default () => {
    return {
        state: readonly(state),
        ...getters,
        ...actions,
    }
}
