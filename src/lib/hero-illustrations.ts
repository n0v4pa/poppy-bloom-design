/**
 * Hero illusztrációk — poppy bloom design rendszer.
 * Hero szekciók jobb oldalára, a szöveg mellé illeszthető pipacsos grafikák.
 * Használat: import { HERO_ILLUSTRATIONS } from "@/lib/hero-illustrations";
 */

import poppyStem from "@/assets/hero/poppy-hero-01.jpg";
import poppyTrio from "@/assets/hero/poppy-hero-02.jpg";
import poppyAnatomy from "@/assets/hero/poppy-hero-03.jpg";
import poppyField from "@/assets/hero/poppy-hero-04.jpg";
import poppyConcreteCrack from "@/assets/hero/poppy-hero-05.jpg";

export interface HeroIllustration {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export const HERO_ILLUSTRATIONS: HeroIllustration[] = [
  { id: "poppy-stem", title: "Egyszálas pipacs", image: poppyStem, alt: "Botanikus pipacs illusztráció — egyetlen szál, tokkal és levelekkel" },
  { id: "poppy-trio", title: "Pipacs trió", image: poppyTrio, alt: "Három pipacsvirág íves elrendezésben, zsályazöld levelekkel" },
  { id: "poppy-anatomy", title: "Pipacs anatómia", image: poppyAnatomy, alt: "Tudományos pipacs tanulmány — szirom keresztmetszet és magtok" },
  { id: "poppy-field", title: "Pipacsmező", image: poppyField, alt: "Pipacsmező finom vonalrajzban, lágy kör formával a háttérben" },
  { id: "poppy-concrete", title: "Pipacs a betonban", image: poppyConcreteCrack, alt: "Betonrepedésből kinövő pipacs illusztráció" },
];
