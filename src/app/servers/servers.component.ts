import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = "No server created.";
  checkStr = "";
  serverCreated = false;
  // re = new RegExp("-?\\d+");

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); 
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    return this.serverCreateStatus = "Server " + this.checkStr + " created successfully!";

  }

  /**
   * Will provide string typed into server name text field
   * @param $event 
   */
  onUpdateServerName($event: any) {
    let str =  this.checkStr = $event.target.value;

    return this.disableOrEnableServerBtn(str);

  }

  /**
   * Enable or Disable add button string checked
   * contain any numbers. 
   * @param str Boolean
   */
  disableOrEnableServerBtn(str: string) {

    if (this.checkStrForNumbers(str)) {
      return this.allowNewServer = false;

    } else if(!this.checkStrForNumbers(str)) {
      return this.allowNewServer = true;

    }

  }

  /**
   * Check if string contain any numbers
   * and return true or false
   * 
   * @param str boolean
   */
  checkStrForNumbers(str: string) {
    var re = new RegExp("-?\\d+");

    return re.test(str);
  }

}
