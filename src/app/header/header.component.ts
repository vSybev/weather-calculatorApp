import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [MessageService]
})
export class HeaderComponent implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Apps',
                items: [
                    {
                        label: 'weather app',
                        icon: 'pi pi-refresh',
                        routerLink: '/weather'
                    },
                    {
                        label: 'Calculator',
                        icon: 'pi pi-times',
                        routerLink: '/calculator'
                    },
                    {
                        label: 'Currency converter',
                        icon: 'pi pi-times',
                        routerLink: '/currency'
                    }
                ]
            },
            {
                label: 'Games',
                items: [
                    {
                        label: 'Angular',
                        icon: 'pi pi-external-link',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Router',
                        icon: 'pi pi-upload',
                        routerLink: '/fileupload'
                    }
                ]
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}
