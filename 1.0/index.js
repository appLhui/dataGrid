/**
 * @fileoverview 
 * @author 墨斐<mofei.lh@alibaba-inc.com>
 * @module dataGrid
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class DataGrid
     * @constructor
     * @extends Base
     */
    function DataGrid(comConfig) {
        var self = this;
        //调用父类构造函数
        DataGrid.superclass.constructor.call(self, comConfig);
    }
    S.extend(DataGrid, Base, /** @lends DataGrid.prototype*/{

    }, {ATTRS : /** @lends DataGrid*/{

    }});
    return DataGrid;
}, {requires:['node', 'base']});



