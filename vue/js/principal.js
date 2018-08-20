var app = new Vue({

    el : '#app',
    // data: {
    //     mensaje: 'Hola vuejs!!!! '
    // },

    data: {
        lista : [
            {nombre: 'Luis', promedio: '10', estado: true},
            {nombre: 'Raquel', promedio: '4', estado: false},
            {nombre: 'Ester', promedio: '6', estado: true}
        ],
    }
});