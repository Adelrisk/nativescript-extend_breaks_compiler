import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import * as webViewInterfaceModule from 'nativescript-webview-interface';

export class Common extends Observable {
  public message: string;

  public oWebViewInterface: webViewInterfaceModule.WebViewInterface;
  constructor() {
    super();
    this.message = Utils.SUCCESS_MSG();

    /**
     * This code ensures that the tree-shaking of the dependencies doesn't optimize away the critical code.
     */
    this.oWebViewInterface = new webViewInterfaceModule.WebViewInterface(null, '~/www/index.html');
  }

  public greet() {
    return "Hello, NS";
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}
