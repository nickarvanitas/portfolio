import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface mainMenu extends Array<menu> { }

interface menu {
  name: string;
  type: "menu" | "page" | "icon";
  items?: Array<subMenu>;
  href?: string;
  icon?: IconProp
}

interface subMenu {
  name: string;
  href: string;
}

export const mainMenu: mainMenu =
  [
    {
      "name": "Projects",
      "type": "menu",
      "items": [
        {
          "name": "Create Room",
          "href": "/projects/createroom"
        },
        {
          "name": "MTC Tools",
          "href": "/projects/mtc"
        },
        {
          "name": "Housemate",
          "href": "/projects/housemate"
        },
        {
          "name": "UI Gallery",
          "href": "/projects/gallery"
        }
      ]
    },
    {
      "name": "Contact",
      "href": "/contact",
      "type": "page"
    },
    {
      "name": "About",
      "href": "/about",
      "type": "page"
    },
    {
      "name": "Resume",
      "href": "/resume",
      "type": "page"
    },
    {
      "name": "LinkedIn",
      "href": "https://www.linkedin.com/in/narvanitas/",
      "type": "icon",
      "icon": faLinkedin
    }
  ]