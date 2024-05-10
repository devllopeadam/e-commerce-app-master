import { Earphones, Headphones, ProductEarphonesyx1, ProductHeadphonexx59, ProductHeadphonexx99One, ProductHeadphonexx99Two, ProductSpeakerzx7, ProductSpeakerzx9, Speakers, xx59Cart, xx59Galery1, xx59Galery2, xx59Galery3, xx59Like, xx99ICart, xx99IGalery1, xx99IGalery2, xx99IGalery3, xx99IICart, xx99IIGalery1, xx99IIGalery2, xx99IIGalery3, xx99IILike, xx99ILike, yx1Cart, yx1Galery1, yx1Galery2, yx1Galery3, yx1Like, zx7Cart, zx7Galery1, zx7Galery2, zx7Galery3, zx7Like, zx9Cart, zx9Galery1, zx9Galery2, zx9Galery3, zx9Like } from "../assets";

const links = [
  { label: "home", href: "/" },
  { label: "headphones", href: "/headphones" },
  { label: "speakers", href: "/speakers" },
  { label: "earphones", href: "/earphones" },
];

const categories = [
  { name: "HEADPHONES", image: Headphones, href: "/headphones" },
  { name: "SPEAKERS", image: Speakers, href: "/speakers" },
  { name: "EARPHONES", image: Earphones, href: "/earphones" },
];

const productsHeadphones = [
  {
    name: "XX99 MARK II HEADPHONES",
    image: ProductHeadphonexx99Two,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    href: "/headphones/xx99-mark-II-headphone",
    isNew: true,
  },
  {
    name: "XX59 HEADPHONES",
    image: ProductHeadphonexx59,
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    href: "/headphones/xx59-headphone",
    isNew: false,
  },
  {
    name: "XX99 MARK I HEADPHONES",
    image: ProductHeadphonexx99One,
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    href: "/headphones/xx99-mark-I-headphone",
    isNew: false,
  },
];

const productsSpeakers = [
  {
    name: "ZX9 SPEAKER",
    image: ProductSpeakerzx9,
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    href: "/speakers/zx9-speaker",
    isNew: true,
  },
  {
    name: "ZX7 SPEAKER",
    image: ProductSpeakerzx7,
    description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    href: "/speakers/zx7-speaker",
    isNew: false,
  },
];

const productsEarphones = [
  {
    name: "YX1 WIRELESS EARPHONE",
    image: ProductEarphonesyx1,
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    href: "/earphones/yx1-wireless-earphone",
    isNew: true,
  }
];

const products = [
  // Headphones
  {
    name: "XX99 MARK II HEADPHONE",
    textLike: "XX99 MARK II",
    href: "/headphones/xx99-mark-II-headphone",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isNew: true,
    price: "$ 2,999",
    inTheBox: [
      { mount: "1x", property: "Headphone Unit" },
      { mount: "2x", property: "Replacement Earcups" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "3.5mm 5m Audio Cable" },
      { mount: "1x", property: "Travel Bag" },
    ],
    features: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
    ],
    image: ProductHeadphonexx99Two,
    imageOrder: xx99IICart,
    images: [
      xx99IGalery1,
      xx99IGalery2,
      xx99IGalery3,
    ],
    imageLike: xx99IILike
  },
  {
    name: "XX99 MARK I HEADPHONE",
    href: "/headphones/xx99-mark-I-headphone",
    textLike: "XX99 MARK I",
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    isNew: false,
    price: "$ 1,750",
    inTheBox: [
      { mount: "1x", property: "Headphone Unit" },
      { mount: "2x", property: "Replacement Earcups" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "3.5mm 5m Audio Cable" },
    ],
    features: [
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
    ],
    image: ProductHeadphonexx99One,
    imageOrder: xx99ICart,
    images: [
      xx99IIGalery1,
      xx99IIGalery2,
      xx99IIGalery3,
    ],
    imageLike: xx99ILike,
  },
  {
    name: "XX59 HEADPHONE",
    textLike: "XX59",
    href: "/headphones/xx59-headphone",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    isNew: false,
    price: "$ 899",
    inTheBox: [
      { mount: "1x", property: "Headphone Unit" },
      { mount: "2x", property: "Replacement Earcups" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "3.5mm 5m Audio Cable" },
    ],
    features: [
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
    ],
    image: ProductHeadphonexx59,
    imageOrder: xx59Cart,
    images: [
      xx59Galery1,
      xx59Galery2,
      xx59Galery3,
    ],
    imageLike: xx59Like,
  },
  // Speakers
  {
    name: "ZX9 SPEAKER",
    textLike: "ZX9 SPEAKER",
    href: "/speakers/zx9-speaker",
    description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNew: true,
    price: "$ 4,500",
    inTheBox: [
      { mount: "2x", property: "Speaker Unit" },
      { mount: "2x", property: "Speaker Cloth Panel" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "3.5mm 10m Audio Cable" },
      { mount: "1x", property: "10m Optical Cable" },
    ],
    features: [
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
    ],
    image: ProductSpeakerzx9,
    imageOrder: zx9Cart,
    images: [
      zx9Galery1,
      zx9Galery2,
      zx9Galery3,
    ],
    imageLike: zx9Like,
  },
  {
    name: "ZX7 SPEAKER",
    textLike: "ZX7 SPEAKER",
    href: "/speakers/zx7-speaker",
    description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    isNew: false,
    price: "$ 3,500",
    inTheBox: [
      { mount: "2x", property: "Speaker Unit" },
      { mount: "2x", property: "Speaker Cloth Panel" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "3.5mm 10m Audio Cable" },
      { mount: "1x", property: "10m Optical Cable" },
    ],
    features: [
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage",
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
    ],
    image: ProductSpeakerzx7,
    imageOrder: zx7Cart,
    images: [
      zx7Galery1,
      zx7Galery2,
      zx7Galery3,
    ],
    imageLike: zx7Like,
  },
  // Earphones
  {
    name: "YX1 WIRELESS EARPHONE",
    textLike: "YX1 WIRELESS",
    href: "/earphones/yx1-wireless-earphone",
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isNew: true,
    price: "$ 599",
    inTheBox: [
      { mount: "2x", property: "Earphone Unit" },
      { mount: "6x", property: "Multi- Size Earplugs" },
      { mount: "1x", property: "User Manual" },
      { mount: "1x", property: "USB- C Charging Cable" },
      { mount: "1x", property: "Travel Pouch" },
    ],
    features: [
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
    ],
    image: ProductEarphonesyx1,
    imageOrder: yx1Cart,
    images: [
      yx1Galery1,
      yx1Galery2,
      yx1Galery3,
    ],
    imageLike: yx1Like
  }
];



export {
  links,
  categories,
  productsHeadphones,
  productsSpeakers,
  productsEarphones,
  products,
};