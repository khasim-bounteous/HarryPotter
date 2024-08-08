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
        "name": "Animagus",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/animagus",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7q8fcr7MRylQSI7P4ieAOu/54bfa136d45bc9264ea2d63fb0554bfb/fact-file-hero-animagus-marauders-animal-form-pottermore-moments.jpg?h=416&w=600&fit=pad",
        "description": "An Animagus (plural: Animagi) is a wizard or witch that can transform into an animal at will. The process is notoriously complicated. If they succeed, the wizard or witch must then register themselves as an Animagus with the Ministry of Magic, although some do not to remain incognito. Illegal Animagi include the Marauders, Sirius Black, James Potter and Peter Pettigrew, who mastered the magic to accompany their friend, Remus Lupin, in his werewolf form. Animagi could sometimes find their Patronus matched their animal form. They may also find that certain characteristics of themselves would transfer on to the animal versions of themselves. For example, Professor McGonagall, a registered Animagus, became a tabby cat, with markings similar to her spectacles.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Minerva McGonagall",
                    "Sirius Black",
                    "James Potter",
                    "Peter Pettigrew",
                    "Rita Skeeter"
                ]
            }
        ]
    },
    {
        "name": "Apparition",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/apparition",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2bhHf2sxGDsquE7OkFZ8YY/02cf606e40ffddfd11143f32073e8bba/fact-file-hero-apparaition-lessons-pottermore-moments.jpg?h=416&w=600&fit=pad",
        "description": "Apparition is a magical practice where a wizard or witch can transport themselves from one location to another. The process of Apparition is supremely difficult, and an exam must be passed for those wishing to do it. There are a number of rules and complications that come with this magic. For example, if a witch or wizard Apparates incorrectly, they risk 'Splinching' themselves, where parts of their body transport to other places. This can be mild (such as leaving half an eyebrow behind) or catastrophic, such as separating themselves from full limbs. There are also rules around where you can Apparate to and from. Famously, you cannot Apparate in or out of the Hogwarts grounds.",
        "category": "magical_miscellany",
        "sidenav": []
    },
    {
        "name": "Astronomy",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/astronomy",
        "urlImage": "",
        "description": "Astronomy focused on the study of stars, moons and planets. Lessons took place in the Astronomy Tower (a perfect place for the students to stargaze through telescopes) and were taught by Professor Sinistra. Classes would involve analysing constellations, creating star charts and learning about planets' different moons and properties.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hogwarts",
                    "The Astronomy Tower",
                    "Charms",
                    "Transfiguration",
                    "Potions",
                    "Herbology"
                ]
            }
        ]
    },
    {
        "name": "Auror",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/auror",
        "urlImage": "",
        "description": "Aurors were highly trained witches and wizards working for the Ministry of Magic as law enforcement officials. With a focus on dark magic, Aurors were highly skilled in Defence Against the Dark Arts as well as how to apprehend and detain dangerous dark witches and wizards. When Harry Potter became involved in defeating Voldemort after his return, he was helped by Aurors such as Nymphadora Tonks, Alastor ‘Mad-Eye’ Moody and Kingsley Shacklebolt, all of whom were willing to risk their lives for the cause they believed in.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Alastor 'Mad-Eye' Moody",
                    "Harry Potter",
                    "Nymphadora Tonks",
                    "Kingsley Shacklebolt"
                ]
            }
        ]
    },
    {
        "name": "Butterbeer",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/butterbeer",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5Ow0nHNGycHy3gWMeY7LD8/07fb55e94f874c2e1066adadda68a6e6/HP-F6-half-blood-prince-horace-slughorn-three-broomsticks-web-landscape?h=416&w=600&fit=pad",
        "description": "Butterbeer was a popular wizarding drink that was served in magical cafes, pubs and shops across the wizarding world. It could either be served warm and foaming in tankards or cold in bottles and tasted like a less-sweet butterscotch. Butterbeer had a slight alcoholic content and although was safe for children to drink, it could affect creatures (such as house-elves) if consumed in to high a quantity. Harry enjoyed his first Butterbeer in Hogsmeade.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hogsmeade",
                    "[The Three Broomsticks](/fact-file/locations/the-three-broomsticks)",
                    "The Hog's Head",
                    "The Leaky Cauldron"
                ]
            }
        ]
    },
    {
        "name": "Care of Magical Creatures",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/care-of-magical-creatures",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2d6c0KF2mLwIlCr7xskOIB/f845a7b4d49e6b350a6b95992cc8dc99/fact-file-hero-care-of-magical-creatures-unicorn-pottermore-moments.jpg?h=416&w=600&fit=pad",
        "description": "Care of Magical Creatures was a Hogwarts lesson that focused on the many different types of animals in the wizarding world, taught outside in the Hogwarts grounds. The class was usually a more practical one than some of the other subjects, where the students would often engage directly with the magical creatures, learning about their habitats, behaviours and eating habits. In Harry Potter's era, he was taught by Professor Hagrid or Professor Grubbly-Plank, and learnt about Hippogriffs, Nifflers and, for better or worse, Flobberworms.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Rubeus Hagrid",
                    "Hippogriff",
                    "Unicorn"
                ]
            }
        ]
    },
    {
        "name": "Charms",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/charms",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3YAxqKY2paq35kY1GJJmQs/fd8a8f1ee03a99808fbbeee7a1bb6d36/the-levitation-charm_3_1800x1248.png?h=416&w=600&fit=pad",
        "description": "Charms was a required class taught at Hogwarts School of Witchcraft and Wizardry. It was compulsory until O.W.L. but useful for most careers to continue up to N.E.W.T. Similarly to Transfiguration, Charms allowed a more creative approach to magic, where students learnt to levitate objects (Wingardium Leviosa), summon things (Accio) or simply make their wand light up (Lumos). Taught by Professor Flitwick in Harry's time at Hogwarts, this class was unpredictable - as part of the first-year exam, for example, Flitwick's class were asked to magically persuade a pineapple to dance off a desk! This didn't stop Hermione Granger somehow getting a hundred and twelve per cent on that exam, however.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Filius Flitwick",
                    "The Shield Charm",
                    "The Wand-Lighting Charm",
                    "The Summoning Charm"
                ]
            }
        ]
    },
    {
        "name": "Chaser",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/chaser",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7wzqu7Xp5KEKtfnzExCqAo/57503d80ff3dab3103e12c084fe578f1/fact-file-hero-chaser-ginny-illustration-pottermore.jpg?h=416&w=600&fit=pad",
        "description": "A Chaser is a position in a Quidditch team, where the player's task is to score goals. There are three Chasers per Quidditch team. The Chasers must guide a large red Quidditch ball called the Quaffle into the goal hoops, scoring ten points at a time. Ginny Weasley was notably a Chaser for both the Gryffindor Quidditch team, and later, the Holyhead Harpies.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Quaffle",
                    "Ginny Weasley",
                    "Angelina Johnson",
                    "Alicia Spinnet",
                    "Katie Bell"
                ]
            }
        ]
    },
    {
        "name": "Dark Arts",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/dark-arts",
        "urlImage": "",
        "description": "Within the Ministry of Magic, the Department for the Regulation and Control of Magical Creatures created a system of rules to determine whether a magical creature was a 'beast or being' and also gave each creature a classification in terms of how dangerous it was - or not! The rating was measured with 'X' being the least dangerous and 'XXXXX' being the most dangerous. So, a Flobberworm, for example, would be rated X, while something far more scary, such as a Chinese Fireball dragon, would be XXXXX.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Lord Voldemort",
                    "Lucius Malfoy",
                    "Peter Pettigrew",
                    "Bellatrix Lestrange"
                ]
            }
        ]
    },
    {
        "name": "Death Eaters",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/death-eaters",
        "urlImage": "",
        "description": "The Death Eaters were Lord Voldemort’s devoted supporters. Made up of radical and malevolent witches and wizards who used Dark magic with reckless abandon, their cruelty, violence and fanaticism made them a deadly and dangerous force. Although the Death Eaters wore masks to avoid detection, they were recognisable by their Dark Mark, a skull with a serpent in its mouth, branded onto their left forearms. After Lord Voldemort’s supposed death in Godric’s Hollow, the Death Eaters fell into disarray, imprisoned in Azkaban or going into hiding. However, wizards including Lucius Malfoy, Bellatrix Lestrange and Peter Pettigrew were quick to announce their continued loyalty upon his return.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Lord Voldemort",
                    "Lucius Malfoy",
                    "Peter Pettigrew",
                    "Bellatrix Lestrange"
                ]
            }
        ]
    },
    {
        "name": "Defence Against the Dark Arts",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/defence-against-the-dark-arts",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/28JOexhc3jCGpXHP9a01sA/3dfb382bcd71ec80ea30a2316ac6adca/dada-1-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "A required class taught at Hogwarts School of Witchcraft and Wizardry, Defence Against the Dark Arts taught students how to defend themselves against all aspects of the Dark Arts including curses, hexes, jinxes and studying Dark magical creatures. There was rumoured to be a jinx on the Hogwarts teaching position as professors didn't tend to last more than a year in the post. During Harry Potter's time at the school, his professors included Quirinus Quirrell, Remus Lupin, Gilderoy Lockhart and Alastor \"Mad Eye\" Moody. However, in later years, less favourable teachers would teach this class in very different ways.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Quirinus Quirrell",
                    "Gilderoy Lockhart",
                    "Remus Lupin",
                    "Alastor \"Mad-Eye\" Moody",
                    "Dolores Umbridge",
                    "Severus Snape",
                    "The Patronus Charm",
                    "The Killing Curse",
                    "The Imperius Curse",
                    "The Cruciatus Curse",
                    "The Boggart-Banishing Charm",
                    "The Disarming Charm"
                ]
            }
        ]
    },
    {
        "name": "Divination",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/divination",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3U4ltfHsoUZL9V3k6s0KUs/7533839fd47ba6eb48a3ee5a9611f849/fact-file-hero-divination-ron-harry-classroom-teacups-f3.jpg?h=416&w=600&fit=pad",
        "description": "The art of Divination is an often divisive subject among witches and wizards, but those that do believe in it enter into an intense study of the great beyond. At Hogwarts, this lesson was taught by Professor Trelawney during Harry Potter's era, and featured several Divination practices such as dream analysis and reading tea leaves. The idea of the class is to encourage students to be able to predict the future, although Hermione Granger criticised the subject as \"woolly\".",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hogwarts",
                    "Sybill Trelawney",
                    "Care of Magical Creatures"
                ]
            }
        ]
    },
    {
        "name": "Duelling",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/duelling",
        "urlImage": "",
        "description": "Duelling was a type of formal combat between two or more witches or wizards – where only magical acts could be used as a form of offence or attack. Before a duel, the opponents would bow to show their mutual respect and then wait for a count of three to start. Although some duels ended in death, students were also able to practice the art of duelling at Hogwarts and it also existed as a competitive sport with rigorous rules about the curses, hexes and charms allowed to be used.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Gilderoy Lockhart",
                    "Severus Snape",
                    "Harry Potter"
                ]
            }
        ]
    },
    {
        "name": "Dumbledore's Army",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/dumbledores-army",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4DXW7drS3KQHl5yP7gEUu8/5d92f06f4412ab4a39ae87add8f31ffb/dumbledores-army-1-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "Also known as the D.A., Dumbledore's Army was an organisation created by Harry Potter, Hermione Granger and Ron Weasley in their fifth year at Hogwarts, intended to teach other students at the school how to defend themselves against the Dark Arts. This secret society became necessary when it was clear that Dolores Umbridge, the fifth year Defence Against the Dark Arts teacher, would not properly teach them anything. The group met in the Room of Requirement and used enchanted coins to communicate with its members. Harry taught the group some of the basics of duelling, such as the Disarming Charm and Impediment Jinx, as well as advanced magic such as the Patronus Charm.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Harry Potter",
                    "Hermione Granger",
                    "Ron Weasley",
                    "Ginny Weasley",
                    "Fred Weasley",
                    "George Weasley",
                    "Lee Jordan",
                    "Neville Longbottom",
                    "Luna Lovegood",
                    "Cho Chang",
                    "Colin Creevey",
                    "Seamus Finnigan",
                    "Dean Thomas",
                    "Parvati Patil",
                    "Padma Patil",
                    "Lavender Brown"
                ]
            }
        ]
    },
    {
        "name": "Dumbledores",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/dumbledores",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3BJZavhBZMxogQwDFJRGvi/d5bb755d86661e1e023a13e1640d8881/albus-dumbledore_2_1800x1248.png?h=416&w=600&fit=pad",
        "description": "The Dumbledores were a well known wizarding family with a mixed history. While Albus Dumbledore went on to achieve unparalleled greatness in the wizarding world, his sister, Ariana, met a tragic end - while his father, Percival, went to Azkaban and his mother, Kendra, also died young. Albus also has a brother, Aberforth, who worked at The Hog's Head in Hogsmeade. The whole family used to live at Godric's Hollow, home to many other famous witches and wizards.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Albus Dumbledore",
                    "Aberforth Dumbledore"
                ]
            }
        ]
    },
    {
        "name": "Ghost",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/ghost",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7KgL8hkCDSsZ6ATg5wJMEL/ec53eb22ce14bf51a534128ed67c5ad0/fact-file-ghosts-pottermore-moments-artwork-crop.jpg?h=416&w=600&fit=pad",
        "description": "Ghosts were spiritual echoes of living people, left behind after they had passed. In Hogwarts, it was common for ghosts to dwell in the castle, as each Hogwarts house had a representative: The Fat Friar for Hufflepuff, Nearly Headless Nick for Gryffindor, The Bloody Baron for Slytherin and The Grey Lady for Ravenclaw. Other ghosts included the History of Magic professor, Cuthbert Binns, who would not be deterred by a little thing like death from teaching his class. Then there was Moaning Myrtle, a former student who haunted a girls' bathroom after dying in tragic circumstances. Although ghosts could talk to the living, they could not physically interact with the living world - but if a student were to accidentally walk through a ghost, they would experience an icy chill.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Nearly Headless Nick",
                    "Cuthbert Binns",
                    "The Grey Lady",
                    "The Fat Friar",
                    "The Bloody Baron",
                    "Moaning Myrtle"
                ]
            }
        ]
    },
    {
        "name": "Gryffindor",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/gryffindor",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2FpHJYJFhT6aPMpIQ8COfE/33d81e3e99d4ec8c1273cfa76c979000/gryffindor-crest-web-fact-file-image.jpg?h=416&w=600&fit=pad",
        "description": "One of the four Hogwarts houses, Gryffindor was founded by Godric Gryffindor and favoured students who possessed characteristics such as courage, bravery and determination. The house colours were scarlet and gold, and the emblematic animal was a lion, which decorated the walls of the Gryffindor common room. Gryffindor alumni included all seven Weasley children, Harry Potter, Hermione Granger, all four Marauders and Albus Dumbledore. Gryffindor students embraced a long held rivalry with Slytherin house although they were largely friendly with Ravenclaw and Hufflepuff students.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Godric Gryffindor",
                    "Nearly Headless Nick",
                    "Minerva McGonagall",
                    "Harry Potter",
                    "Ron Weasley",
                    "Hermione Granger",
                    "Neville Longbottom",
                    "Seamus Finnigan",
                    "Dean Thomas",
                    "Percy Weasley",
                    "Charlie Weasley",
                    "Bill Weasley",
                    "Molly Weasley",
                    "Arthur Weasley",
                    "Fred Weasley",
                    "George Weasley",
                    "Ginny Weasley",
                    "Sirius Black",
                    "Remus Lupin",
                    "James Potter",
                    "Lily Potter",
                    "Peter Pettigrew"
                ]
            }
        ]
    },
    {
        "name": "Head Boy or Head Girl",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/head-boy-or-head-girl",
        "urlImage": "",
        "description": "One male student and one female student were chosen in their final year at Hogwarts to be the Head Boy and Head Girl of the school. Chosen for their academic success, reputation as a student and for their good character, the Head Boy and Girl were tasked with managing the school's Prefects and leading the student body. Head Boys included Tom Riddle, Bill Weasley, Albus Dumbledore and James Potter whilst Lily Evans was Head Girl.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Percy Weasley",
                    "Tom Riddle",
                    "James Potter",
                    "Lily Evans",
                    "Bill Weasley"
                ]
            }
        ]
    },
    {
        "name": "Healing",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/healing",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5B3TsBhHX5epQs29XDcg0d/3320cc480a29614aaaed6175fb4c44c8/fact-file-harry-injured-healing-chamber-of-secrets-madame-pomfrey-hospital-wing-crop.jpg?h=416&w=600&fit=pad",
        "description": "Wizarding approaches to sickness and injury differed from Muggle medicines. Healers were qualified in using healing magic, a mix of potions magical herbs and charms. Hogwarts had its own healing hospital and nurse, Madam Pomfrey, whilst St Mungo's Hospital for Magical Maladies and Injuries was well known as the heart of healing in the wizarding world.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Madam Pomfrey",
                    "St Mungo's Hospital"
                ]
            }
        ]
    },
    {
        "name": "Herbology",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/herbology",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7dCvnuVg5L7MVKBMbslvKt/b9f4e4066ebf161fcf1cc3456f86ca08/fact-file-herbology-pottermore-moments.jpg?h=416&w=600&fit=pad",
        "description": "The study of Herbology at Hogwarts took place in the castle's greenhouses, taught by Professor Sprout. The class focused on the teachings of magical flora and fungi, and the interesting usages of plants and their properties. Significant classes included the introduction of Mandrakes, a baby-like magical plant that could be extracted into a draught to heal a number of magical ailments, including Petrification.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Pomona Sprout",
                    "Neville Longbottom",
                    "Mandrake",
                    "Devil's Snare"
                ]
            }
        ]
    },
    {
        "name": "History of Magic",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/history-of-magic",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6B7QSeby1AmYUI0GBMfTbS/aa5bef9874bfb573d9769ba0e81e1482/fact-file-images-hogwarts-legacy-cuthbert-binns.jpg?h=416&w=600&fit=pad",
        "description": "History of Magic is a Hogwarts lesson that looks at great events of wizarding past. Taught by Professor Binns (who, aptly, is a ghost) the classes were often described as boring by many students, who used the time to take furtive naps. However, the class did teach Harry and his fellow pupils about a number of significant moments across wizarding history, such as the creation of the Chamber of Secrets and the Goblin Rebellions of the eighteenth century. One of the syllabus textbooks for this class was A History of Magic, perhaps one of the most famous tomes studied at Hogwarts, written by Bathilda Bagshot.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Cuthbert Binns"
                ]
            }
        ]
    },
    {
        "name": "Hufflepuff",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/hufflepuff",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1GHlvnfWeIgrFMUdSmLiS5/4d5edf0b1f84866c5f20d96a53faf623/hufflepuff-crest-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "One of the four Hogwarts houses, Hufflepuff was founded by Helga Hufflepuff who valued hard work, patience, loyalty and fairness over any particular aptitude in any of her students. Although Hagrid may have once said, 'everyone says Hufflepuff are a lot o' duffers' they were actually well known to be kind, reliable and honest. The house's colours were black and yellow and its emblem a badger. These colours decorated the walls of Hufflepuff's underground common room, which featured cosy burrow-like rooms, resembling a badger's sett.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Helga Hufflepuff",
                    "The Fat Friar",
                    "Pomona Sprout",
                    "Cedric Diggory",
                    "Newt Scamander"
                ]
            }
        ]
    },
    {
        "name": "Inquisitorial Squad",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/inquisitorial-squad",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/tkVx32Mx1StV3wLte6248/3ceb7ca54c272009ac95bbff903fa496/fact-file-the-inquisitorial-squad-order-of-the-phoenix-crop.jpg?h=416&w=600&fit=pad",
        "description": "Hand-picked by Professor Dolores Umbridge during her time as Headmistress of Hogwarts, the Inquisitorial Squad was a group of students who were given the authority to take points off fellow students in order to ensure compliance amongst the student population. However, as the Inquisitorial Squad was made up entirely of Slytherins, they often abused their power to dock points from the other houses, as well as doling out violent punishment for inconsequential misdemeanours to their peers.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Dolores Umbridge",
                    "Draco Malfoy",
                    "Vincent Crabbe",
                    "Gregory Goyle"
                ]
            }
        ]
    },
    {
        "name": "Keeper",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/keeper",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1syTi7b5Ib5pmNdK6Rfbyl/4a0b519057d814c4f4e47e0a717650f7/fact-file-hero-keeper-ron-f6.jpg?h=416&w=600&fit=pad",
        "description": "A Keeper is a position in a Quidditch team, where the player's task is to block goals from the Chasers. Ron Weasley was a notable Keeper for the Gryffindor Quidditch team, succeeding their old captain, Oliver Wood.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Ron Weasley",
                    "Oliver Wood",
                    "Quaffle"
                ]
            }
        ]
    },
    {
        "name": "Legilimency",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/legilimency",
        "urlImage": "",
        "description": "Legilimency was the ability to access another person's mind and thoughts. Lord Voldemort was known to have this skill, which could be learnt, but some people seemed to be born with it. Queenie Goldstein is an example of someone who had Legilimency as a natural gift. To counter Legilimency, one would learn Occlumency",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Queenie Goldstein",
                    "Lord Voldemort"
                ]
            }
        ]
    },
    {
        "name": "Maledictus",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/maledictus",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4IjD3SUu3aqMqIVHrX6UQy/415f27231ecfdce00fb1e154e5233844/fact-file-hero-nagini-snake-fb-f2.jpg?h=416&w=600&fit=pad",
        "description": "A Maledictus is someone afflicted with a blood curse, in which they will gradually be confined to the body of an animal. Unlike an Animagus, who can transform back and forth from their animal form at will, a Maledictus carries this magic as an illness. A major example of a Maledictus is Nagini, who was originally a witch in 1920s wizarding America, but would ultimately turn into a snake.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Nagini"
                ]
            }
        ]
    },
    {
        "name": "Marauders",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/marauders",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2CWoySex9G28IwmqQ0IDyS/1fe2e83357f72de21246422322cebf03/fact-file-marauders-deleted-scene-crop.jpg?h=416&w=600&fit=pad",
        "description": "The Marauders were four Gryffindor boys who attended Hogwarts School of Witchcraft and Wizardry. James Potter, Sirius Black, Remus Lupin and Peter Pettigrew were firm friends known for their mischief making and inventive wizardry. They were the creators of the Marauder’s Map, an enchanted map of the school that showed the location of every person in Hogwarts, enabling the Marauders to move around the school without detection. The boys also taught themselves to become unregistered Animagi (the magical ability to transform into an animal) to assist Remus Lupin with his monthly Werewolf transformations. They re-named themselves Moony, Wormtail, Padfoot and Prongs in honour of their animal forms.",
        "category": "magical_miscellany",
        "sidenav": []
    },
    {
        "name": "Minister for Magic",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/minister-for-magic",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7IR36VzzLEuMEBCEuvYq2D/3d4d094d57f8d9c95993bb43271560b9/fact-file-hero-minister-fudge-wizengamot-f5.jpg?h=416&w=600&fit=pad",
        "description": "The Minister for Magic holds the most important job in the wizarding community, acting as that country's political leader and the head of the Ministry of Magic. The Minister's job contains multiple responsibilities and immeasurable power, such as being able to introduce legislations and chair the Wizengamot: wizarding Britain's equivalent of the high court of law. The Minister for Magic also had a relationship with the Muggle Prime Minister: although in the case of Cornelius Fudge, it was often an awkward one.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "The Ministry of Magic",
                    "Cornelius Fudge",
                    "Kingsley Shacklebolt"
                ]
            }
        ]
    },
    {
        "name": "Ministry of Magic classifications",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/ministry-of-magic-classifications",
        "urlImage": "",
        "description": "Within the Ministry of Magic, the Department for the Regulation and Control of Magical Creatures created a system of rules to determine whether a magical creature was a 'beast or being' and also gave each creature a classification in terms of how dangerous it was - or not! The rating was measured with 'X' being the least dangerous and 'XXXXX' being the most dangerous. So, a Flobberworm, for example, would be rated X, while something far more scary, such as a Chinese Fireball dragon, would be XXXXX.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "The Ministry of Magic"
                ]
            }
        ]
    },
    {
        "name": "Muggle-borns",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/muggle-borns",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7mT9e00bgHKG8VbqvYhLFI/9c3358cd97d8ecdf8d724856285b02aa/hermione-granger_5_1800x1248.png?h=416&w=600&fit=pad",
        "description": "Occasionally, children were born to Muggle families with magical abilities. These Muggle-born children might be the first of their family to ever exhibit any skills in magic, but were largely accepted by the wizarding world to be of equal talent and worth. Hermione Granger was one witch to prove that students could be of remarkable ability without any magical heritage. Sadly, some wizards and witches only valued \"pure blood\" were prejudiced towards Muggle-borns, and the derogatory term \"Mudblood\" was used to insult them.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hermione Granger",
                    "Lily Potter",
                    "Moaning Myrtle",
                    "Colin Creevey",
                    "Dean Thomas"
                ]
            }
        ]
    },
    {
        "name": "Muggles",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/muggles",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/57Qt2pDtvgSd2MLPh18Xmq/5ac51ddd8fc3f1c479f0b3fd69ab4e10/vernon-dursley_1_1800x1248.png?h=416&w=600&fit=pad",
        "description": "People born into non-magical families with no magical powers were known as Muggles. The wizarding world went to great lengths to ensure that Muggles remained unaware of their community, creating wizarding laws such as the Statute of Secrecy. Some Muggles (such as the UK Prime Minister) were aware of the wizarding community for the good of their job, while Muggles could sometimes produce Muggle-born witches and wizards - children with magical talents. Some prejudiced witches and wizards wanted to change the laws to diminish Muggles status in the world, such as Lord Voldemort and Gellert Grindelwald, and Hogwarts house founder Salazar Slytherin didn't believe in accepting any students who did not possess pure blood.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Vernon Dursley",
                    "Petunia Dursley",
                    "Dudley Dursley"
                ]
            }
        ]
    },
    {
        "name": "N.E.W.T.s",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/n-e-w-t-s",
        "urlImage": "",
        "description": "Nastily Exhausting Wizarding Tests, or N.E.W.T.s, were exams taken in the seventh year of school and determined the career that students might be able to pursue after graduation. Some roles required particular grades, for instance, the Ministry of Magic only accepted Auror applicants with at least five N.E.W.T.s with grades of either Outstanding or Exceeds Expectations.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Charms",
                    "Defence Against the Dark Arts",
                    "Transfiguration",
                    "Divination",
                    "Care of Magical Creatures",
                    "Potions",
                    "Herbology",
                    "Arithmancy"
                ]
            }
        ]
    },
    {
        "name": "O.W.L.s",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/o-w-l-s",
        "urlImage": "",
        "description": "Wizarding post was delivered using owls. Some wizards and witches preferred to use their own personal owls, but the Owl Post Office was also a large and reliable network for owl delivery that offered speedy and safe communication. Owls were responsible for delivery of packages, newspapers and Hogwarts even had their own Owlery for student use. Due to their intelligence, most owls would be able to find the intended recipient of post even if they were not at their address. Harry's snowy owl, Hedwig, was particularly intuitive, and would sometimes fly to Harry's friends to pick up birthday presents on her way back from delivering something.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Charms",
                    "Defence Against the Dark Arts",
                    "Transfiguration",
                    "Divination",
                    "Care of Magical Creatures",
                    "Potions",
                    "Herbology"
                ]
            }
        ]
    },
    {
        "name": "Obscurial",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/obscurial",
        "urlImage": "",
        "description": "When a young witch or wizard suppressed their innate magic, either through will power or as a result of violence or abuse, a powerful parasite could form within that child - a dark energy called an Obscurus. The force is caused by an ‘internalised hatred of one’s own magic’ and can cause death and destruction wherever it goes. Ultimately, an Obscurus and its host could not co-exist and the witch or wizard would likely die young. Credence Barebone was a rare example of a wizard who lived with his condition beyond his childhood.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Credence Ariana Dumbledore"
                ]
            }
        ]
    },
    {
        "name": "Occlumency",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/occlumency",
        "urlImage": "",
        "description": "Occlumency was the act of magically closing the mind against intrusion by Legilimency. Severus Snape attempted to teach Harry Potter how to close his mind to Voldemort but the lessons were fraught and Harry found it hard to completely clear his mind and prevent Snape from using Legilimency to access his thoughts.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Severus Snape",
                    "Lord Voldemort"
                ]
            }
        ]
    },
    {
        "name": "Order of Merlin",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/order-of-merlin",
        "urlImage": "",
        "description": "The Order of Merlin was an award bestowed upon a British witch or wizard by the Wizengamot to commemorate their special achievement for the wizarding world. The award could be either First, Second or Third class depending on the level of contribution to the wizarding community. Albus Dumbledore, Minerva McGonagall and Remus Lupin were all given a First Class Order of Merlin (as was Cornelius Fudge, although his was self-appointed which some felt diminished the value of the award). Gilderoy Lockhart, Harry's Defence the Dark Arts teacher in his second year, was in possession of a Third Class Order of Merlin.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Albus Dumbledore",
                    "Remus Lupin",
                    "Minerva McGonagall",
                    "Cornelius Fudge",
                    "Gilderoy Lockhart"
                ]
            }
        ]
    },
    {
        "name": "Order of the Phoenix",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/order-of-the-phoenix",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/3pqXyBSeJJ61qdUTToYvXl/89504089c63b1101819f3c04618847e3/order-of-the-phoenix_1_1800x1248.png?h=416&w=600&fit=pad",
        "description": "A secret society founded by Dumbledore to oppose Lord Voldemort and his Death Eaters. The original Order was created in the 1970s but came back into existence in 1995 after Lord Voldemort returned following the final task of the Triwizard Tournament. The Order was led by Dumbledore along with Kingsley Shacklebolt and Alastor 'Mad Eye' Moody and their base was  established at twelve Grimmauld Place, the Black family home. During the Second Wizarding War, the Order remained as an underground resistance force.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "James Potter (first Order)",
                    "Lily Potter (first Order)",
                    "Albus Dumbledore (first and second Order)",
                    "Remus Lupin (first and second Order)",
                    "Sirius Black (first and second Order)",
                    "Alastor 'Mad-Eye' Moody (first and second Order)",
                    "Nymphadora Tonks (second Order)",
                    "Kingsley Shacklebolt (second Order)",
                    "Severus Snape (second Order)",
                    "Molly Weasley (second Order)",
                    "Arthur Weasley (second Order)",
                    "Mundungus Fletcher (first and second Order)"
                ]
            }
        ]
    },
    {
        "name": "Owl Post",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/owl-post",
        "urlImage": "",
        "description": "Wizarding post was delivered using owls. Some wizards and witches preferred to use their own personal owls, but the Owl Post Office was also a large and reliable network for owl delivery that offered speedy and safe communication. Owls were responsible for delivery of packages, newspapers and Hogwarts even had their own Owlery for student use. Due to their intelligence, most owls would be able to find the intended recipient of post even if they were not at their address. Harry's snowy owl, Hedwig, was particularly intuitive, and would sometimes fly to Harry's friends to pick up birthday presents on her way back from delivering something.",
        "category": "magical_miscellany",
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
    },
    {
        "name": "Parseltongue",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/parseltongue",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/48oLsdzY4UOo87V2pbibgg/937c4be7c61052bd16a664d2c11a673a/parseltongue-2-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "A rare language spoken by a small number of wizards allowing them to communicate with snakes, the ability to speak Parseltongue was usually inherited with the majority of speakers descended directly from Salazar Slytherin. A notable exception to this rule was Harry Potter, whose ability came from his encounter with Voldemort as a young child. Parseltongue was associated with the Dark Arts and as a result many witches and wizards were suspicious of those with the talent - particularly as to non-speakers the language sounded like a series of snake-like hissing noises. Speakers were known as Parselmouths.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Salazar Slytherin",
                    "Harry Potter",
                    "Slytherin",
                    "Lord Voldemort"
                ]
            }
        ]
    },
    {
        "name": "Potions",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/potions",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4La5OjA9isMlX4HqPTlxVt/3e13616f100cb3f339e2aeea9e2500f9/potions-3-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "A core class (compulsory until O.W.L.) taught at Hogwarts School of Witchcraft and Wizardry, Potions was the study of magical ingredients and brewing potions, taught in the Hogwarts dungeons. Students would study potions such as the Shrinking Solution, Amortentia and the Draught of Peace. Whilst Harry Potter was at Hogwarts, he was largely taught by Severus Snape, followed by Horace Slughorn. Harry’s relationship with Snape was a difficult one and it meant that as a student he never particularly enjoyed Potions lessons very much. Alas, for students like Harry who wanted to become an Auror, Potions was an integral lesson to take forwards to N.E.W.T level.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Severus Snape",
                    "Horace Slughorn",
                    "Polyjuice Potion",
                    "Felix Felicis",
                    "Veritaserum",
                    "Ageing Potion",
                    "Wolfsbane Potion"
                ]
            }
        ]
    },
    {
        "name": "Prefect",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/prefect",
        "urlImage": "",
        "description": "A Prefect at Hogwarts was a student who enjoyed a level of seniority over the other students, complete with a Prefect badge. One male and one female student in their fifth year from each house would be chosen for the role of Prefect, such as Ron and Hermione for Gryffindor in Harry's fifth year. Responsibilities included patrolling the Hogwarts Express, taking and awarding house points and dishing out detentions. Prefect perks included special access to the fancy Prefects' bathroom with the nice taps.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hermione Granger",
                    "Ron Weasley",
                    "Percy Weasley",
                    "Draco Malfoy",
                    "Tom Riddle",
                    "Cedric Diggory"
                ]
            }
        ]
    },
    {
        "name": "Pure-blood",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/pure-blood",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/WfLakhPTW01RbsZIv3VTF/4aeeac09d6d5cc4890c01687edb75f09/fact-file-HP-F2-salazar-slytherin-statue-crop.jpg?h=416&w=600&fit=pad",
        "description": "Pure-blood was a term referencing wizarding families or individuals  descended only from magic, with no Muggles, Squibs or Muggle-born witches or wizards in their family. The concept was first popularised by Salazar Slytherin who campaigned to keep Hogwarts exclusively for pure-blood families. Although this stance became less mainstream, for some families, in particular the Gaunts, Lestranges and Blacks, an adherence to pure bloodlines remained important and they continued to marry within a very small pool. These families tended to be sympathetic to Dark wizards and had a history of support for the likes of Gellert Grindelwald and Lord Voldemort.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "The Weasleys",
                    "The Malfoys",
                    "Lord Voldemort",
                    "Salazar Slytherin"
                ]
            }
        ]
    },
    {
        "name": "Quidditch",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/quidditch",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/bdOH8OAaw9ogf3rL161F6/7c200361049af9a1266f74dd0b05b36c/quidditch-pitch_4_1800x1248.png?h=416&w=600&fit=pad",
        "description": "Quidditch was a wizarding sport played on broomsticks. The teams consisted of seven players competing to score the higher number of points, either by the Chasers (three on each team) scoring goals by throwing a Quaffle through a hoop or by the Seekers (one on each team) catching the Golden Snitch - at which point the game ended. Although the Snitch was worth 150 points, a game could be won the team who did not catch the Snitch if enough goals were scored before it was caught. Chasers and Seekers also had to avoid being hit by Bludgers, hard iron balls that were directed across the pitch by Beaters (two on each team). The final position is the Keeper, who would defend their team's hoops from opposing Chasers. Games were usually played by mixed teams, although the Holyhead Harpies were an all-female professional team.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Broomstick",
                    "Ludo Bagman",
                    "Harry Potter",
                    "Fred Weasley",
                    "George Weasley",
                    "Charlie Weasley",
                    "Ron Weasley",
                    "Ginny Weasley",
                    "The Chudley Cannons"
                ]
            }
        ]
    },
    {
        "name": "Ravenclaw",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/ravenclaw",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/p0d3jvLt7ndev0IPLLjBN/ed400804b0b89dfe58a965f592b12553/ravenclaw-crest-web-fact-file-image.jpg?h=416&w=600&fit=pad",
        "description": "Ravenclaw was one of four Hogwarts houses and prized students whose focus was on learning, wit and wisdom. This reflected the nature of their founder, Rowena Ravenclaw who was known to be a woman of remarkable diligence and intelligence. The Ravenclaw common room was decorated with the house colours of blue and bronze along with their eagle emblem. The students were able to study hard in the rooms that were full of tables and bookcases, although if they were unable to solve the bronze knocker’s riddle they couldn't get in until someone arrived who could!",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Rowena Ravenclaw",
                    "The Grey Lady",
                    "Filius Flitwick",
                    "Cho Chang",
                    "Luna Lovegood",
                    "Gilderoy Lockhart"
                ]
            }
        ]
    },
    {
        "name": "Seeker",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/seeker",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5rNTExGU9w3YnsOJCQU1QL/701bb75a8db7e48358793427027b81f0/fact-file-hero-seeker-harry-catching-snitch-f2.jpg?h=416&w=600&fit=pad",
        "description": "A Seeker is a position in a Quidditch team, where the player's task is to find and catch the Golden Snitch. Seekers are often nimble and quick-thinking, as their role in the game means they don't have to score goals. Instead, they must secure the Snitch and end the game, earning 150 points. Famous Seekers include Viktor Krum, who played for his national team, Bulgaria, and a young Harry Potter, who carried the Gryffindor team to victory at Hogwarts.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Quidditch",
                    "Golden Snitch",
                    "Harry Potter",
                    "Charlie Weasley",
                    "Viktor Krum"
                ]
            }
        ]
    },
    {
        "name": "Slytherin",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/slytherin",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4HoZaEXbZFJDvu3c3KfaQW/d31cd135bd0c209c7da9ef48ad557311/slytherin-crest-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "Slytherin was one of the four Hogwarts houses and was characterised by its silver and green colours and serpent emblem. The Slytherin common room was located in the castle's dungeons. Founded by Salazar Slytherin, the students sent to Slytherin were representative of his preference for characters defined by cunning, pride and ambition. Alas, Salazar's anti-Muggle stance and belief that Hogwarts should be for pure-blooded students only gave the house a poor reputation. Suspicions about the house's connections to the Dark Arts were hard to dispel, particularly as it was the house of Lord Voldemort and boasted a number of Death Eaters and their children. However, Slytherin had a lot of members that contradicted this reputation. For instance, renowned wizard Merlin reigned from Slytherin, and some of the future generations, such as Draco Malfoy's son Scorpius, proved that you could be a Slytherin and still be kind.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Salazar Slytherin",
                    "The Bloody Baron",
                    "Severus Snape",
                    "Draco Malfoy",
                    "Lord Voldemort",
                    "Vincent Crabbe",
                    "Gregory Goyle",
                    "Scorpius Malfoy"
                ]
            }
        ]
    },
    {
        "name": "Squibs",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/squibs",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4geUbY2lgzMP0a6O4w08pX/a19f10fe4f3a88ae11cea171ff761e04/argus-filch_1_1800x1248.png?h=416&w=600&fit=pad",
        "description": "Some children born to wizarding families would never come to display any magical talent or skill whatsoever. Essentially the reverse of Muggle-borns, Squibs were effectively Muggles forced to live in the wizarding world but unable to fully access it, although they were able to see things hidden from normal Muggles. Some children were revealed as late-bloomers rather than Squibs, such as Neville Longbottom, but for others (such as school caretaker Argus Filch) their magic would simply never materialise, which could be hard to accept.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Arabella Figg",
                    "Argus Filch"
                ]
            }
        ]
    },
    {
        "name": "Sybill Trelawney's first prophecy",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/sybill-trelawneys-first-prophecy",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5TjsxzK0sutIhrWxe88i2u/0f79b9cc023ba87dbfbe3c83f8314447/fact-file-sybills-prophecy-crop.jpg?h=416&w=600&fit=pad",
        "description": "Sybill Trelawney's first prophecy was made as she was interviewing for the role of Divination professor at Hogwarts with Albus Dumbledore at the Hog's Head Inn. In a trance, she referred to a boy who would be born with the power to defeat Lord Voldemort, but that neither the boy nor the Dark wizard could live whilst the other survived. Although Voldemort learned of the prophecy, he did not hear it in its entirity and became determined to find the full story at the Department of Mysteries.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Sybill Trelawney",
                    "Lord Voldemort",
                    "Harry Potter",
                    "Albus Dumbledore",
                    "Severus Snape",
                    "Divination"
                ]
            }
        ]
    },
    {
        "name": "The Battle of Hogwarts",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-battle-of-hogwarts",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2M5ugMdwX3i2qmA5ph28kv/2d10e62d54885089b7155aa3f9ae372b/fact-file-hero-battle-of-hogwarts-hp-f8-duel.jpg?h=416&w=600&fit=pad",
        "description": "The Battle of Hogwarts took place in what would've been Harry Potter's seventh year of school, after the ascent of Lord Voldemort reached a dramatic climax. Harry, Ron and Hermione returned to Hogwarts to discover the castle had become a battlefield, with Voldemort's allies (including his Death Eaters and an assortment of Dark magical creatures) set against the staff and students of Hogwarts in an almighty conflict that would go down in wizarding history. The battle claimed many victims on both sides (including members of the Order of the Phoenix, the defensive society created to resist Voldemort) but eventually resulted in the Dark Lord's downfall.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Hogwarts",
                    "Lord Voldemort / Tom Riddle",
                    "Harry Potter",
                    "Horcrux"
                ]
            }
        ]
    },
    {
        "name": "The Black family",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-black-family",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7c7AJZvxvvcmL7RzOgwwVo/817e5fad8a3272f72d5d02dc9a27d07d/fact-file-hero-black-family-tapestry-minalima.jpg?h=416&w=600&fit=pad",
        "description": "The 'Noble and Most Ancient House of Black' were one of the oldest known wizarding families. Like a few others, the family championed age-old values, such as protecting their pure-blood line. This was taken so seriously, that anyone who dared to challenge these ideals were quite literally burnt out of the family tree. Acts that could exile members could range from marrying a Muggle-born, or in the case of Sirius Black, running away from home. Due to the specific whims of pure-blood families, many of them interlink. The Black family, for instance, is closely connected to the Malfoy line, with Bellatrix Lestrange being Sirius's cousin.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Number twelve, Grimmauld Place",
                    "Sirius Black",
                    "Bellatrix Lestrange",
                    "Narcissa Malfoy",
                    "Nymphadora Tonks",
                    "Pure-blood"
                ]
            }
        ]
    },
    {
        "name": "The Chudley Cannons",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-chudley-cannons",
        "urlImage": "",
        "description": "The Chudley Cannons were a professional English Quidditch team that played in the British and Irish Quidditch League. Although the Chudley Cannons had enjoyed huge success in their past, winning the League Cup twenty-one times, their last victory was in 1892. Since then, success had been less forthcoming. As such, the team’s motto 'We Shall Conquer' was changed in 1972 to 'Let's all just keep our fingers crossed and hope for the best.' Ron Weasley was a fan of the Cannons despite their disappointing run of results and had covered his room in posters of the team in their vivid orange robes.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Ron Weasley",
                    "Quidditch"
                ]
            }
        ]
    },
    {
        "name": "The Dark Mark",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-dark-mark",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4TnoWe98IrKbskUu20FSWo/5a68e637e92287e0535c7bf88f7050e6/fact-file-hero-dark-mark-illustration.jpg?h=416&w=600&fit=pad",
        "description": "The Dark Mark was known as Lord Voldemort's sign: an ominous skull with a snake's tongue. Lord Voldemort's followers (known as Death Eaters) typically had this symbol branded on to their forearm, like a tattoo. When touched with a wand, the Dark Mark would turn red and create a burning sensation, able to be felt by every other Death Eater in unison, keeping them all constantly connected. The Dark Mark could also be cast into the sky using the spell Morsmordre, signifying a murder had taken place or a heinous attack. A famous usage of this happened during the Quidditch World Cup, when Death Eaters invaded the campsite where the event was held.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Lord Voldemort / Tom Riddle",
                    "Death Eaters",
                    "Barty Crouch Jr."
                ]
            }
        ]
    },
    {
        "name": "The Gaunt family",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-gaunt-family",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4FCMGcSGaeERLsh7AxRWlM/22595a86b587c2729735753f6ecc72a4/fact-file-hero-gaunt-family-jessica-roux.jpg?h=416&w=600&fit=pad",
        "description": "The Gaunt family (also styled as 'The House of Gaunt') were Lord Voldemort's ancestors and part of Salazar Slytherin's bloodline. Much like many wizards and witches from this lineage, the Gaunt family were pure-blood, and held discriminatory views on the non-magical community. Despite this wealthy and historic heritage, the Gaunts were known to squander their many riches, with the end of the line living out their final years in poverty. Many of the members of this family preferred to speak in Parseltongue (the language of snakes) and frequently practised the Dark Arts. Key members of the Gaunt family included Marvolo Gaunt and his children Morfin and Merope, Voldemort's mother, who died after giving birth.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Salazar Slytherin",
                    "Lord Voldemort / Tom Riddle",
                    "Gaunt's ring"
                ]
            }
        ]
    },
    {
        "name": "The Headless Hunt",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-headless-hunt",
        "urlImage": "",
        "description": "The Headless Hunt was a collection of decapitated ghosts headed up by Sir Patrick Delaney-Podmore. They played headless games such as Horseback Head-Juggling, Headless Bowling and Head Polo. Admittance to the group was strict and Sir Nicholas Mimsy-Porpington was denied membership, as his head was unsatisfactorily removed from his neck due to only a partial decapitation.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Nearly Headless Nick",
                    "Sir Patrick Delaney-Podmore"
                ]
            }
        ]
    },
    {
        "name": "The Hogwarts Express",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/hogwarts-express",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4lzzVBkDMuIVVMmhmANXDf/e9ccfbe9aa39ba8b0b7193c7a406d5b5/fact-file-hogwarts-express-crop.jpg?h=416&w=600&fit=pad",
        "description": "The Hogwarts Express was a scarlet steam engine that took students to Hogwarts School of Witchcraft and Wizardry on the 1st September from Platform Nine and Three-Quarters. The idea of a train came from Minister for Magic of the time, Ottaline Gambol, who was looking for a safer method for children to get to school, as Portkeys could make students sick and the Floo Network was not fully secure.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Harry Potter",
                    "The Trolley Witch",
                    "Draco Malfoy",
                    "Hermione Granger",
                    "Ron Weasley",
                    "Luna Lovegood",
                    "Neville Longbottom",
                    "Dementors"
                ]
            }
        ]
    },
    {
        "name": "The Longbottom family",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-longbottom-family",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4jM3w2JjXkyMckOeVU8jm/7b7397b85e1d2869ef04b0866560588c/fact-file-hero-longbottoms-jessica-roux.jpg?h=416&w=600&fit=pad",
        "description": "The Longbottoms were an ancient wizarding family, making them part of a pure-blood pantheon known as 'The Sacred Twenty-Eight', alongside other historic clans, such as the Malfoys and the Blacks. The most known member is perhaps Neville Longbottom, a Gryffindor student who was an integral part in the fight against Lord Voldemort. His mother and father, Alice and Frank Longbottom, had been tortured to insanity by Lord Voldemort's Death Eaters, living the rest of their days in St Mungo's Hospital, while Neville was raised by his grandmother, Augusta. Despite this tragedy, the couple were known as legends among the wizarding community, contributing valiantly to the first iteration of the Order of the Phoenix - while their son continued to carry their torch.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Neville Longbottom"
                ]
            }
        ]
    },
    {
        "name": "The Malfoys",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-malfoys",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2Ryj6XyHRy2XxamUTDIYRi/005585de3355b0c5ca7e01586ac7ab5c/malfoy-manor_2_1800x1248.png?h=416&w=600&fit=pad",
        "description": "The Malfoys were a pure-blood wizarding family who were one of the Sacred Twenty-Eight - a list of pure-blood wizarding families published in the 1930s. Known for being aligned with the Dark Arts, the Malfoys had a history with Voldemort, with Lucius Malfoy being a Death Eater in You-Know-Who's innermost circle. The Malfoys were intent on claiming power, wealth and influence and these priorities continued to be held throughout the generations - right down to Draco Malfoy, Harry's nemesis at school, who held his father's beliefs on a lot of subjects.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Lucius Malfoy",
                    "Narcissa Malfoy",
                    "Draco Malfoy",
                    "Scorpius Malfoy",
                    "Malfoy Manor"
                ]
            }
        ]
    },
    {
        "name": "The Peverell family",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-peverell-family",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/1vi3gft9D9BsIwEBumG3yV/48936fb4bcb72cb140d7e790566bd220/fact-file-hero-peverells-ignotus-grave.jpg?h=416&w=600&fit=pad",
        "description": "The Peverells were an ancient wizarding family, stemming back centuries, starting with the Peverell brothers. These three brothers, Antioch, Cadmus and Ignotus, were understood to be the subjects of The Tale of the Three Brothers, taken from the classic book, The Tales of Beedle the Bard. In the story, the siblings attempted to outwit Death himself, and secured the three Deathly Hallows as a result; known as the most magical items in the wizarding world. Harry Potter is a descendent of the Peverells and would eventually receive one of the Deathly Hallows (the Invisibility Cloak) as an heirloom.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Xenophilius Lovegood",
                    "Harry Potter",
                    "The Invisibility Cloak",
                    "The Elder Wand",
                    "The Resurrection Stone"
                ]
            }
        ]
    },
    {
        "name": "The Potters",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-potters",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4dLml8FGIb72zs68GAlF6U/b504874dcf6ddb441a1874ff3b1b04b7/the-potters-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "The Potter family were an old wizarding family stemming back many decades, but became particularly well-known when Lord Voldemort targeted Lily and James Potter and their son Harry, who was famously responsible for the Dark Lord's downfall. The Potter family could be traced back a twelfth-century wizard, Linfred of Stinchcombe, who made money inventing magical cures and remedies, a feat replicated by Fleamont Potter, whose invention of Sleekeazy's Hair Potion was sold for a vast profit. Linfred's son, Hardwin married into the Peverell family and inherited the Invisibility Cloak - a remarkable artefact that was unlike any other of its kind - and would ultimately make its way down to Harry Potter.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "James Potter",
                    "Lily Potter",
                    "Harry Potter",
                    "Albus Severus Potter",
                    "James Sirius Potter",
                    "Lily Luna Potter"
                ]
            }
        ]
    },
    {
        "name": "The Slug Club",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-slug-club",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/6lwrAfJIe8p9ANKPRETnEq/1ec03fa049436957791f8faee2f65ffc/fact-file-slug-club-half-blood-prince-crop.jpg?h=416&w=600&fit=pad",
        "description": "The Slug Club was a rather exclusive society set up by Horace Slughorn as a means of collecting his favourite and most interesting pupils during his time at Hogwarts. Members were invited to dinners, drinks receptions and parties in order to mingle with each other - and Professor Slughorn. Harry Potter was inevitably immediately picked out for membership, as was Ginny Weasley, Hermione Granger, Blaise Zabini and Cormac McLaggen, for various reasons. Slughorn attracted an impressive clientele to his gatherings, including a vampire called Sanguini.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Horace Slughorn",
                    "Harry Potter",
                    "Hermione Granger",
                    "Ginny Weasley"
                ]
            }
        ]
    },
    {
        "name": "The Sorting Ceremony",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-sorting-ceremony",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/55NHSyZdKCuM2C6l7A1ENG/c7619725afd4e2cb095fc05ff1540887/fact-file-hero-sorting-ceremony-illustration.jpg?h=416&w=600&fit=pad",
        "description": "The Sorting Ceremony occurs at the start of every new Hogwarts year, sorting the fresh cluster of first-year students into their Hogwarts houses. At the start-of-term feast, the ceremony invites students to wear the Sorting Hat, an ancient piece of sentient headwear that determines if the pupils should belong to Gryffindor, Ravenclaw, Hufflepuff or Slytherin. Once sorted, the student will join their house table, while the festivities continue.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Gryffindor Hufflepuff Ravenclaw Slytherin"
                ]
            }
        ]
    },
    {
        "name": "The Weasleys",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-weasleys",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/5BAWShhwhywEXHgwhzsBIm/57d6b5f6ff9ec7b8597904cdf8f380b5/the-weasleys-3-web-fact-file-images.jpg?h=416&w=600&fit=pad",
        "description": "The Weasley family were a well established wizarding family and were included in the Sacred Twenty-Eight - a list of pure-blood wizarding families published in the 1930s. However, the Weasley family were dismissive of the list and were advocates of equality with Muggle-born witches and wizards. The Weasleys lived in a topsy-turvy rural home, The Burrow, and although they were not wealthy and it was crowded with seven children and constant visitors, there was always room for Harry Potter when he needed a place to stay.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Molly Weasley",
                    "Arthur Weasley",
                    "Bill Weasley",
                    "Charlie Weasley",
                    "Percy Weasley",
                    "Fred Weasley",
                    "George Weasley",
                    "Ron Weasley",
                    "Ginny Weasley",
                    "Rose Granger-Weasley"
                ]
            }
        ]
    },
    {
        "name": "The Wizengamot",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/the-wizengamot",
        "urlImage": "",
        "description": "The Wizengamot served as both wizarding Britain's High Court and their parliament, undertaking both legislative work and legal tribunals. The administrative headquarters were located in the Department of Magical Law Enforcement at the Ministry, whilst trials took place in the the dungeons. Albus Dumbledore was Chief Warlock of the Wizengamot for a time and presided over the council of fifty members, all of whom wore plum-coloured robes embroidered with an elaborately woven silver W on the chest. After Harry Potter produced a Patronus (to defend himself and Dudley Dursley against two Dementors) he was charged with breaching the Decree for the Reasonable Restriction of Underage Sorcery but cleared by the Wizengamot.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Albus Dumbledore",
                    "Aberforth Dumbledore",
                    "Harry Potter"
                ]
            }
        ]
    },
    {
        "name": "Transfiguration",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/transfiguration",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/4jgGaBH5evH2JJBcfIGmHl/f657d862b800798fe86707b62a102841/transfiguration-1-web-fact-file-images.png?h=416&w=600&fit=pad",
        "description": "A required class, compulsory until O.W.L., taught at Hogwarts School of Witchcraft and Wizardry, Transfiguraton was the art of turning one thing into another, changing the form and appearance of an object by altering its very molecular structure. Known as a complex and occasionally dangerous practice, Transfiguration required accurate wand skills and required lots of practice. Whilst at HogwartsHarry Potter and his friends were taught by Minerva McGonagall.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Minerva McGonagall",
                    "Albus Dumbledore"
                ]
            }
        ]
    },
    {
        "name": "Triwizard Tournament",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/triwizard-tournament",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/7wudTRA3LYHOB1rYbPvXsi/bc502051f35dd20e7836ca637cd252e7/fact-file-dumbledore-goblet-of-fire-crop.jpg?h=416&w=600&fit=pad",
        "description": "The Triwizard tournament was a 700 year old competition established between three schools; Hogwarts, Durmstrang and Beauxbatons. One champion from each school was selected to compete in three magical tasks, with their name magically being selected from the Goblet of Fire. The winner of the competition claimed the Triwizard Cup along with a monetary prize. After a hiatus of a number of years, due to a high fatality rate, the Triwizard Tournament returned to Hogwarts during Harry's fourth year at school.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Fleur Delacour",
                    "Cedric Diggory",
                    "Harry Potter",
                    "Viktor Krum",
                    "The Triwizard Cup",
                    "Beauxbatons",
                    "Durmstrang",
                    "Hogwarts"
                ]
            }
        ]
    },
    {
        "name": "Veela",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/veela",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/16JF6sY4qwniCC7OnXNuJE/693657a5bd45587b8f6e98556ae7a444/fact-file-veela-crop.jpg?h=416&w=600&fit=pad",
        "description": "Veelas were semi-human magical beings that appeared as beautiful women with shining white-gold hair and luminous skin. However, when they became angry their appearance shifted and their faces would sharpen and change into beaked bird heads with long scaly wings bursting from their shoulders. Veelas were chosen as the Bulgarian Quidditch team’s mascots during the Quidditch World Cup, where they revealed their true colours as they attacked Ireland’s mascot leprechauns. Later that year in the Triwizard Tournament, part-Veela Fleur Delacour took the competition by storm, impressing people with her magical ability. Her wand even contained a Veela hair.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Fleur Delacour",
                    "The Quidditch World Cup"
                ]
            }
        ]
    },
    {
        "name": "Yule Ball",
        "url": "https://www.wizardingworld.com/fact-file/magical-miscellany/yule-ball",
        "urlImage": "https://images.ctfassets.net/usf1vwtuqyxm/2wnXcpgEh3dq6DOJmimEY7/f5cb7ab34b35f128072630173a5dc919/HP-F4-goblet-of-fire-hermione-krum-dancing-happy-yule-ball-web-landscape?h=416&w=600&fit=pad",
        "description": "The Yule Ball was a formal Christmas dance put on by Hogwarts as a part of the 1994 Triwizard Tournament. Held on Christmas day, the ball required formal dress and for the Triwizard Champions, an extravagant entry and formal dance with a partner. Food was magically summoned on to plates, and the popular band, The Weird Sisters, provided the entertainment. Hermione Granger accepted Viktor Krum's invitation to be his partner whilst Ron Weasley and Harry Potter, in a state of panic, invited Padma and Parvati Patil - both of whom eventually regretted their decision to attend with the boys, as they were a little bit preoccupied throughout the evening.",
        "category": "magical_miscellany",
        "sidenav": [
            {
                "title": "connections",
                "values": [
                    "Harry Potter",
                    "Hogwarts",
                    "The Great Hall",
                    "Viktor Krum",
                    "Fleur Delacour",
                    "Beauxbatons",
                    "Durmstrang"
                ]
            }
        ]
    }
]

  ngOnInit() {
    this.firebaseService.getBooks().subscribe(data=>console.log(data))
  }

  addData(){
    console.log("working")
    this.firebaseService.addData(this.data)
  }
}
