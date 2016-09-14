/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function($,ko){
    var model={
        nombre:ko.observable("fabio")
    };
    ko.applyBindings(model);
    $(document).ready(function(){
        $("#btn1").click(function(){
            model.nombre("wow");
        });
    });
}(jQuery,ko))