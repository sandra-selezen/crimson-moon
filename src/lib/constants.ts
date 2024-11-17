import { RiBookOpenFill, RiCheckboxCircleFill, RiHeartFill, RiTimeLine } from "@remixicon/react";

export const sideBarLinks = [
  {
    id: 0,
    title: "Favorites",
    url: "/bookshelves/favorites",
    icon: RiHeartFill,
  },
  {
    id: 3,
    title: "Reading now",
    url: "/bookshelves/reading-now",
    icon: RiBookOpenFill,
  },
  {
    id: 2,
    title: "To read",
    url: "/bookshelves/to-read",
    icon: RiTimeLine,
  },
  {
    id: 4,
    title: "Have read",
    url: "/bookshelves/have-read",
    icon: RiCheckboxCircleFill,
  }
];

// Reading now id: 3
// To read id: 2
// Have read id: 4

// Books for you PRIVATE