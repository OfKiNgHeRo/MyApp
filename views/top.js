define(["views/start"],function(start){
    var ui = {
        cols:[
            {view: "menu", autoConfig: true,
            data: [
                {id: 1, value: "Translate", submenu: ["English", "French", "German"]},
                {id: 2, value: "Post"},
                {id: 3, value: "Info"}
            ]},
            {$subview:true}
        ]
    };
    return {
        $ui:ui,
         $oninit:function(view, $scope){
             console.log($scope)
         }
    };
});