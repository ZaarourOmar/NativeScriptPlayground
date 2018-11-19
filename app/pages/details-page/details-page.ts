import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { DetailsVM } from "./details-page-viewmodel";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
   
    let page = <Page>args.object;
    //page.bindingContext = new DetailsVM();
    console.log(page.navigationContext.param1);
    console.log(page.navigationContext.param2);
}
