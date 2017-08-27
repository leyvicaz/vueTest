Vue.component('app-icon',{
    template: '<span :class="cssClasses" aria-hidden="true"></span>',
    props: ['img'],
    computed: {
        cssClasses : function () {
            return 'glyphicon glyphicon-'+this.img;
        }
    }
})

Vue.component('app-task',{
    data : function () {
        return {
            editing : false,
            draft : ''
        };
    },
    template: '#task-template',
    props : ['task', 'index'],
    methods : {
        toggleStatus : function () {
            this.task.pending = !this.task.pending;
        },
        edit : function () {
            //FIX ME
            /*this.tasks.forEach(function (task) {
                task.editing = false
            })*/

            this.draft = this.task.description;
            this.editing = true;
        },
        update : function () {
            this.task.description = this.draft;
            this.editing = false;
        },
        discard : function () {
            this.editing = false;
        },
        destroy : function () {
            this.$emit('remove', this.index);
        },
    }
})
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
                editing: false
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
        },
        deleteTask : function (index) {
            this.tasks.splice(index,1);
        },
        deleteCompleteTasks : function () {
            this.tasks = this.tasks.filter(function (t) { return t.pending });
        }
    }
});