import { EventData } from "tns-core-modules/data/observable";
import * as navigationModule from "../../shared/navigation"

export function goHome(args:EventData)
{
   navigationModule.goBack();
}
