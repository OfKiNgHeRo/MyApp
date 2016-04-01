/**
 * Created by OFKINGHERO on 3/28/2016.
 */
defined(["models/records"],function(){
        var ui = {
            view :"datatable",autoConfig:true
        };
        return{
            $ui:ui,
            $oninit:function(){
                view.parse(records.data);
            }
        };
    }
);