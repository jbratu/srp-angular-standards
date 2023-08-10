import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class  CommonService {
  constructor(private messageService: MessageService) {
    
  }

  /**
   * This function will show toast message
   * @param severity string success|info|warn|error
   * @param errorMessage string
   */
  showToastMessage(severity: string, errorMessage: string): void {
    this.messageService.add({severity: severity, detail: errorMessage})
  }

  setSessionStorageItem(key: string, data: string): void {
    sessionStorage.setItem(key, data);
  }

  getSessionStorageItem(key: string) {
    return sessionStorage.getItem(key);
  }

  removeSessionStorageItem(key: string) {
    sessionStorage.removeItem(key)
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}