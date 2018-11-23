import { EventData } from "tns-core-modules/data/observable";
import * as navigationModule from "../../shared/navigation"
export function goHome(args:EventData)
{
   navigationModule.goBack();
}

var view = require("ui/core/view");
var drawer;

exports.pageLoaded = function(args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");
};

exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
};