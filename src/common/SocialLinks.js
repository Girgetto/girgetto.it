import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandTwitch,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons";
import React from "react";

const style = (bg) => ({
  backgroundColor: bg,
  borderRadius: "50%",
  padding: "10%",
});

const stroke = 1.2;

const color = "white";

const Links = {
  github: {
    name: "Github",
    link: "https://github.com/girgetto",
    icon: (
      <IconBrandGithub
        size={36}
        color={color}
        stroke={stroke}
        strokeLinejoin="miter"
        style={style("black")}
      />
    ),
  },
  twitter: {
    name: "Twitter",
    link: "https://twitter.com/girgettoIT",
    icon: (
      <IconBrandTwitter
        size={36}
        color={color}
        stroke={stroke}
        strokeLinejoin="miter"
        style={style("#00acee")}
      />
    ),
  },
  dev: {
    name: "dev.to",
    link: "https://dev.to/girgetto",
  },
  instagram: {
    name: "Instagram",
    link: "https://instagram.com/girgetto.it",
    icon: (
      <IconBrandInstagram
        size={36}
        color={color}
        stroke={stroke}
        strokeLinejoin="miter"
        style={{
          ...style(),
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90% ",
        }}
      />
    ),
  },
  twitch: {
    name: "Twitch",
    link: "https://www.twitch.tv/girgetto",
    icon: (
      <IconBrandTwitch
        size={36}
        color={color}
        stroke={stroke}
        strokeLinejoin="miter"
        style={style("#6441a5")}
      />
    ),
  },
  youtube: {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UChqlNb3LpXclrYsIXzD2q_w",
    icon: (
      <IconBrandYoutube
        size={36}
        color={color}
        stroke={stroke}
        strokeLinejoin="miter"
        style={style("#c4302b")}
      />
    ),
  },
  stackoverflow: {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/9095807/girgetto",
  },
};

export default Links;
