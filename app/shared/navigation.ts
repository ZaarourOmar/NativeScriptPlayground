import * as frameModule from "ui/frame";


export function goToPage(pagePath: string) {
    frameModule.topmost().navigate(pagePath);
}


export function goBack() {
    if (frameModule.topmost().canGoBack())
        frameModule.topmost().goBack();
}
