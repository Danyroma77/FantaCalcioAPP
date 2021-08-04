import { Component, OnInit } from '@angular/core';
import { MessageSiteService } from 'src/app/services/message-site.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'mdg-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  lastMessage$: any;
  userInfo: any;

  constructor(private messageService: MessageSiteService,
      private tokenService: TokenStorageService
    ) {

   }

  ngOnInit(): void {
    this.userInfo = this.tokenService.getUser();
    this.loadMessage();
  }

  loadMessage(): void {
      this.messageService.getMessageHome(this.userInfo.id).pipe()
          .subscribe(
                (data) =>  this.lastMessage$ = data,
                (error) => console.log('ERR ' + error.message.error)
                );

  }

}
