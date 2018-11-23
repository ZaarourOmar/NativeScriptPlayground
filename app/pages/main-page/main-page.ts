/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import * as navigationModule from "../../shared/navigation"

export function goToEmptyPage(args:EventData)
{
   navigationModule.goToPage("pages/empty-page/empty-page");
}
export function goToListPage(args:EventData)
{
    navigationModule.goToPage("pages/listview-page/listview-page");
}
export function goToDrawerPage(args:EventData)
{
    navigationModule.goToPage("pages/sidedrawer-page/sidedrawer-page");
}
