import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tem',
  templateUrl: './tem.page.html',
  styleUrls: ['./tem.page.scss'],
})
export class TemPage implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  
   data = [
    {
        "category": "character_pets",
        "description": "Her sister, Lily, may have been a witch but Petunia Dursley was a Muggle and staunchly anti-magic, more content to keep her home spick and span, and gossip about the neighbours. Despising anything with a hint of the wizarding world about it, she only very reluctantly took her nephew Harry Potter in when both of his parents were murdered. However, alongside her husband Vernon, she made sure Harry always felt unwelcome in their pristine home, while she spoiled her only son, Dudley, rotten.",
        "name": "Petunia Dursley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "CONNECTIONS",
                    "Muggles"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Secret knowledge of the magical world, including Dementors"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Spying on Privet Drive",
                    "Spoiling Dudley"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/petunia-dursley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1m8ZmHixRKo39BQ2nHqDG2/4d5b99f961a875b77e26ef1d4ebde322/petunia-dursley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Albus Severus Potter was the second son of Harry and Ginny. He attended Hogwarts for the first time with his cousin Rose Granger-Weasley but unlike Rose, Albus wasn't sorted into Gryffindor, much to his shock and fellow Hogwarts students. The Sorting Hat actually chose Slytherin where he joined Draco Malfoy's son, Scorpius. Unlike their dads, these boys formed a close friendship.",
        "name": "Albus Potter",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Potters Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Using a Time-Turner",
                    "Keeping his balance on top of a moving Hogwarts Express"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Hanging out with Scorpius"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/albus-potter",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6azXJOhRAJ9XtGtLmB74ex/558db1d06b3ff878e06ebf093da3ee33/2._Harry_Potter_and_the_Cursed_Child__photo_credit_Manuel_Harlan.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "An Auror for the Ministry of Magic, Kingsley Shacklebolt worked to prevent the return of Lord Voldemort. When it seemed that the Ministry might be in denial over the truth of his return, Shacklebolt started to work undercover, feeding information to a group of wizards determined to defeat Voldemort once and for all - the Order of the Phoenix.",
        "name": "Kingsley Shacklebolt",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Auror",
                    "Duelling",
                    "Leadership/Minister for Magic",
                    "Defence Against the Dark Arts",
                    "The Imperius Curse"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Catching Dark wizards"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/kingsley-shacklebolt",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/58gkjv9a8vemVcsZtG9lzY/2a6a80343126a14aa2987e0435c2ee62/kingsley-shacklebolt_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Alastor 'Mad-Eye' Moody was a famed Auror, well respected for his impressive skills in his field. So nicknamed due to his detachable eye that gave him magical advantages, Moody often employed the uses of Dark Detectors such as Sneakoscopes or Foe Glasses to give himself the upper hand.",
        "name": "Alastor 'Mad-Eye' Moody",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Auror",
                    "Duelling",
                    "Magical eye",
                    "Disillusionment Charm",
                    "Defence Against the Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Practising constant vigilance",
                    "Hunting Dark wizards"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/alastor-mad-eye-moody",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7i69Kt4D53SmlEspVmOVmV/055fc05219b45558c3cedb8b122af3c8/alastor-mad-eye-moody_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Delphini Diggory was a mysterious young woman, whose past was filled with mystery. When she first met Albus and Scorpius, she claimed to be Amos Diggory's niece and accompanied the boys as they travelled back in time in an attempt to change the course of time and save Cedric Diggory.",
        "name": "Delphi Diggory",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Cursed Child"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/delphi-diggory",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5eF27gOQ6oEprOj3iYVhKg/783bdac183290c4c8d4b000086b6215c/delphi-diggory_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Gamekeeper, Keeper of the Keys and Care of Magical Creatures teacher at Hogwarts. Rubeus Hagrid may have been intimidating physically - he was of course, half-man, half-giant - but he was also soft-hearted, especially when it came to looking after the beasts of Hogwarts. From monstrous spiders to feathered Hippogriffs, majestic unicorns and Blast-Ended-Skrewts, there was nothing too creepy or crawly that didn't have a place in Hagrid’s heart.  Hagrid was the one to deliver the news to Harry that he had a place at Hogwarts with the immortal line, ‘Harry - yer a wizard’, and became something of a father figure to him ever since.",
        "name": "Rubeus Hagrid",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Hogwarts Staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Giant strength",
                    "Care of Magical Creatures",
                    "Keeper of Keys and Grounds at Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Walks in the Forbidden Forest",
                    "Looking after Fang",
                    "Baking",
                    "Hatching Norbert",
                    "Befriending Aragog"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rubeus-hagrid",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7JMTFJSRKaH6eJmfkz5cSW/d5580ee226f0ebe91120232eb8829913/rubeus-hagrid_4_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Nicolas Flamel was a French wizard, an inventor and alchemist who famously created the Philosopher's Stone - a source of eternal life. Along with his wife Perenelle, Nicolas consumed the Elixir of Life for many centuries. Due to his age, Flamel witnessed many events of wizarding history, including the rise and fall of Gellert Grindelwald and Lord Voldemort. He was even named on Dumbledore's Chocolate Frog card.",
        "name": "Nicolas Flamel",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Fantastic Beasts: The Crimes of Grindelwald"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Alchemy",
                    "Creating the Philosopher's Stone"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Spending his long life with his wife"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/nicolas-flamel",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7K1pwzf5UvLlnDPROeFO1Z/a636e238e8c64ae06816b4d4f367439d/nicolas-flamel_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Cornelius Fudge was the Minister for Magic for six years, and was in office for several key wizarding events, such as the escape of Sirius Black from Azkaban, Harry Potter's disciplinary hearing, and perhaps most notably, the ascent of Lord Voldemort.",
        "name": "Cornelius Fudge",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Minister for Magic"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Denying the return of Voldemort",
                    "Wearing lime-green bowler hats"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/cornelius-fudge",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5Ikt4xA1KLZB0VZMmdEwK9/468cb8617c27e70e6b88ac3a364d1dae/cornelius-fudge_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Rose Granger-Weasley was the daughter of Ron Weasley and Hermione Granger. She attended Hogwarts for the first time in the same year as Albus Potter and Scorpius Malfoy. Unlike the boys, Rose was sorted into Gryffindor, following in the footsteps of her parents. As well as being as academically gifted as her mother, Rose was a keen Quidditch player and was chosen as Chaser for Gryffindor.",
        "name": "Rose Granger-Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Studying",
                    "Avoiding Scorpius"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rose-granger-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2Gq54jp8sMcz8H68sphKAe/dfe77a776b0e37af28be942e64623f20/fact-file-HPCC-new-york-scorpius-rose-and-albus.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A founder of Hogwarts School of Witchcraft and Wizardry, Rowena was known for her brilliant mind and love of learning. Her house encouraged these qualities in its students, and as a result, boasted some of the cleverest and highest achieving witches and wizards at the school. However, Rowena's history was mired in tragedy. Rowena's daughter Helena was murdered after stealing her mother's enchanted diadem and running away. Both Helena and her murderer, The Bloody Baron, haunted Hogwarts, representing Ravenclaw and Slytherin house respectively.",
        "name": "Rowena Ravenclaw",
        "sidenav": [
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts founder"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Magical invention of her diadem",
                    "Founding of Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Seeking out wise students"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rowena-ravenclaw",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1O2LdPUz8m6Jh14UZrUIeC/399eb5f15969110341f2815f524bca3d/rowena-ravenclaw_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Hufflepuff's ghost, The Fat Friar was a jolly spirit dressed in clergyman's clothes. One of the only Hogwarts residents with any sympathy for the poltergeist, Peeves, The Fat Friar embodied the Hufflepuff qualities of kindness, acceptance and generosity of spirit.",
        "name": "The Fat Friar",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/the-fat-friar",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/77vZuZtJETEX682ljzJyh5/5e300bd75c7f75cb28ce1b625c3bc548/the-fat-friar_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The Trolley Witch worked on the Hogwarts Express, offering a variety of snacks to pupils on their journey to and from their school. With a trolley full of Cauldron Cakes, Pumpkin Pasties, Liquorice Wands and Chocolate Frogs, the Trolley Witch was always a welcome appearance on the train. In Harry Potter and the Cursed Child, however, Albus Potter and Scorpius Malfoy would discover another side to her when they tried to escape the train.",
        "name": "Trolley Witch",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Self Transfiguration"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Selling sweets on the Hogwarts Express without fail"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/trolley-witch",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6Xvbn3QllZNUFQM2b3y54d/1cdf79583234a15caddea7526d71f838/trolley-witch_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Scorpius Malfoy was the only child of Draco and Astoria Malfoy. His father's reputation for being affiliated with the Dark arts preceded Scorpius and he was immediately rejected by Hogwarts students - apart from Harry Potter's son, Albus. Both boys were sorted into Slytherin and became firm friends, supporting each other through their time as outcasts at school, and embarking on an incredible adventure. Unlike his dad, Scorpius was a cheerful bookworm who loved magical sweets.",
        "name": "Scorpius Malfoy",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Malfoys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Charms"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Reading",
                    "Hanging out with Albus",
                    "Making up songs about sweets"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/scorpius-malfoy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6w0vFistjA0jKoMQNFrYt0/8f2e1b4baa2ad449fb621358d7115f50/scorpius-malfoy_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Hannah Abbott",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling Healing skills"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Spending time with Neville Longbottom"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/hannah-abbott-fact-file",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "Most likely Voldemort’s closest companion, Nagini was a Maledictus who had once been a human woman but due to this blood curse was now permanently a snake – losing all sense of humanity. As a snake, she was always at Voldemort’s side and one of the only people or creatures that he showed any affection towards. One reason why he kept her close was due to the fact she housed a piece of Voldemort’s soul – making her a Horcrux.",
        "name": "Nagini",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Lord Voldemort"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Carrying the protection of a Horcrux Incredible strength Able to pose as humans (such as Bathilda Bagshot)"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Serving her master Lord Voldemort"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/nagini",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4IjD3SUu3aqMqIVHrX6UQy/415f27231ecfdce00fb1e154e5233844/fact-file-hero-nagini-snake-fb-f2.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A celebrity author who had written many popular books before he joined Hogwarts as a Defence Against the Dark Arts teacher in Harry's second year, Lockhart was popular for his good looks, charm and fantastic stories. However, in the classroom it soon became clear that his experience and knowledge didn't quite match up to his extravagant claims.",
        "name": "Gilderoy Lockhart",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Order of the Phoenix"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Memory Charms",
                    "Winning WItch Weekly's Most-Charming Smile Award"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being famous",
                    "Signing autographs",
                    "Taking credit for others' work"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/gilderoy-lockhart",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4gjWUugbaVRrR1EzEByqPL/7ca7180fff3439b4a30ccf5637fdc13f/gilderoy-lockhart_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "George, alongside his twin brother Fred, could often be found winding up his older brother Percy, playing pranks on unsuspecting students and imagining new ways to entertain his friends. The twins were also owners of the magical Marauder's Map, a tool that came in handy more than once as the boys traversed the school undetected.",
        "name": "George Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys",
                    "Quidditch player",
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Inventing and running a joke shop",
                    "Quidditch Beater",
                    "Befriending Peeves"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Making mischief",
                    "Annoying Percy",
                    "Pretending to be Fred"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/george-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5wNbSH5NGvinLg9WbWzAtQ/01806359c5b6ba482adf3e6b52ce4f67/george-weasley_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A goblin who worked for Gringotts, Griphook was a prickly character who, like many other goblins, distrusted witches and wizards. He was the goblin that showed Harry to his vault on his first trip to the wizarding bank and warned him exactly what would happen to thieves who tried to break in. In a twist of fate, he also helped Harry, Ron and Hermione break into Gringotts nearly seven years after Harry’s initial visit, in return for the Sword of Gryffindor.",
        "name": "Griphook",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Deathly Hallows",
                    "FAMILY CONNECTIONS/AFFILIATIONS",
                    "Gringotts"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Navigating Gringotts security"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Attempting to reclaim goblin-made artefacts (like the Sword of Gryffindor)"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/griphook-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/WsmPzBzbWt5QBkbyzVvpn/45d07b96a3b1431677c840b4bc1bcc5c/fact-file-hero-hp-f8-griphook-shell-cottage-trio.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A member of the Dumbledore family, Aberforth was the younger brother of Hogwarts Headmaster,Albus Dumbledore and the older brother of Ariana. Aberforth ran the Hogs Head Inn in Hogsmeade. Though more reserved that his older brother, he was instrumental in keeping Dumbledore’s Army going in Harry’s absence – supplying food from his pub to its members. Aberforth’s Patronus took the form of a goat.",
        "name": "Aberforth Dumbledore",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Order of the Phoenix"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling Conjuring a Patronus"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Looking after the Hog's Head pub"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/aberforth-dumbledore-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3MZHDxmsjPjiuizzUC2V0a/c7a234c6c42b2604acd9214e2c6cc2b5/fact-file-hero-aberforth-hp-f8.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Scabbers was Ron Weasley's pet rat. Passed down throughout the family, by the time he came to Ron, Scabbers was living up to his name with patchy fur and a distinct preference for sleeping. Although Scabbers was a loyal companion to Ron, the rat wasn't all that he seemed and was in fact hiding a terrible secret.",
        "name": "Scabbers",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Running away from Crookshanks"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Sleeping"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/scabbers",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7vpjgZmROPcE3BkT3RKJXq/9accae466af57c3a75d99e8dae851379/scabbers_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "One of the four founders of Hogwarts School of Witchcraft and Wizardry, Godric Gryffindor's house favoured students who were bold and brave. The wizard's legacy at Hogwarts was apparent in many ways, from his support of Muggle-born students attending the school to his portrait on the seventh floor, to the sword that appeared for any true Gryffindor in need of it. It was even rumoured to be Godric's own hat that was enchanted and used to sort incoming students. His home, the village that would come to be named Godric's Hollow, would be the home of several famous wizarding world characters, such as Bathilda Bagshot, the Dumbledores and The Potters.",
        "name": "Godric Gryffindor",
        "sidenav": [
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts founder"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Founding of Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Seeking out brave students",
                    "Providing the school with the Sorting Hat"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/godric-gryffindor",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4xUxL9W2KYbxgGAFlT6YTb/da7b57820d50c022f7689137191f5990/godric-gryffindor_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Madam Irma Pince",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Placing protective charms and jinxes on books"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Keeping the peace of the Hogwarts library"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/madam-irma-pince",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "Newt Scamander was a Magizoologist who travelled the world in the early 20th century researching magical creatures. On his travels, he carried a magically enhanced suitcase, capable of housing his fantastic beasts. On his travels, he carried out research for his seminal textbook Fantastic Beasts and Where to Find Them, but his travels weren't purely academic. During the 1920s, Newt found himself embroiled in the events surrounding the rise of Gellert Grindelwald, working with his old teacher and friend, Albus Dumbledore, to stand against him.",
        "name": "Newt Scamander",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Magizoologist",
                    "Hogwarts textbook writer"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Magizoology",
                    "Care of Magical Creatures",
                    "Duelling",
                    "Undetectable Extension Charms",
                    "Erumpent dances"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Comparing Tina's eyes to a salamander's",
                    "Writing Fantastic Beasts and Where to Find Them"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/newt-scamander",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5CPdu61mMV0kXYzEQEYgQA/790206b5e4fdd80815742c4332d85892/newt-scamander_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Rita Skeeter was a wizarding journalist best known for her poison pen articles for the Daily Prophet and her harsh biographies. Skeeter's Quick-Quotes Quill was always working hard as she penned venomous articles about well known witches and wizards, many of which were concocted from a variety of lies, make-believe and conjecture. She utilised a number of underhand tactics in order to gain the insider information she was after, including becoming an illegal Animagus and the use of Veritaserum.",
        "name": "Rita Skeeter",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Daily Prophet"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Animagus",
                    "Investigative journalism"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Writing for the Daily Prophet",
                    "Ruining reputations",
                    "Dressing for the occasion"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rita-skeeter",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4pw5NzkxqtjgQMkNo4uJYQ/2b14e981ba9aade96a94426110e2016a/rita-skeeter_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Parvati Patil attended Hogwarts along with her identical twin sister, Padma. Whilst Parvati was sorted into Gryffindor, her twin was a Ravenclaw student. Parvati was best friends with Lavender Brown both of whom were devoted students of Divination. Whilst her twin, Padma, went with Ron to the Yule Ball, Parvati went as Harry's date, although their romantic involvement didn't progress beyond that night.",
        "name": "Parvati Patil",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Divination",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Gossiping with Lavender"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/parvati-patil",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/YclOZPv8OX1Rzqjgl43d6/ddaac9ff6cb5e09a658b2b4ffa075040/parvati-patil_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "One half of the notorious Weasley twins, along with his brother George, Fred Weasley was more often than not behind any rule breaking that happened at Hogwarts. It wasn't only pranks that kept Fred entertained, he was also an excellent Quidditch player and both brothers were Beaters on the Gryffindor team. While Fred and George may not have had many O.W.L.s, their natural entrepreneurial skills led them to start their own joke shop, Weasley Wizard Wheezes.",
        "name": "Fred Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys",
                    "Quidditch player",
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Inventing and running a joke shop",
                    "Quidditch Beater",
                    "Befriending Peeves"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Making mischief",
                    "Annoying Percy",
                    "Pretending to be George"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/fred-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1WdhYfTfbSkHJbrO0JOQYO/41958c457bbdf2eba46077c690ef7c02/fred-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Myrtle Warren was once a Hogwarts student, but after her untimely death, she stayed back as a spirit to eternally haunt the second-floor girls' bathroom. Myrtle had a hard time at Hogwarts, and was frequently bullied. Prone to wailing morosely, the ghost became known informally as Moaning Myrtle. But Myrtle did have a cheekier side that came out sometimes, especially when she made friends with Harry. Years later, she would meet his son, Albus, and was equally friendly with him.",
        "name": "Moaning Myrtle",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Navigating the Hogwarts plumbing",
                    "Helping to discover the Chamber of Secrets"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Haunting the girls' bathroom",
                    "Thinking about death",
                    "Hanging out in the U-bend"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/moaning-myrtle",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1L8CCQ8lqXntaz57ykhaB1/5e5e2a8b22d08688c452d1d7274c0a51/moaning-myrtle_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Pickett was a Bowtruckle belonging to Newt Scamander. Although most of Newt's creatures, and his other Bowtruckles, lived in his magical briefcase, Pickett had a special place in Newt's heart, and often found a cosy spot in his top pocket. Pickett's lock-picking skills came in handy on a number of occasions, making him an important member of Newt's team.",
        "name": "Pickett",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Newt Scamander"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Protecting wand wood trees"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Hanging out with Newt!"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/pickett",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1FjnKMkfRjhBt1ZzKCFtTN/d1de91217be1c9b17021f2afaca5dcf9/bowtruckle_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Ginny Weasley's Pygmy Puff, Arnold was brightly coloured, pocket sized and delightfully fluffy. Bought from the Weasley twins' Diagon Alley shop, Arnold accompanied Ginny to Hogwarts and enjoyed riding around on her shoulder.",
        "name": "Arnold",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Being fluffy"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being fluffy"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/arnold",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4JE8xJvUvSA0C04qkO4oCg/5607923a4bb3648040eeb9de5256e230/Pottermore_BlueMonday_V2-14.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Mundungus ‘Dung’ Fletcher was both a petty criminal and a member of the Order of the Phoenix during both wizarding wars. He was very loyal to its leader, Albus Dumbledore, who had managed to get him out of a spot of bother. Most other members were wary of Mundungus due to his untrustworthy reputation. For example, he was supposed to be guarding Harry the night that two Dementors appeared in Little Whinging.",
        "name": "Mundungus Fletcher",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Disguising himself Evading Ministry capture"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Selling his wares on Diagon Alley Buying stolen cauldrons"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/mundungus-fletcher-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3yEnOqJEUYLbf8NYDV0kd1/7d7bcf57d651971b3be1f864c7082f52/fact-file-hero-mundungus-hp-f6.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A dangerous witch, Bellatrix Lestrange was utterly devoted to Lord Voldemort and was one of his closest allies. A member of the house of Black, one of the oldest wizarding families, Bellatrix was also Draco Malfoy's aunt. Renowned for her cruelty and sadistic nature, many of the acts of torture and violence against Voldemort's enemies were carried out by Bellatrix Lestrange.",
        "name": "Bellatrix Lestrange",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eater",
                    "The Malfoys",
                    "The Blacks"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Cruciatus Curse",
                    "Duelling",
                    "Surviving Azkaban",
                    "Dark Arts",
                    "Occlumency"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Worshiping Lord Voldemort"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/bellatrix-lestrange",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5v8CdkDZjS4L43gnkat8Cb/439b6dfd32b736cb83e1bf04047f3de1/bellatrix-lestrange_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Highly ambitious and a little more serious than his siblings, Percy Weasley was determined to make his mark on Hogwarts as prefect and Head Boy, with future ambitions to climb high at the Ministry of Magic. Teased by his siblings, (especially by Fred and George) for how seriously he took every rule, he was never happier than when he was in charge of a group of wide-eyed first years!",
        "name": "Percy Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys",
                    "Ministry of Magic",
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Being a prefect",
                    "Top O.W.L. and N.E.WT. grades"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Reminding people he is Head Boy",
                    "Pursuing a Ministry of Magic career"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/percy-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/60XdIiK8r1xbI7ZohCQNqb/25427b814101f4c850fb5023828ecfcf/percy-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Rather pompous, but with his heart in the right place, Ernie Macmillan was a Hufflepuff in Harry’s year at Hogwarts. In his fifth year, he joined Dumbledore’s Army and was also made Prefect – a role he took very seriously. Ernie also took his schoolwork very seriously, boasting about the number of hours he had revised for his O.W.L exams.",
        "name": "Ernie Macmillan",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling Diligent Hogwarts student"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Performing his prefect duties"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/ernie-macmillan-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4LqtDNVKA4yCl45ZjeP1iT/6b5fd948bb32ff15be4c784a0c0cd151/fact-file-hero-ernie-pottermore.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A Slytherin pupil who had a strong rivalry with Harry Potter and a family loyal to Lord Voldemort, from the moment Draco and Harry met in Madam Malkin’s Robes for All Occasions the two didn’t see eye to eye. Harry rejected Draco’s offer of friendship, preferring to choose his friends for their personality rather than their pure-blood status. Draco was usually accompanied by his cronies, fellow Slytherins, Crabbe and Goyle, and enjoyed having power over other students. When the pressure from his family and the rise of Voldemort turned Draco from schoolboy bully to something a lot more dangerous, the cracks began to show and his allegiances waiver.",
        "name": "Draco Malfoy",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "The Malfoys",
                    "Death Eaters"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch",
                    "Duelling",
                    "Vanishing Cabinet repair",
                    "Occlumency"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "The Inquisitorial Squad",
                    "Abusing his Prefect power",
                    "Leading Crabbe and Goyle",
                    "Hanging out in Borgin and Burkes",
                    "Spending time in the Room of Requirement"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/draco-malfoy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/UVem7q7StFtLiccc4W1Yq/43b76ab775914fa8536d6d3297725881/draco-malfoy_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Queenie Goldstein was an American witch who worked in the Wand Permit Office within the Magical Congress of the United States of America (MACUSA). As an extremely skilled Legilimens, she had the ability to read the feelings and memories of other people's minds. After falling in love with the No-Maj Jacob (an American Muggle), Queenie strayed from her sister's side - and things took a darker path when she learnt she was unable to marry Jacob under the current wizarding laws of the 1920s. But ultimately, Queenie was always invested in working for the greater good.",
        "name": "Queenie Goldstein",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "MACUSA",
                    "Grindelwald"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Legilimency"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Cooking"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/queenie-goldstein",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4io57BY6nXCr1xz1lKWnsX/44ed0b653d0d916de7ae3eb2aaf1a153/queenie-goldstein_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Ron Weasley was Harry's, and Hermione's, best friend. Fiery haired and headed, Ron was the second youngest of the seven Weasley children. Used to hand-me-downs, from robes to rats, Ron’s friendship with Harry often came under pressure as he tried to deal with living in the shadow of his best friend. However, there was more to Ron than his red hair and broken wand. Ron might not have Hermione’s brains or Harry’s fame, but  his loyalty, bravery and selflessness make him an important part of the trio.",
        "name": "Ron Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child",
                    "FULL NAME",
                    "Ronald Bilius Weasley"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "wand",
                "values": [
                    "Unicorn hair",
                    "Willow"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys",
                    "Dumbledore's Army",
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Keeper",
                    "Wizard Chess"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Supporting the Chudley Cannons",
                    "Eating",
                    "Crashing his dad's flying car"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/ron-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7EgY9XJPTahEXw9d2GaQJf/4626c44aa3d213edaf368a29f3643fff/ron-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Mrs Norris was a ‘dust-coloured’ cat with ‘bulging, lamp-like eyes’ and was Argus Filch’s loyal sidekick. As his second-in-command, she would patrol the corridors of Hogwarts looking for rulebreakers and would then lead Filch to the misbehaving students. The two of them appeared to be able to communicate wordlessly and had unshakeable bond.",
        "name": "Mrs Norris",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Navigating Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Catching students who are up to no good"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/mrs-norris-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4VPYtdIdM9sLpySUDPSGOC/171e10cd29afdac0c58fbe0a7eff5270/fact-file-here-mrs-norris-pottermore.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Errol",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Delivering post... sometimes"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Flying head-first into windows"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/errol",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "Slytherin's ghost, The Bloody Baron was terrifying in appearance. The silver blood on his clothes was a clue to his death, and the horrible crimes that preceded it. Sent by Rowena Ravenclaw to find and return her runaway daughter, Helena, tragedy struck when she refused to go home with him, ending in her bloody murder. The Bloody Baron then killed himself in deep regret, returning to Hogwarts as a ghost and carrying heavy chains as a symbol of his repentance.",
        "name": "The Bloody Baron",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Controlling Peeves"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being in love with the Grey Lady",
                    "Carrying chains",
                    "Scaring students and fellow ghosts alike"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/the-bloody-baron",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2UHHoIGnj1qbRuKSsIDsAL/535395e1aa359e9d623c5b7321b85dc7/the-bloody-baron_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Dudley Dursley was spoiled rotten by his doting parents, Vernon and Petunia. Given everything he could ever wish for, Dudley took no greater pleasure than inflicting pain on his orphaned cousin Harry Potter. Along with friends, like Piers Polkiss, Dudley enjoyed roaming the streets of Little Whinging finding smaller, weaker children to bully. Harry was very much included in this number, before he discovered he could frighten Dudley with his magical powers.",
        "name": "Dudley Dursley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "CONNECTIONS",
                    "Muggles"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Boxing"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Bullying Harry"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/dudley-dursley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/I23OQ0cfmJfZHd3udyjuL/3adf3a0a2daea4d760b68c598292a310/dudley-dursley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "When Harry escaped Privet Drive and had nowhere to go, he was delighted to be picked up by the Knight Bus, emergency transport for stranded witches and wizards. The bus was kitted out with beds and had hot chocolate served by the conductor, Stanley Shunpike. Stan had a habit of telling tall tales in order to impress people, which could occasionally get him into trouble!",
        "name": "Stan Shunpike",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Knight Bus"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/stan-shunpike",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/u5x3YWzVR4vGhWxLGAGL4/fadf885c48c0436ac95e1fe62c5a1e73/stan-shunpike_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A Ministry of Magic bureaucrat who was able to indulge in her sadistic tendencies when she was posted to Hogwarts as Defence Against the Dark Arts professor, Dolores Umbridge was famous for her sickly pink wardrobe and her particularly violent taste for corporal punishments. Her ambitions saw her take the post of Hogwarts High Inquisitor and Headmistress where her unpopularity saw a near rebellion break out amongst the students.",
        "name": "Dolores Umbridge",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts Staff",
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Ministry of Magic professional",
                    "Creating her blood quill"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Working for Cornelius Fudge",
                    "Torturing students",
                    "Adding frills to objects",
                    "Collecting ornamental plates decorated with cats"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/dolores-umbridge",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5h9EdQAzLzDH1JfREblBhL/f502709257daf5f81b9919a875b1327d/dolores-umbridge_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A giant boarhound, Fang looked imposing but was actually a gentle soul who was devoted to his owner, Rubeus Hagrid. Often found with his head on the lap of the nearest witch or wizard looking to have his ears stroked, he would often leave a large pool of drool and some soaked robes behind.",
        "name": "Fang",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hagrid"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Being loyal to Hagrid, slobbering"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Cowering in the wake of frightening circumstances"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/fang",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6MYGoPvMPUJz2biUkBUyxJ/3987a8685e5c4fe9e8c5c4367f327637/HP-F1-philosophers-stone-hagrid-fang-outside-hagrids-hut-playing-flute-web-landscape?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Oliver Wood was the Gryffindor Quidditch Captain and Keeper. He was delighted when he discovered Harry's prodigious flying talent, a perfect fit for the vacant Seeker position on their team. Known for his lengthy pre-match team talks and fiercely competitive nature, Oliver worked tirelessly to lead his team to victory with the Quidditch Cup always in his sights.",
        "name": "Oliver Wood",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Quidditch player"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Keeper",
                    "Quidditch Captain"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Playing Quidditch for Puddlemere United"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/oliver-wood",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/bRtGqJ3Lmc1bAYoyGfCmn/913cae05faa3247e14a6b78b8d4ac0a1/oliver-wood_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A gift for Harry's eleventh birthday, Hedwig was a snowy owl who came to be one of Harry's closest companions. Not only did Hedwig deliver Harry's mail but she was a friend to Harry during his loneliest moments. Despite her loyalty to Harry, Hedwig could get stroppy, particularly when she wasn't given the flying freedom that she was accustomed to.",
        "name": "Hedwig",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Harry Potter"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Delivering letters quickly and efficiently"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Nipping Harry"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/hedwig",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1lfSwIWsmnMe4aXZYO9WZ2/7e7612e50ae3440f6a82a085fdcf0e90/hedwig_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "As Professor of Herbology, the kindly Pomona Sprout had the greenest fingers at Hogwarts. The Head of Hufflepuff house spent most of her time in the school’s greenhouses growing everything from Venomous Tentacula to Devil's Snare. Professor Sprout not only nurtured magical plants, she also played an important role in caring for her students, including Neville Longbottom who found that he excelled in the greenhouses, ultimately becoming a teacher of Herbology himself.",
        "name": "Pomona Sprout",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Head of Hogwarts house"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Herbology",
                    "Repotting Mandrakes",
                    "Weaponising Devil's Snare"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Looking after Hufflepuffs",
                    "Tending to plants in the greenhouses"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/pomona-sprout",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2ZSalld3434qLB9r25o3my/accd0ab25075137b315a420d0eb20f27/pomona-sprout_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Gregory Goyle was no cleverer than his best-friend Vincent Crabbe and he was equally as thuggish. Together the two Slytherins followed Draco Malfoy around, making sure that other students knew that they were bigger, better and more powerful than them. The son of a Death Eater, Goyle and his friends were particularly unkind to Muggle-born students and more than once.",
        "name": "Gregory Goyle",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "The Inquisitorial Squad"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Quidditch Beater"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Bullying",
                    "Eating"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/gregory-goyle",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/77PC7poMc8tC962KK6fGmr/889b01ad96cc21fee51c8111a0924769/gregory-goyle_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Hermione Granger's beloved cat, Crookshanks was notably half-Kneazle - and seemed to share Hermione's impressive intelligence. With his lion-like features, ginger coat and talent for spotting those who are less than trustworthy, Crookshanks was a useful companion to Hermione and her friends, although his obsession with Ron's pet rat Scabbers did cause friction for a while.",
        "name": "Crookshanks",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hermione"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Kneazle abilities"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Chasing Butterbeer corks",
                    "Chasing Scabbers",
                    "Curling up in the common room"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/crookshanks",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2dSA7Go0kZiQSMn87vXUnQ/5aa1201bc68e4d586e44a1f4544dd433/crookshanks_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Sybill Trelawney was the Hogwarts professor of Divination - the study of telling the future. Most of what she taught her students was debatable in its accuracy, and whether it was tea leaves or crystal gazing Trelawney could reliably be counted on to predict the unfortunate demise of any student in the vicinity. However, Professor Trelawney was related to a well known Seer, Cassandra Trelawney and there was evidence  that she too had some prophesising powers.",
        "name": "Sybill Trelawney",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Divination",
                    "Seer"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Hiding sherry in the Room of Requirement",
                    "Making life-changing prophecies"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/sybill-trelawney",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5mXlYFbk4kuZT3p6pbtRQa/349d553d099c58ee700d70de40c9035d/sybill-trelawney_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Albus Percival Wulfric Brian Dumbledore was Headmaster of Hogwarts and the founder of the Order of the Phoenix, an organisation dedicated to defeating Lord Voldemort. With a penchant for Muggle sweets and a beard long enough to be tucked into his belt, Dumbledore's quirky exterior should not be taken too lightly, for there was nothing that got past this great wizard. Dumbledore was a father figure for Harry Potter, and known to be the only wizard that Voldemort ever feared.",
        "name": "Albus Dumbledore",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "wand",
                "values": [
                    "Thestral hair",
                    "Elder"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Order of the Phoenix",
                    "Wizengamot",
                    "Order of Merlin",
                    "Dumbledores"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Defence Against the Dark Arts",
                    "Transfiguration",
                    "Duelling",
                    "Charms",
                    "Potions",
                    "Spell-creation",
                    "Mermish"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Ten-pin bowling",
                    "Chamber music",
                    "Inventing objects like the Deluminator",
                    "Caring for Fawkes",
                    "Using the Pensieve"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/albus-dumbledore",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3BJZavhBZMxogQwDFJRGvi/d5bb755d86661e1e023a13e1640d8881/albus-dumbledore_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A house-elf who served in the House of Black, Kreacher's loyalty to the Black family was absolute and undying. He also absorbed the anti-Muggle beliefs of the Black family. When 12 Grimmauld Place was designated as the headquarters for the Order of the Phoenix, he was furious at the presence of non-Pure Blood witches and wizards in his family home. Kreacher was difficult, untrustworthy and had a tendency to hoard possessions, but as Hermione suggested, this was a result of being treated so cruelly by the Black family.",
        "name": "Kreacher",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "House-elf"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Apparition"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Caring for Master Regulus",
                    "Hiding Voldemort's locket"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/kreacher",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/qIhaKf0orSFjxujRG4Ci5/c3e2cc1ccfb3072c5678b18239b0a2f2/kreacher_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Ludo Bagman",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Quidditch player",
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch",
                    "Ministry of Magic official"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Making bets",
                    "Attending the Quidditch World Cup"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/ludo-bagman",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "An eccentric Ravenclaw student, member of Dumbledore’s Army and close friend of Harry Potter, Luna Lovegood might have been nicknamed ‘Loony’ for her quirky ways, but she was in fact often one of Harry’s most clear-sighted friends. Luna was undeterred in her belief in herself and her friends but with a father who edited the notoriously unreliable Quibbler magazine and a unique personal style, including homemade dirigible plum earrings, Luna had no choice but to stand out from the crowd. Her courage, loyalty and kindness earned her place in Harry’s circle of most trusted friends.",
        "name": "Luna Lovegood",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army",
                    "The Lovegoods"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Care of Magical Creatures"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Reading The Quibbler",
                    "Wearing Spectrespecs",
                    "Painting",
                    "Creating jewellery"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/luna-lovegood",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5YHzD6ve73jU2vEPQaTzEr/13ce606c8ae5d7842f86c1ef5fea38ea/luna-lovegood_4_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Jacob Kowalski was a Polish-born American No-Maj (or Muggle) and baking enthusiast who lived in New York during the 1920s. Although Jacob had no knowledge of magic before he met Newt Scamander, he was drawn into an adventure when he accidentally took Newt's magical suitcase back to his apartment. Despite the memory altering spell that should have wiped all knowledge of the wizarding world, Jacob couldn't leave what he'd learned to love behind.",
        "name": "Jacob Kowalski",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Muggle (also known as a No-Maj)"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Care of Magical Creatures"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Baking",
                    "Hanging out with wizards"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/jacob-kowalski",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1c63RNjZyNUK0GvGWhMckn/a6d6eab01c5bd875baf4c31b6a582c54/jacob-kowalski_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Quirinus Quirrell arrived at Hogwarts as Harry Potter's first Defence Against the Dark Arts professor after a year long sabbatical travelling the world. Quirrell was a nervous man, distinctive for his stutter and turban, although it became clear that there was more to Professor Quirrell than a lack of confidence.",
        "name": "Quirinus Quirrell",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Defence Against the Dark Arts",
                    "Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Seeking out Voldemort",
                    "Hosting Voldemort",
                    "Seeking the Philosopher's Stone"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/quirinus-quirrell",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1mDvmBkWGDdCfArPwg9gH2/25919b74469db900e66c4e8260f9d155/quirinus-quirrell_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Angelina Johnson was a Gryffindor student in the same year as the Weasley twins who were also on the house Quidditch team. Angelina played as the team's Chaser and was instrumental in many of Gryffindor's victories. Friends with Katie Bell and Alicia Spinnet, the girls often had to remind their Captain Oliver Wood that the team wasn't just 'men' and 'guys' in his pre-match pep talks.",
        "name": "Angelina Johnson",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Quidditch player",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Chaser",
                    "Quidditch Captain"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Keeping the Gryffindor Quidditch team in line",
                    "Attending the Yule Ball with Fred"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/angelina-johnson",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/YvN6RMwII6KNJrpEaJT7p/07faff91269fe5f0cbf4f51de2a29c32/angelina-johnson_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Considered one of the best-ever wandmakers, Garrick Ollivander owned the wand shop on Diagon Alley, his family business Ollivanders. It was here that Hogwarts students bought their first wands and where Harry found his, an unusual holly wood and phoenix feather. Ollivander's expertise on wands meant he was valuable to Lord Voldemort, particularly when it came to understanding the true power of the Elder Wand",
        "name": "Garrick Ollivander",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Wandmaker"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Wandlore",
                    "Wandmaking"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Finding things curious"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/garrick-ollivander",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5w2dQRn8Tn8zgIhL27SUl6/62e9f6a1e6117448f2f91002ee94c57f/garrick-ollivander_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Barty Crouch Jr. first became a follower of Lord Voldemort in his teenage years and was sent to Azkaban for his involvement in the capture and torture of Frank and Alice Longbottom. However, he was able to escape, the first to do so in almost 300 years, and travelled to Hogwarts in order to help his master return to power via a twisted scheme. Barty's actions were particularly notable considering his father, Barty Crouch Sr., was a respected wizard at the Ministry of Magic.",
        "name": "Barty Crouch Jr.",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eater"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Dark Arts",
                    "Brewing Polyjuice Potion"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Watching Quidditch in his younger years"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/barty-crouch-jr",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/9yPVBc0iaPE9V5RsB5sni/2bd090e192bbefc03b7045f0841810c5/barty-crouch-jr_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Hogwarts' very own poltergeist, Peeves enjoyed nothing more than causing chaos in the school corridors. A constant nuisance, no one disliked Peeves more than the school's caretaker, Argus Filch, who was the one tasked with cleaning up the mess. Whether he was throwing things, blowing raspberries or writing rude words on the blackboard, there was nothing Peeves liked best than making mischief!",
        "name": "Peeves",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts poltergeist"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Mischief making",
                    "Extensive knowledge of Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Composing songs and rhymes",
                    "Warring with Filch"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/peeves",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5jsf2rpwncScodENrRmdEy/69ece176dd7cedb03e7ca59e7efa920a/peeves_16_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The older brother of Newt Scamander, Theseus fought in the First World War before being promoted to Head Auror during the global Wizarding War. Known for his courage, bravery and fortitude of spirit, Theseus was  well-respected in the Ministry of Magic and heavily involved in fighting back against the rise of Gellert Grindelwald. And although Newt and Theseus didn't always see eye to eye, Theseus truly cared about his brother.",
        "name": "Theseus Scamander",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Ministry of Magic official",
                    "Auror",
                    "Defence Against the Dark Arts",
                    "Duelling"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/theseus-scamander",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/30mPljqbbR6iY1haYFUnd3/ee0d2cdcb71e6c765b4dc15bd89c5401/FBSOD-theseus-and-newt-in-cave-web-landscape.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Severus Snape was Head of Slytherin House, Potions Master and Harry’s least favourite teacher. From the first moment of meeting, these two never met eye to eye, with Snape often being condescending and cruel to anyone that wasn't his own Slytherin students. However, despite this surly reputation, perhaps Snape wasn't always what he seemed.",
        "name": "Severus Snape",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Head of Slytherin house",
                    "Death Eaters",
                    "Order of the Phoenix"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Occlumency",
                    "Legilimency",
                    "Potion-making",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being devoted to Lily Potter",
                    "Scowling"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/severus-snape",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/toxlayPDePtX8yx2wvWun/b65f6acd9087031b1ff39461d8f22d0a/severus-snape_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Born Tom Marvolo Riddle, Lord Voldemort or He-Who-Must-Not-be-Named was one of the most powerful Dark wizards of all time. His closest followers, the Death Eaters, were dedicated to establishing a new Voldemort-led supremacy, but were forced into hiding after their leader was mysteriously vanquished when he tried to kill a defenceless infant - a young Harry Potter. Little did anyone know, however, that Voldemort had gone further than any other wizard in his pursuit of immortality, and he would return once more.",
        "name": "Lord Voldemort / Tom Riddle",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eaters"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Legilimency",
                    "Parseltongue",
                    "Creating Horcruxes",
                    "Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Applying for the Defence Against the Dark Arts job",
                    "Caring for Nagini",
                    "Leading the Death Eaters"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lord-voldemort",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/bL0jwWRYbIyDAgsl8W8Qw/22772152beef835f111dbd91535971eb/lord-voldemort-tom-riddle_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The first Hogwarts competitor to be chosen by the Goblet of Fire for the Triwizard Tournament, Cedric Diggory was quickly joined by surprise fourth champion Harry Potter. Having already played Seeker opposite Harry in the previous year, Cedric was graceful in being pitted against the famous Potter and the pair quickly came to realise that they could join forces and benefit from sharing knowledge and ideas. The handsome Hufflepuff Quidditch Captain was by far and away the Hogwarts favourite, not only as a competitor for the trophy but also as a pin-up. Good hearted as he was heroic however, Cedric was devoted to his girlfriend, Ravenclaw, Cho Chang.",
        "name": "Cedric Diggory",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Quidditch player"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Triwizard champion",
                    "Bubble-Head Charm",
                    "Quidditch Seeker"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Charming Cho Chang",
                    "Bathing in the Prefects' bathroom"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/cedric-diggory",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4P7qQmj9yIBbzYLeSRyc1T/4b5d6e06fc863cfc186ebf46e8523123/cedric-diggory_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Daughter of Hogwarts founder, Rowena Ravenclaw, Helena was jealous of her mother's gifts, stole her diadem and ran away to Albania. When her mother sent The Bloody Baron to bring her home, instead, he fell in love with her, then murdered her when she did not return his feelings. Helena would go on to haunt Hogwarts forever more, going by the name of The Grey Lady.",
        "name": "The Grey Lady",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Keeping secrets"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/the-grey-lady",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/744KQnZVevkhgPPOgTpkGY/605d1bf190e8ac546bbccb07a7c7e27d/the-grey-lady-helena-ravenclaw_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A house-elf who was utterly devoted to Harry Potter, Dobby put himself at great risk (and in serious physical pain) when he went out of his way to protect the young wizard from what Dobby knew would be significant danger. His loyalty and bravery were rewarded eventually, as he was freed from his cruel wizarding family with a gratefully received dirty sock. Harry and Dobby became firm friends after that and more socks would come into Dobby's life.",
        "name": "Dobby",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "House-elf"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Apparition (even within Hogwarts)"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Saving Harry Potter",
                    "Collecting socks"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/dobby",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/747HAr2uJS1Wat6CVOEzbH/0003d863999f6644e0b1e4d5cd5beb62/Dobby_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "One of the four founders of Hogwarts School of Witchcraft and Wizardry, Helga Hufflepuff favoured students who were 'just and loyal.' Fairness was at the heart of Hufflepuff house, and as a result, had arguably the most inclusive and open approach to accepting students from all backgrounds and of all talents. As a witch, Helga had been talented at charms and enjoyed eating and preparing feasts.  Indeed, many of her recipes were still used in the Hogwarts kitchens centuries after her death.",
        "name": "Helga Hufflepuff",
        "sidenav": [
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts founder"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Magical invention of her cup",
                    "Founding of Hogwarts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Providing refuge for house-elves"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/helga-hufflepuff",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2yh79uYqFiYP4mv7bnJMjm/d731818f70d8e23681633f4eba9bc60d/helga-hufflepuff_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Cornelius Fudge's successor, Rufus Scrimgeour worked his way up from being an Auror to taking on the role as the Minister for Magic. With his leonine appearance and experience in fighting Dark Arts supporters, Scrimgeour promised a crackdown on Voldemort's sympathisers. Despite his hard stance, Scrimgeour left the Ministry, and himself, vulnerable to infiltration from Death Eaters and Dark magic.",
        "name": "Rufus Scrimgeour",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Minister for Magic",
                    "Defence Against the Dark Arts"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rufus-scrimgeour",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4tZlWKTsONREPS2lSRAvpT/428ed03bd53e042d54d1e3bb684c0800/rufus-scrimgeour_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "This Ravenclaw was the twin sister of Parvati Patil (a Gryffindor in Harry’s year). Along with her sister, she joined Dumbledore’s Army in her fifth year at Hogwarts. She was Ron Weasley’s date to the Yule Ball, which didn’t go too well, and their romantic relationship did not go any further.",
        "name": "Padma Patil",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Surving a date with Ron at the Yule Ball"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Duelling Conjuring a Patronus"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/padma-patil-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/69qPdK2su351DQANY4gX3q/58aa38f826062eaabc5925adab408836/fact-file-here-padma-yule-ball-hp-f4.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Xenophilius Lovegood was the father of one of Harry’s closest friends, Luna Lovegood. He was devoted to his daughter and would do anything he could to protect her. Like Luna, he was an eccentric personality and held many interesting views, such as his belief in the existence of Wrackspurts. Xenophilius was best known for being the editor of what was initially a kooky fringe magazine, The Quibbler. He was a supporter of Harry, believing his account of Voldemort’s return when many didn’t.",
        "name": "Xenophilius Lovegood",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows",
                    "FAMILY CONNECTIONS/AFFILIATIONS",
                    "The Lovegoods"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Wizarding journalism"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Seeking out the Deathly Hallows"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/xenophilius-lovegood-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4itlsFHAzmdwky4BqlBrqt/e86c32d118ed61719e039bf4aa43206e/fact-file-hero-xenophilius-lovegood-hp-f7.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "As a student at Hogwarts, Peter Pettigrew had been best friends with fellow Gryffindors James Potter, Sirius Black and Remus Lupin. As young wizards, they discovered how to transform into Animagi, and Peter made use of his rat-form when he disappeared from the wizarding world after the murder of James and his wife, Lily Potter. Pettigrew (or Wormtail) became one of Lord Voldemort's most loyal servants - a far cry from the company he kept in his Hogwarts days.",
        "name": "Peter Pettigrew",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Marauders",
                    "Death Eaters"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Animagus",
                    "Resurrection potion",
                    "Magical silver hand",
                    "Creating the Marauder's Map"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being loyal to Voldemort",
                    "Pretending to be a rat",
                    "Seeking power and status"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/peter-pettigrew",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2MNEPcB1RKvdYQ232DwXll/478765b8859d47b57483ec894b29e98b/peter-pettigrew_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "At school, Remus Lupin was a prefect and always the more practical Marauder, often keeping best friends James and Sirius in line. Lupin first met Harry Potter when he returned to Hogwarts as Defence Against the Dark Arts professor. Lupin might have been a little shy, a little shabby and he tended to disappear at certain times of the lunar calendar, but he was a kind and excellent teacher and even taught Harry how to conjure a corporeal Patronus.",
        "name": "Remus Lupin",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Hogwarts Staff",
                    "Marauders"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Defence Against the Dark Arts",
                    "Creating the Marauder's Map",
                    "The Patronus Charm",
                    "The Boggart-Banishing Charm",
                    "Werewolf transformation"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being with Tonks",
                    "Being a Marauder",
                    "Sneaking off to the Forbidden Forest and Shrieking Shack"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/remus-lupin",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/ponHm3tZ7uTYGW4c5QpzC/e713a92ef07f1967c93b22a0ffbbb4da/remus-lupin_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Vincent Crabbe",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "The Inquisitorial Squad"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Fiendfyre",
                    "The Killing Curse",
                    "Quidditch Beater"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Bullying",
                    "Eating"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/vincent-crabbe",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "Hatched from an egg, that Hagrid had won in a game of cards, Norbert was a dragon and more specifically a Norwegian Ridgeback. They were raised on a diet of brandy mixed with chicken blood and soon outgrew the confines of Hagrid’s flammable hut. As a result, they went to live at a dragon sanctuary in Romania where Ron’s brother, Charlie, worked.",
        "name": "Norbert",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Firebreathing Poisonous bite"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Accidentally setting his \"mummy\"'s beard on fire"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/norbert",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/50lT7sflnHfWoUu8pihZWl/a916e028ddfec92d063809ad1218f7e7/fact-file-hero-norbert-hp-f1.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A Niffler belonging to Newt Scamander, Teddy lived in Newt's magical briefcase but often escaped to chase treasure. He accompanied Newt on many of his adventures, but often caused chaos if he spotted something shiny! Teddy would later go on to have Niffler children.",
        "name": "Teddy",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Newt Scamander"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Sleight of hand (or should that be..paw?)"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Snapping up shiny items"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/teddy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5CKiuijqSAyOL3Fv1Q1ujz/095f8d54f099ebdad2f567cadd2f7dbb/niffler_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Lee Jordan was a Gryffindor student and best friends with Weasley twins Fred and George. His passion for Quidditch was often revealed during matches where he served as the commentator for the crowds, sometimes getting reprimanded by Professor McGonagall if he took things too far. His broadcasting skills came to be useful in the later stories too, serving as a pirate radio host during the ascent of Lord Voldemort.",
        "name": "Lee Jordan",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Extensive Quidditch knowledge",
                    "Quidditch commentary",
                    "Radio commentary"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Causing mischief with Fred and George"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lee-jordan",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3Ea07GERCK6ZzK8MjBljNK/c4ec0a8027f914251b6cc2d83e282342/lee-jordan_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A pupil at French wizarding school, Beauxbatons, Fleur Delacour travelled to Hogwarts for the Triwizard Tournament. Her name was chosen alongside Cedric Diggory, Viktor Krum  and, controversially, an unexpected fourth competitor, Harry Potter. Fleur was a popular champion, largely due to her bravery, and skills and quick mind, but also in part to her quarter-Veela heritage. Fleur returned to France after the Tournament but soon found her way back to the UK where she met and fell in love with Ron's older brother, Bill Weasley, while working at Gringotts.",
        "name": "Fleur Delacour",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Beauxbatons Academy",
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Triwizard Champion",
                    "Charms",
                    "Bubble-Head Charm",
                    "Veela skills"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Providing protection at Shell Cottage",
                    "Being in love with Bill"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/fleur-delacour",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5osORv9E0ZkXy0p0S7lkjT/dfdeed51f21de5f7e09eb5c8fa6296c9/fleur-delacour_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Charlie Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Seeker"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Dragon handling"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/charlie-weasley",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "The youngest Weasley child and only daughter, Ginny was an accomplished witch and Quidditch player - joining Gryffindor house alongside her siblings. Ginny might have been a little flustered when she first met Harry Potter as a young witch, but she soon found her footing at school. The youngest Weasley proved herself a skilled Seeker and Chaser, representing Gryffindor on the house team, but she was just as talented with a wand as she was with a broom, specialising in the Bat-Bogey Hex. She was often by Harry's side as he battled Voldemort during their time at Hogwarts.",
        "name": "Ginny Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys",
                    "Quidditch player"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Seeker, Chaser and journalist",
                    "Defence Against the Dark Arts",
                    "Duelling",
                    "Bat-Bogey Hex"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Looking after Arnold"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/ginny-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2gLG1c21U1NigisKwPq2GJ/9006f27bda86ec54cfd28de9c89c6e51/ginny-weasley_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Professor Eulalie Hicks, or Lally, was an American witch who worked at Ilvermorny School of Witchcraft and Wizardry as a Charms teacher. Lally attended the school with Queenie and Tina Goldstein and stayed good friends with the witches after they graduated. She was also in touch with Albus Dumbledore, who recognised her prodigious mind when she wrote to him about his work. She agreed to work with him to stop Gellert Grindelwald's rise to power.",
        "name": "Lally Hicks",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Ilvermorny"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Charms"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Teaching",
                    "Aiding Newt and Dumbledore in the fight against Grindelwald"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lally-hicks",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6bPJffD24rGh7Vp67WBvtH/b55860324f18f044c22b332eb9610a55/lally-hicks_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Bathilda Bagshot was a magical historian and a long time friend of Albus Dumbledore. Author of A History of Magic,  a core Hogwarts text, Bathilda lived and died in Godric's Hollow, the former home of Harry's family, the Potters. In fact, Bathilda had several connections to key wizarding world characters: she was Gellert Grindelwald's great-aunt.",
        "name": "Bathilda Bagshot",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts textbook writer"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "History of Magic"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/bathilda-bagshot",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5Wz0dQlOEEx0vxmJJAnUex/5cc30a0ac2b0d41ef05fd34b1f5903a0/bathilda-bagshot_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Professor Binns taught History of Magic at Hogwarts until the moment he died, slumped at his desk. Not to be perturbed by his sudden demise, Professor Binns continued to teach as a ghost, boring students about various Goblin rebellions and Giant wars long into his afterlife.",
        "name": "Cuthbert Binns",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost",
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "History of Magic"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Teaching (even in death)"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/cuthbert-binns",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6B7QSeby1AmYUI0GBMfTbS/aa5bef9874bfb573d9769ba0e81e1482/fact-file-images-hogwarts-legacy-cuthbert-binns.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Lily Potter was a talented Muggle-born witch, and the first in her family to go to Hogwarts - something that inspired great jealousy in her sister, Petunia. Sorted into Gryffindor along with James, after leaving school they married and had a son, Harry, who had his mother's eyes. Lily and her husband were staunch adversaries of Voldemort and did everything they could to fight his rise to power before they were murdered. However, Lily's love for her son offered a special protection against Voldemort's Killing Curse, leaving baby Harry unscathed but for a distinctive lightning bolt shaped scar.",
        "name": "Lily Potter",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Potters",
                    "Muggle-borns"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Potions"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Protecting Harry"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lily-potter",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6HsssEpw594l327uI5mgBB/28570eb186702b0ddbbefc8ac407f5fb/lily-potter_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Trevor was Neville’s pet toad who had a habit of wandering off. In fact, we were first introduced to Neville when he was looking for said toad who had hopped off and hidden somewhere on the Hogwarts Express. When Trevor finally escaped to live among the other toads at the Hogwarts lake, both Neville and Trevor breathed a sigh of relief.",
        "name": "Trevor",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "FAMILY CONNECTIONS",
                    "The Longbottoms"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Escaping"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/trevor",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2AsxECQwy1mUk4FZP8lNsH/ebb970d9fb8fdaafad150a6028c3d516/fact-file-hero-trevor-hp-f4.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "As Hogwarts Charms Professor, Filius Flitwick was in charge of teaching his pupils everything from Cheering Charms to making objects fly - combining accurate incantation enunciation with the precise wand movements (like the ‘swish and flick’). As Head of Ravenclaw house Flitwick was an integral part of school life. Despite his diminutive size, Flitwick's magic was powerful, complex and instrumental in protecting Hogwarts from various external (and sometimes internal) dangers - he was even a once a duelling champion.",
        "name": "Filius Flitwick",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Head of Hogwarts house"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Charms",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Conducting",
                    "Decorating the Great Hall for Christmas",
                    "Crowdsurfing"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/filius-flitwick",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7mP0DqLSgupq3i33OCnt5R/e0f2795085f04f4b3592914066a117d6/filius-flitwick_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Dean Thomas came from a Muggle family so was more at home with red cards and strikers than Quaffles and Beaters. Eventually, however, Dean learned how to fly and made himself useful when a spot arose on the Gryffindor Quidditch team. He even attended the Quidditch World Cup along with his best friend Seamus Finnigan. Like Seamus, Dean was a supporter of dormitory-mate Harry Potter, particularly as the threat from Lord Voldemort began to grow.",
        "name": "Dean Thomas",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Supporting West Ham FC",
                    "Hanging out with Seamus"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/dean-thomas",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7tEWxKH0FGXWimjRCIymcf/41650baec08b0c8400c2a1381f7ba332/dean-thomas_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Alicia Spinnet",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Quidditch player",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Chaser"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/alicia-spinnet",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "In his youth, Credence was adopted by the leader of a No-Maj anti-witchcraft group called the New Salem Philanthropic Society, Mary Lou Barebone, who was dedicated to eradicating magic. Credence was subsequently forced to repress his own powers under the watchful eye of his adoptive mother, developing a dark parasitic force, known as an Obscurus. Credence's situation made him an attractive weapon to dark wizard, Grindelwald, and after the death of Mary Lou, Credence would soon learn a lot more about himself and his true family.",
        "name": "Credence",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledores"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "MAGICAL AILMENTS",
                    "Obscurial"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Caring for phoenixes"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/credence",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5ytcGJlR9JmTZmcW3h2rVE/82cde1d6ae4fa1aaa3d6ac4681cfa3b7/credence_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Colin Creevey was a year behind Harry Potter at Hogwarts, but adored the older wizard once they did meet. An enthusiastic Gryffindor, Colin was never to be seen without his camera. Colin's devotion to Harry went beyond numerous photographs, he could often be found following him around asking many, many questions. Two years later, he was joined by his equally adoring brother, Dennis.",
        "name": "Colin Creevey",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Defence Against the Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Taking photos",
                    "Harry Potter"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/colin-creevey",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/25ec4oed5Uk5ru6YdWQcpp/4769124e9066f445952285bba837e83a/colin-creevey_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Salazar Slytherin was one of the four founders of Hogwarts School of Witchcraft and Wizardry and the least open to the idea of non-magical families sending their children to the school. Slytherin was a talented wizard, and skilled in Parseltongue and Legilimency, who favoured students in particular who showed signs of cunning and ambition. As he became more obsessed with the idea of magical purity, he grew away from his fellow founders and was eventually cast out of the school - but not before he was able to hide a dark secret within the walls of the castle. Salazar's dark legacy (and several of his possessions) would pass down his family, such as his locket and ring.",
        "name": "Salazar Slytherin",
        "sidenav": [
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts founder"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Founding of Hogwarts",
                    "Parseltongue"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Seeking out ambitious pure-blood students",
                    "Controlling the Basilisk"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/salazar-slytherin",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/75WJtg1xvq6iaeVJNJ9nDc/e797b43a0a83a8e99b79456143b9ac6e/salazar-slytherin_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Igor Karkaroff was the headmaster of Durmstrang Institute, a wizarding school based in Bulgaria. He travelled to Hogwarts for the Triwizard Tournament where he did everything he could to ensure Durmstrang's champion, Viktor Krum's win. Karkaroff's dark past however, would come back to haunt him.",
        "name": "Igor Karkaroff",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eater",
                    "Durmstrang Institute"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Trying to win the Triwizard Tournament for Durmstrang",
                    "Fleeing from Voldemort",
                    "Turning in other Death Eaters"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/igor-karkaroff",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5S6TcYahFiNEz83rhPiADA/599306784be0284aacc6da3d34e69f6d/igor-karkaroff_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Lavender Brown was a Gryffindor student in the same school year as Harry Potter. Along with best friend and partner in gossiping, Parvati Patil, Lavender loved Divination and firmly believed in being able to tell the future through crystal balls and tea leaves. Lavender shared a dormitory with Hermione Granger but the two never saw eye to eye, particularly when Lavender revealed her romantic interest in Ron Weasley in their sixth year at school.",
        "name": "Lavender Brown",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Divination",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Gossiping with Parvati",
                    "Kissing Ron"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lavender-brown",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/G1hu2LdCagSZgtIzb02G4/adc151f9eb0ec05c458f796f71e20a9f/lavender-brown_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Harry Potter's father, James was happily married to Lily before they were murdered by Lord Voldemort, leaving their only son orphaned.",
        "name": "James Potter",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Marauders",
                    "The Potters"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Seeker",
                    "Animagus",
                    "Creating the Marauder's Map"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Teasing Snape",
                    "Being in love with Lily",
                    "Showing off with a Golden Snitch"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/james-potter",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6GZZDGuiyqlPrMjs4Rtb05/476e379ad2466d323fd5bcebbb3af960/james-potter_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Buckbeak, a male Hippogriff, was brought to Hogwarts by Hagrid to be studied as part of a Care of Magical Creatures class. Like with all Hippogriffs, Buckbeak expected a level of respect when students approached him - and when Draco Malfoy taunted and provoked him, Buckbeak reacted badly and injured him, leading to an investigation by the Ministry. But apart from that, Buckbeak was a helpful and friendly fantastic beast.",
        "name": "Buckbeak",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hagrid",
                    "Sirius"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Flying majestically"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Bowing at people who have shown respect"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/buckbeak",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3QFGThB2e8LExbElV2AtfH/4bd532a9519d304f0a7cbf5b22663212/buckbeak_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A cat-obsessed Squib from Little Whinging. Despite her lack of magical ability she was charged by Albus Dumbledore to keep an eye on Harry Potter during his childhood.",
        "name": "Arabella Figg",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "FULL NAME",
                    "Arabella Doreen Figg"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Squib",
                    "Order of the Phoenix"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Spotting Dementors",
                    "Looking out for Harry"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Talking about her cats",
                    "Showing people photographs of her cats",
                    "Tripping over her cats"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/arabella-figg",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/28pxhzFLwxux4IpxE6NFKA/9c7ccdd51c866842b2628ac2825bbc85/arabella-figg_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Fenrir Greyback was a werewolf notorious for his violence. With a preference for attacking young children, Greyback's mission was to infect as many people as possible in order to create enough werewolves to take power. Aligned with Voldemort, Greyback was responsible for as many deaths and disfigurements as he was werewolf transformations.",
        "name": "Fenrir Greyback",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eater",
                    "Werewolf"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Werewolf strength",
                    "Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Turning others into werewolves"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/fenrir-greyback",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1B5yVXa2cBJCmbLdc5iVTP/1d2b323523af30bc98baef5e4bffd4aa/fenrir-greyback_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Porpentina (or Tina) Goldstein was an American witch who was an Auror for the Magical Congress of the United States of America (MACUSA). After getting in trouble for assaulting a No-Maj (US term for Muggle), Tina was almost fired. That is until she met her future love-interest, Newt Scamander, and became embroiled in the hunt for Gellert Grindelwald.",
        "name": "Tina Goldstein",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "MACUSA"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Auror",
                    "Working for MACUSA",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Tracking down Dark wizards",
                    "Eating hot dogs"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/tina-goldstein",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/Ba5GQK1imfTmTvLXGAbuk/ece1e62a3cbc5d99dd56cec0a3be3bc0/tina-goldstein_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Bunty Broadacre was a British witch who joined Newt Scamander as his assistant after she left Hogwarts. Devoted to Newt's animals as much as she was the man himself, Bunty was so reliable that she even accompanied Dumbledore, Newt and their friends to Bhutan to thwart Grindelwald's attempts to take control of the International Confederation of Wizards.",
        "name": "Bunty Broadacre",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Care of Magical Creatures"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Doting on Newt",
                    "Keeping baby Nifflers in check"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/bunty-broadacre",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4rNn7WwBb6HWBSrCAlamuA/e95e60394ee61ff8d8596b3a15ad6ea5/bunty-broadacre_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Hermione Granger was Harry's and Ron's bookish best friend, a Muggle-born student and one of the smartest witches of her generation. Though incredibly clever, she proved herself a true Gryffindor time and time again, using her courage as well as problem-solving skills in the face of danger, proving vital in the struggle against Lord Voldemort. As Hermione says herself: “Books! And cleverness! There are more important things - friendship and bravery...\"",
        "name": "Hermione Granger",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child",
                    "FULL NAME",
                    "Hermione Jean Granger"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "wand",
                "values": [
                    "Dragon heartstring",
                    "Vine"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledore's Army",
                    "Muggle-borns",
                    "The Weasleys",
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Bluebell flames",
                    "Undetectable Extension Charms",
                    "Using a Time-Turner",
                    "Pretty much all areas of magic..."
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Reading everything in the Hogwarts library",
                    "Caring for Crookshanks",
                    "Campaigning for house-elf rights",
                    "Packing her beaded bag"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/hermione-granger",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Minerva McGonagall was Head of Gryffindor House, a Transfiguration professor and Deputy Headteacher of Hogwarts. Strict but fair, McGonagall took no nonsense from her students but was not afraid to stand up for them in the face of injustice or danger - or on the Quidditch pitch, with the wizarding sport being one of her great passions. McGonagall was a talented Animagus, and her animal form was a tabby cat. Fiercely loyal to Dumbledore, she was the Headmaster's trusted confidant, and loyal member of the Order of the Phoenix.",
        "name": "Minerva McGonagall",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Order of the Phoenix"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Transfiguration",
                    "Duelling",
                    "Animagus"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Quidditch",
                    "Using Piertotum Locomotor"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/minerva-mcgonagall",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/10vCYwsiirHUgywDgQusjO/d9013a685666b7524f791998658765be/minerva-mcgonagall_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Draco Malfoy's father had been a Death Eater and one of Lord Voldemort's closest allies. With his pale, long blonde hair and cold stare, Lucius Malfoy was a striking figure and had no qualms in interfering in Hogwarts matters to make sure he, or Draco, always got what he wanted - and his influence at the Ministry of Magic certainly helped too.",
        "name": "Lucius Malfoy",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eaters",
                    "The Malfoys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Selling to Borgin and Burkes",
                    "Bribing the Ministry of Magic"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/lucius-malfoy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6ammtReL2xKDpxNyx1hsdh/a8b60a9e53a64462f30c0becb63c1239/lucius-malfoy_2_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The formidable Madame Maxime was the headteacher of French wizarding school, Beauxbatons Academy of Magic. She made quite an impression wherever she went, from her fashion to her grandiose personality. Rumoured to be half-giant (although she insisted she was \"big-boned\") Madame Maxime towered over students and teachers alike. The only person comparable in height was Rubeus Hagrid, and the pair went on to become friends.",
        "name": "Olympe Maxime",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Beauxbatons Academy"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Negotiating with Giants"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Dancing with Hagrid"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/olympe-maxime",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6k4yMwKcPVP6u0Tovhvu3Z/d3fe18c7f2ade09c3c9e9d43e0efa8a5/olympe-maxime_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A male phoenix that belonged to Albus Dumbledore, Fawkes lived in the headmaster's office, occasionally combusting into flame and being reborn. This could be disconcerting to a guest (a very startled Harry Potter, for example, who caught Fawkes on \"Burning Day\") if they weren't expecting it. Fawkes was intelligent, kind and brave and could be relied upon to come to the aid of any student in need.",
        "name": "Fawkes",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Albus Dumbledore"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Tears have healing properties",
                    "Flight",
                    "Coming back from the dead",
                    "Can carry immensely heavy loads",
                    "Apparition",
                    "Phoenix song can increase courage, or else strike fear, depending on the purity of the listener's heart"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Delivering Dumbledore's messages"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/fawkes",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5eAzcBk1Gz1rxIcaTPjefa/273f2841b89653ea85004a2abc5575c9/phoenix_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "",
        "name": "Aragog",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Forbidden Forest"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Speaking the language of humans"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Looking after their many many spider children Making humans feel nervous"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/aragog",
        "urlImage": ""
    },
    {
        "category": "character_pets",
        "description": "Katie Bell was a Gryffindor student and a Chaser on the Quidditch team. A loyal supporter of Harry, she narrowly missed out on the team's captaincy to him in their later years at Hogwarts, but insisted that she trial just like everyone else.",
        "name": "Katie Bell",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Quidditch player",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Chaser"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/katie-bell",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7EwfEQpYwtOzuO1ss0U1m4/dad2472611a8a06850ba750c6661f4bf/katie-bell_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Professor Slughorn had been a professor at Hogwarts and Head of Slytherin House before retiring unexpectedly. He returned to Hogwarts at Dumbledore's request where he resumed his passion for 'collecting' the most famous and interesting students at his infamous dinner parties and recruiting them into the exclusive Slug Club. However, whilst Slughorn appeared to be social and outgoing he was actually hiding a dark secret about his own involvement in Voldemort's rise to power.",
        "name": "Horace Slughorn",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Head of Hogwarts house"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Potions",
                    "Tampering with memories",
                    "Handpicking students who later find fame"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Hosting the Slug Club",
                    "Eating crystallised pineapple"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/horace-slughorn",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7FgO5SHmyaRv6uKcEwfdKE/772b561bb758d2c34522a034b01ebc15/horace-slughorn_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "As the mother to seven children and married to Muggle-obsessed Arthur, Molly Weasley was never off her feet. Despite how busy the Burrow was, Molly always made sure there was room for one more, with Harry Potter often on the receiving end of her generosity. She made sure to send him a personalised knitted jumper at Christmas and put him up at their family home when he had nowhere else to go. Molly might have been a whizz in the kitchen but she was also skilled in other areas of magic and would have done anything to protect her family, including duelling the most dangerous witches and wizards.",
        "name": "Molly Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Duelling",
                    "Cooking",
                    "Looking after the Weasleys"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Sending Howlers",
                    "Walks with Arthur Weasley",
                    "Admiring Gilderoy Lockhart",
                    "Listening to Celestina Warbeck"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/molly-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1OANF9OKqCf1gKy4ZKyB8w/16e1b01f32f16e6d346a531efea15f38/molly-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The Ravenclaw pupil played Seeker for her house Quidditch team and dated both Cedric Diggory and Harry Potter. First appearing when Harry was competing in the Triwizard Tournament, Cho was devoted to Hufflepuff's competitor, Cedric. However, following the tragic climax of the competition Cho vowed to fight back against the Dark Arts. Both Harry and Cho were Seekers for their respective Quidditch teams, jostling to win the Snitch. Whilst there could only be one victor on the pitch, once they were off their brooms the pair found they were better together than on opposing teams. However the pressures of fighting Voldemort meant their romance was short lived.",
        "name": "Cho Chang",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Ravenclaw"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Seeker",
                    "Defence Against the Dark Arts"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Supporting the Tutshill Tornados",
                    "Going on awkward dates to Madam Puddifoot's"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/cho-chang",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2etTX5DhYmujFyyePBZlxE/26d0fe01bfc74016de6a893b34faab71/cho-chang_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Arthur Weasley was the father of seven children, including Harry Potter's best friend Ron, and was married to Molly. While during the day he worked at the Ministry of Magic, in his spare time Arthur liked to tinker with artefacts from the non-magical world, resulting in some not-quite 'legal' results - including a legendary flying Ford Anglia! Arthur was a hard-working and loving dad, but his lifelong ambition was to discover how Muggle aeroplanes stayed up.",
        "name": "Arthur Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys",
                    "Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Running the Misuse of Muggle Artefacts Office",
                    "Making cars fly"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Muggles",
                    "Collecting plugs",
                    "Finding loopholes in his own laws"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/arthur-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/236vaiRbp64ixiRmKFerdz/d3c866e5ff96420d1134feee1db340ea/arthur-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The younger brother of Sirius Black, Regulus Arcturus Black (R.A.B) was a Slytherin like most other members of his family. He had initially been a member of Voldemort’s Death Eaters before eventually turning against his master. When he left Voldemort’s ranks, he managed to steal one of Voldemort’s Horcruxes, the Slytherin locket, with the intention of destroying it.",
        "name": "Regulus Black",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Death Eaters The Black family"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch Seeker abilities"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Replacing Horcruxes with fake ones Being good to Kreacher"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/regulus-black",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3U4XQ2QUTBnTWB6MqvfrLe/b35555aca87e6c3b472c3a744627778a/fact-file-hero-regulus-pottermore.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Neville’s ability to lose, forget or break his personal possessions accompanied  with his discomfort under the scrutiny of his teachers meant that he earned himself a reputation as clumsy, shy and even unintelligent. Some even questioned how he had earned his place in Gryffindor. Nevertheless, Neville managed to prove himself one of Hogwarts' bravest students again and again. Willing to stand up against both his friends and his enemies in pursuit of what was right, Neville was a student who more than any other encapsulated the Gryffindor trait of bravery, risking everything for what he believed. A keen Herbologist, Neville also proved that with the right teacher, and passion for the subject, he was far from unintelligent.",
        "name": "Neville Longbottom",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student",
                    "Dumbledore's Army"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Herbology",
                    "Wielding the Sword of Gryffindor",
                    "Destroying Horcruxes"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Tending to his Mimbulus mimbletonia",
                    "Forgetting Gryffindor passwords",
                    "Looking for Trevor"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/neville-longbottom",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/22wGSJctwkiuADi2dzsJfY/03823e4dd3e2d379e3764558680aeda5/neville-longbottom_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Marjorie Eileen Dursley was the older sister of Vernon Dursley. Her hobbies included breeding bulldogs, having strong (yet unrequited feelings) for her neighbour Colonel Fubster, and ‘plain speaking’ – which is what she called being offensive. She was as narrow-minded as her brother and despised Harry, believing him to be the son of two ‘unemployed layabouts’. In contrast, she doted on her nephew, Dudley.",
        "name": "Marge Dursley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "FULL NAME",
                    "Marjorie Dursley",
                    "FAMILY CONNECTIONS/AFFILIATIONS",
                    "The Dursleys Muggles"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Breeding bulldogs"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Setting those bulldogs on Harry Holidaying on the Isle of Wight Spending time with Colonel Fubster"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/marge-dursley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1XFL9FAPlRaTzUdakz5J2c/01c80a834d14fc9b1160e08c3df07dd2/fact-file-hero-marge-hp-f3-drink.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Harry Potter was prophesied to be the downfall of Lord Voldemort and therefore singled out at birth as the Dark Lord's rival. He was known in the wizarding world as 'The Boy Who Lived' after becoming the only known survivor of the Killing Curse, which was attempted by Voldemort when Harry was just a baby, after both his parents were murdered. But despite causing one of the most famous wizarding world events, Harry did not know he was a wizard until his eleventh birthday, due to his Muggle aunt and uncle neglecting to tell him. He would eventually go on to Hogwarts, discover his magical potential, and embark upon several great adventures with his best friends, Ron and Hermione.",
        "name": "Harry Potter",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Harry Potter and the Cursed Child",
                    "FULL NAME",
                    "Harry James Potter"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "wand",
                "values": [
                    "Phoenix feather",
                    "Holly wood"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Dumbledore's Army",
                    "The Potters",
                    "Hogwarts student",
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Casting a Patronus (Stag)",
                    "Casting Expelliarmus",
                    "Defence Against the Dark Arts",
                    "Quidditch Seeker",
                    "Parseltongue"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Using his Invisibility Cloak",
                    "Flying",
                    "Saving the wizarding world"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/harry-potter",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6fjvdemYmo7kJ2V5P5Xqhc/1fc2b0b396123f891e858069e00d0d2b/hp-f6-harry-at-great-hall-table-web-fact-file-image.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "A centaur that lived in the Forbidden Forest close to Hogwarts, Firenze was friendlier than the rest of his herd who were deeply suspicious of the wizarding community. Firenze found himself an outcast when he allowed Harry Potter to ride upon his back. In order to save him from the rest of the colony, Firenze was given a role as Professor of Divination at Hogwarts, where he could teach the students a little of his own understanding of Astrology and how to decipher the world through planetary movements.",
        "name": "Firenze",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Astronomy",
                    "Divination"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Observing stars from the Forbidden Forest."
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/firenze",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/13WkljcpfPvSYvrqiPvkep/c61f02f7d6ca1e499185ccb8d46233ab/firenze_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Gellert Grindelwald’s belief in the superiority of wizards over their Muggle counterparts was controversial in the 1920s, but nevertheless attracted wide support from witches and wizards who were tired of having to hide their magical abilities. Expelled from his school, Durmstrang, for ‘twisted experiments’, Gellert went on to form a close friendship with Albus Dumbledore, and the pair spent many hours seeking out the Deathly Hallows and debating how they might be used to reform the wizarding world. Their friendship was irrevocably destroyed after a tragic accident and whilst Dumbledore worked for good, Grindelwald's path took a darker turn.",
        "name": "Gellert Grindelwald",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "Fantastic Beasts and Where to Find Them",
                    "Fantastic Beasts: The Crimes of Grindelwald",
                    "Fantastic Beasts: The Secrets of Dumbledore"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Durmstrang Institute"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Dark Arts",
                    "Duelling",
                    "Charms",
                    "Transfiguration",
                    "Potions"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Attempting wizard rule over Muggles"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/gellert-grindelwald",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2puPgsfA1lGw9M9jjEKUmE/55c848e484737983992f6420a100dd81/gellert-grindelwald_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Ron Weasley's first owl, Pigwidgeon, or 'Pig' for short, was a tiny Scops owl, gifted by Sirius Black. Although he wasn't big, Pigwidgeon's enthusiasm made up for what he lacked in size and strength. His high energy, show-off nature and impatience meant he was hard to ignore.",
        "name": "Pigwidgeon",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "The Weasleys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Delivering letters"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Simply being very excitable"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/pigwidgeon",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6X2gvzu669DeA6WL1Ji8HI/5818601ef81ac1838d92ed0ba6797893/fact-file-ron-weasley-offering-pigwidgeon-to-crookshanks-PM-B3-illustration-crop.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Madam Poppy Pomfrey was the matron at Hogwarts where she looked after the school's ill and injured students. A highly skilled Healer, Madam Pomfrey faced a number of new and unexpected challenges during her time at the school including Harry's boneless arm and a number of Petrified students. Madam Pomfrey was kind, practical and willing to turn a blind eye to eager visitors keen to see and cheer up their bedridden friends.",
        "name": "Poppy Pomfrey",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Healing",
                    "Potions"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Taking care of the students and teachers of Hogwarts"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/poppy-pomfrey",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1LhtQoaVKkLbwCYsVHdaXN/5876248ab1b52441091bddb8f3672190/poppy-pomfrey_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Nearly Headless Nick, or to give him is official name: Nicholas de Mimsy-Porpington, was the Gryffindor house ghost made famous for the fact that his head was attached to his body by a single flap of skin. As his head wasn't entirely severed from his neck at his beheading, Nick didn't quite qualify for the Headless Hunt - something he spends his afterlife mourning.",
        "name": "Nearly Headless Nick",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts ghost"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Providing direction around Hogwarts",
                    "Distracting Filch"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Reenacting his beheading",
                    "Attempting to join the Headless Hunt",
                    "Throwing parties"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/nearly-headless-nick",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/74mRq3WpRTDj4MVxn8Ip9M/b99f3ec77d268553f2770e3b188bc38d/nearly-headless-nick_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "The eldest of the Weasley children, Bill was both a prefect and a Head Boy and of course a Gryffindor. By the time his youngest brother, Ron had arrived at Hogwarts with Harry Potter, Bill was working for Gringotts bank in Egypt as a curse-breaker. Bill's return to England coincided with the Triwizard Tournament during which he met his future wife, Beauxbatons' Fleur Delacour.",
        "name": "Bill Weasley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "The Weasleys",
                    "Gringotts bank"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Curse-breaking",
                    "Working with goblins",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Impressing Fleur",
                    "Eating rare steaks"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/bill-weasley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4CfsXCLOtFnn0XZRQFcHEn/d1350b3e21be41c5654d81c868391cd4/bill-weasley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Part of the ancient house of Black, Narcissa Malfoy came from a long line of Dark witches and wizards, however it was never confirmed if she herself became a Death Eater, like her husband. Along with Lucius, she brought up their son, Draco to value family status over all else. Sister to Bellatrix Lestrange, Narcissa was deeply embedded in Voldemort's network, although she would have done anything, including betraying the Dark Lord himself, in order to protect her family.",
        "name": "Narcissa Malfoy",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Slytherin"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Death Eaters",
                    "The Malfoys"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Deceiving even Lord Voldemort, who was a skilled Legilimens"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Looking after her son Draco"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/narcissa-malfoy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/595blrWjfGQJ58GAtHDWS1/0a286733d2782d7ef1b74e2a0f13beee/narcissa-malfoy_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Madam Hooch was in charge of flying lessons at Hogwarts and referee of the school's Quidditch matches. Madam Hooch had no time for messing about, particularly with lots of young witches and wizards on broomsticks. Always fair and fast to blow her whistle, Madam Hooch had a lot to contend with as the teams competed for the Quidditch Cup as players battled for points.",
        "name": "Rolanda Hooch",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Flying",
                    "Study of brooms"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Quidditch"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/rolanda-hooch",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4xn7BxXLd1R9CmLSJeczo2/449f57367687e655b426024c5643a4fc/rolanda-hooch_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Caretaker of Hogwarts school, Argus Filch was one of the least popular members of staff. Usually followed by his faithful cat and most effective spy, Mrs Norris, Filch was never far from any students causing mess or trouble and was always keen to dole out punishments for any minor misdemeanour. As a Squib, Filch had no magical abilities of his own and resented the students who found that wandwork came easily to them.",
        "name": "Argus Filch",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts staff",
                    "Squib"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Sniffing out mischief",
                    "Cleaning"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Catching students doing wrong with the help of Mrs Norris",
                    "Battling to have Peeves removed",
                    "Confiscating Weasley products",
                    "Aiding Dolores Umbridge"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/argus-filch",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4geUbY2lgzMP0a6O4w08pX/a19f10fe4f3a88ae11cea171ff761e04/argus-filch_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Viktor Krum was already a Quidditch star when he arrived at Hogwarts for the Triwizard Tournament. Seeker for the Bulgarian national team, he featured in the Quidditch World Cup before travelling as Durmstrang's Champion.",
        "name": "Viktor Krum",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Quidditch player",
                    "Durmstrang Institute"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Quidditch professional Seeker",
                    "Triwizard champion",
                    "Transfiguration (partially...)"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Hanging out in the Hogwarts library, especially when Hermione is there"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/viktor-krum",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/143fKOVtbK2JO07yVgHRuQ/34a38c27913b48c5560f56af98a8a6dc/viktor-krum_3_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "This is one Hufflepuff that contained multitudes. Nymphadora Tonks was a talented Auror, whose mentor was the well-known Mad-Eye Moody. She might have been rather clumsy, almost failing her Stealth and Tracking training, but she still excelled at her job and took the business of defeating Dark wizards further as a member of the Order of the Phoenix. Tonks was also born a Metamorphmagus and had the ability to change her appearance at will – often resulting in some rather funky hairdos.",
        "name": "Nymphadora Tonks",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Hufflepuff",
                    "FAMILY CONNECTIONS/AFFILIATIONS",
                    "The Black family The Order of the Phoenix The Ministry of Magic"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Auror skills Metamorphmagus"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Changing her hair regularly Spending time with Remus Lupin"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/nymphadora-tonks-fact-file",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1ROv5nNUfMdOZVDLLKYdVX/459fbb2d10c63dd676502d1cf06afe90/fact-file-hero-tonks-hp-f5.jpg?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Gryffindor pupil, Seamus Finnigan arrived at Hogwarts from Ireland in the same year as Harry, Ron and Hermione. Best friends with Dean Thomas, the young wizard wasn't always on Harry's side especially when rumours began to form about whether he was always telling the truth, but despite this, he stepped up where it counted and fought bravely when Lord Voldemort made his return.",
        "name": "Seamus Finnigan",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Hogwarts student"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Pyrotechnics"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Supporting Ireland in Quidditch",
                    "Hanging out with Dean"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/seamus-finnigan",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1TjeB4eCdfJmGxumgZhOJO/cd56cc9ff0616adb4b853d70ec3ee904/seamus-finnigan_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Harry Potter's uncle and director of Grunnings drill manufacturing company, Vernon Dursley despised all things magical. He was the proud father of Dudley, a spoilt bully of a boy, and married to Petunia who hated the wizarding world even more than her husband. He very reluctantly agreed to have his nephew come and live with them when he was abandoned as a baby but made certain that young Harry never quite felt part of the family.",
        "name": "Vernon Dursley",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Philosopher's Stone",
                    "Harry Potter and the Chamber of Secrets",
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Half-Blood Prince",
                    "Harry Potter and the Deathly Hallows",
                    "CONNECTIONS",
                    "Muggles"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Hiding Owl post"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Spoiling Dudley",
                    "Denying Harry things"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/vernon-dursley",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/57Qt2pDtvgSd2MLPh18Xmq/5ac51ddd8fc3f1c479f0b3fd69ab4e10/vernon-dursley_1_1800x1248.png?h=416&w=600&fit=pad"
    },
    {
        "category": "character_pets",
        "description": "Coming from one of the oldest (and darkest) of magical families, the rebellious Sirius Black chose not to follow in the footsteps of his other family members, many of whom became Death Eaters. Instead, Black made firm friends with James Potter while at Hogwarts (they were both Gryffindors) and was even made godfather of James' son, Harry, in their later years. Framed for a crime he didn't commit, Sirius was taken to Azkaban prison, but many years later, he would escape, forge a new relationship with Harry and rejoin the fight against Voldemort with the secret organisation, the Order of the Phoenix.",
        "name": "Sirius Black",
        "sidenav": [
            {
                "title": "appearances",
                "values": [
                    "Harry Potter and the Prisoner of Azkaban",
                    "Harry Potter and the Goblet of Fire",
                    "Harry Potter and the Order of the Phoenix",
                    "Harry Potter and the Deathly Hallows"
                ]
            },
            {
                "title": "house",
                "values": [
                    "Gryffindor"
                ]
            },
            {
                "title": "family_affiliation",
                "values": [
                    "Order of the Phoenix",
                    "Marauders",
                    "Azkaban"
                ]
            },
            {
                "title": "skills",
                "values": [
                    "Animagus",
                    "Escaping Azkaban",
                    "Creating the Marauder's Map",
                    "Duelling"
                ]
            },
            {
                "title": "hobbies",
                "values": [
                    "Being godfather to Harry",
                    "Caring for Buckbeak",
                    "Teasing Snape"
                ]
            }
        ],
        "url": "https://www.wizardingworld.com/fact-file/characters-and-pets/sirius-black",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1rDt6sbCaazd6HdREpDR89/1c0fef1570094aadd4fb87230218db07/sirius-black_2_1800x1248.png?h=416&w=600&fit=pad"
    }
]
  ngOnInit() {
    this.firebaseService.getBooks().subscribe(data=>console.log(data))
    console.log("hello")
  }

  addData(){
    console.log("working")
    this.firebaseService.addData(this.data)
  }
}
