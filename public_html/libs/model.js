/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function($,ko){
    var model={
        nombre:ko.observable("fabio"),
        id:ko.observable("0"),
        datos: ko.observable([]),
        check:function(data){
            this.id(data.id);
        }
        
        
    };
    ko.applyBindings(model);
    $(document).ready(function(){
        $("#btn1").click(function(){
            model.nombre("wow");
        });
        $("#btn2").click(function(){
            $.ajax({
                url:"data.json",
                dataType: 'json',          
                
            }).done(function(data){
                model.datos(data.data);
            });
        });
    });
}(jQuery,ko))