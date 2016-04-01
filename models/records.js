/**
 * Created by OFKINGHERO on 3/28/2016.
 */
defined([],function(){
        var collection = webix.DataCollection({
            url:"data.php"
        });
        return{
            data:collection
        };
    }
);