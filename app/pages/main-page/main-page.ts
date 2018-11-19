/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import { MainVM } from "./main-view-model";
import { DetailsVM } from "../details-page/details-page-viewmodel";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;
    
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new MainVM();
}


var view = require("ui/core/view");
var drawer;

export function pageLoaded (args:EventData)
{
    var page = args.object;
    drawer =  view.getViewById(page, "sideDrawer");
    
}


export function toggleDrawer(args:EventData)
{
    drawer.toggleDrawerState();
    console.log("test");
}
export function goToDetails(args:EventData)
{
    var button = <Button>args.object;
    console.log(button.text);

    var frameModule =require("ui/frame");

       // console.log("Navigating");
       var navigationOptions={
        moduleName:'pages/details-page/details-page',
        context:{param1: "value1",
                param2: "value2"
                },
                bindingContext: new DetailsVM()
    }
    
    frameModule.topmost().navigate(navigationOptions);
}
