var app = new Vue({
    el: '#app', 
    data: {
        author: 'Кунєва Катерина', 
        group: 'ІА-301', 
        color: '', 
        size: ''
    }, 
    methods: {
        ChangeParam: function(){
            this.color = color
            this.size = size
        }
    }
})