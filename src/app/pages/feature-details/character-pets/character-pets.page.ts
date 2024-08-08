import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-character-pets',
    templateUrl: './character-pets.page.html',
    styleUrls: ['./character-pets.page.scss'],
})
export class CharacterPetsPage implements OnInit {

    constructor() { }
    items = {
        "name": "Owl Post",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/owl-post",
        "urlImage": "",
        "description": "Wizarding post was delivered using owls. Some wizards and witches preferred to use their own personal owls, but the Owl Post Office was also a large and reliable network for owl delivery that offered speedy and safe communication. Owls were responsible for delivery of packages, newspapers and Hogwarts even had their own Owlery for student use. Due to their intelligence, most owls would be able to find the intended recipient of post even if they were not at their address. Harry's snowy owl, Hedwig, was particularly intuitive, and would sometimes fly to Harry's friends to pick up birthday presents on her way back from delivering something.",
        "category": "creatures",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hedwig",
                    "Pigwidgeon",
                    "Errol"
                ]
            }
        ]
    }
    ngOnInit() {
    }

}
