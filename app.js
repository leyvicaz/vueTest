/**
 * Lección 13
 */
var vm = new Vue({
    el: '#app',
    data: {
        new_task : '',
        tasks: [
            {
                description: 'Aprender Vue.js',
                pending: true,
                editing: false
            },
            {
                description: 'Suscribirse a Styde.net',
                pending: true,
                editing: true
            },
            {
                description: 'Grabar lección de Vue',
                pending: false,
                editing: false
            }
        ]
    },
    methods : {
        createTask : function () {
            this.tasks.push({
                description: this.new_task,
                editing : false,
                pending: true,
            });

            this.new_task = '';
        }
    }
});