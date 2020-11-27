import Sunf from "./Images/Profiles/03sunf.png";
import Arang from "./Images/Profiles/arang.png";
import Epist from "./Images/Profiles/epist.png";
import Jsec from "./Images/Profiles/jsec.png";
import Mhibio from "./Images/Profiles/mhibio.png";
import Myria from "./Images/Profiles/myria.png";
import None from "./Images/Profiles/none.png";
import Power from "./Images/Profiles/powerbokchi.png";
import Puel from "./Images/Profiles/puel.png";
import Racrua from "./Images/Profiles/racrua.png";
import Tonix from "./Images/Profiles/tonix.png";
import V4bel from "./Images/Profiles/v4bel.png";
import Zero from "./Images/Profiles/z3r0d4y5.png";
import Topcue from "./Images/Profiles/topcue.png";

const all = {
  jsec: {
    name: "JSec 👑",
    jobs: "Pwn, Leader",
    image: Jsec,
    message: "ㅋㅋㅋㅋㅋㅋㅋ고양이가 말하는거 같네",
    homepage: "https://blog.jsec.xyz/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  epist: {
    name: "epist",
    jobs: "Pwn",
    image: Epist,
    message: "죠아아아앙🤣",
    homepage: "http://epist.xyz/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  mhibio: {
    name: "mhibio",
    jobs: "Pwn",
    image: Mhibio,
    message: "ㅋㅋㅋㅋㅋ 이쁘네요!!",
    homepage: "https://mhibio.github.io/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  racrua: {
    name: "Racrua",
    jobs: "Pwn",
    image: Racrua,
    message: "Hello World!",
    homepage: "https://sunrinjuntae.tistory.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  puel: {
    name: "puel",
    jobs: "Pwn",
    image: Puel,
    message: "Hello World!",
    homepage: "http://blog.hacklog.xyz/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  v4bel: {
    name: "V4bel",
    jobs: "Pwn",
    image: V4bel,
    message: "Hello World!",
    homepage: "https://kimvabel.tistory.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  sunf: {
    name: "03sunf",
    jobs: "Web",
    image: Sunf,
    message: "Hi there🖐",
    homepage: "https://03sunf.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  arang: {
    name: "arang",
    jobs: "Web",
    image: Arang,
    message: "Hello World!",
    homepage: "https://ar9ang3.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  z3r0d4y5: {
    name: "z3r0d4y5",
    jobs: "Reversing",
    image: Zero,
    message: "Hello World!",
    homepage: "https://blog.naver.com/kjug1589",
    facebook: "",
    twitter: "",
    blog: "",
  },
  tonix: {
    name: "tonix",
    jobs: "Reversing",
    image: Tonix,
    message: "Hello World!",
    homepage: "",
    facebook: "",
    twitter: "",
    blog: "",
  },
  powerbokchi: {
    name: "powerbokchi",
    jobs: "Reversing",
    image: Power,
    message: "Hello World!",
    homepage: "https://fir3.tistory.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  myria: {
    name: "myria",
    jobs: "Crypto",
    image: Myria,
    message: "오 ㅋㅋㅋㅋ",
    homepage: "https://xerxes-break.tistory.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  topcue: {
    name: "topcue",
    jobs: "Crypto",
    image: Topcue,
    message: "Hello World!",
    homepage: "https://rond-o.tistory.com/",
    facebook: "",
    twitter: "",
    blog: "",
  },
  none: {
    name: "",
    jobs: "",
    image: None,
    message: "",
    homepage: "",
    facebook: "",
    twitter: "",
    blog: "",
  },
};

const Teams = {
  all: [
    [all.jsec, all.epist, all.racrua, all.mhibio],
    [all.puel, all.v4bel, all.arang, all.sunf],
    [all.z3r0d4y5, all.tonix, all.powerbokchi, all.myria],
    [all.topcue, all.none, all.none, all.none],
  ],
  pwn: [
    [all.jsec, all.epist, all.racrua, all.mhibio],
    [all.puel, all.v4bel, all.none, all.none],
  ],
  web: [[all.arang, all.sunf, all.none, all.none]],
  reversing: [[all.z3r0d4y5, all.tonix, all.powerbokchi, all.none]],
  crypto: [[all.myria, all.topcue, all.none, all.none]],
};

export default Teams;
