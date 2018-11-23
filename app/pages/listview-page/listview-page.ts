import { EventData } from "tns-core-modules/data/observable";
import * as navigationModule from "../../shared/navigation"
import {Page} from "ui/page";
import {ListView,ItemEventData} from "ui/list-view";

export function pageNavigatingTo(args:EventData)
{
  var page = <Page> args.object;

  page.bindingContext={
   myTitles: [
      { title: "The Da Vinci Code" },
      { title: "Harry Potter and the Chamber of Secrets" },
      { title: "The Alchemist" },
      { title: "The Godfather" },
      { title: "Goodnight Moon" },
      { title: "The Hobbit" }
  ]
  };
}
export function goHome(args:EventData)
{
   navigationModule.goBack();
}

export function onListViewLoaded(args: EventData) {
   const listView = <ListView>args.object;
}

export function onItemTap(args: ItemEventData) {
   const index = args.index;
   console.log(`Second ListView item tap ${index}`);
}
