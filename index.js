setTimeout(function(){
    $(".delay").css('display','initial')
}, 100)

var app = new Vue({
    el: '.app',
    data:{
        Tel:'Tel: +886 3-846-3987',
        Fax:'Fax:+886 3-856-3077',
        Email:'sales@tiaoyueh.com.tw',
        Declaration:'© 2019 Mountainview Technology Ltd., All Rights Reserved.'
    },
    watch:{
    },
    methods:{
    },
})