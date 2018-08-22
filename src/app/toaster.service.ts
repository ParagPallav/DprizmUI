import { Injectable } from "@angular/core";

declare var toaster: any;
@Injectable({
  providedIn: "root"
})
export class ToasterService {
  constructor() {}
  Success(title: string, meassage?: string) {
    toaster.success(title, meassage);
  }
}
