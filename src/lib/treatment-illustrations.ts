/**
 * Kezelési kategória illusztrációk — poppy bloom design rendszer.
 * Minden kategória a makovskybeauty.hu/szolgaltatasok oldal kártyáihoz tartozik.
 * Használat: import { TREATMENT_ILLUSTRATIONS } from "@/lib/treatment-illustrations";
 */

import biodrogaBioscience from "@/assets/treatments/biodroga-bioscience.jpg";
import gmsBeauty from "@/assets/treatments/gms-beauty.jpg";
import szervzonasMasszazs from "@/assets/treatments/szervzonas-masszazs.jpg";
import arcszepitoMasszazs from "@/assets/treatments/arcszepito-masszazs.jpg";
import meiLuxusrituale from "@/assets/treatments/mei-luxusrituale.jpg";
import brightFormula from "@/assets/treatments/bright-formula.jpg";
import biodrogaOrganic from "@/assets/treatments/biodroga-organic.jpg";
import hipererzekeny from "@/assets/treatments/hipererzekeny.jpg";
import bordiagnosztika from "@/assets/treatments/bordiagnosztika.jpg";
import pluszSzolgaltatasok from "@/assets/treatments/plusz-szolgaltatasok.jpg";
import lagylezer from "@/assets/treatments/lagylezer.jpg";
import japanArcmasszazs from "@/assets/treatments/japan-arcmasszazs.jpg";
import dehidrataltBor from "@/assets/treatments/dehidratalt-bor.jpg";
import biodrogaMedical from "@/assets/treatments/biodroga-medical.jpg";
import rozaCeasBor from "@/assets/treatments/roza-ceas-bor.jpg";
import vagheggiMasszazsok from "@/assets/treatments/vagheggi-masszazsok.jpg";
import ferfiArckezeles from "@/assets/treatments/ferfi-arckezeles.jpg";
import celzottTeruletek from "@/assets/treatments/celzott-teruletek.jpg";
import vagheggiTestkezelesek from "@/assets/treatments/vagheggi-testkezelesek.jpg";
import savasBormegujito from "@/assets/treatments/savas-bormegujito.jpg";
import testmasszazsok from "@/assets/treatments/testmasszazsok.jpg";
import arctisztito from "@/assets/treatments/arctisztito.jpg";
import zsirosSzeborreas from "@/assets/treatments/zsiros-szeborreas.jpg";
import whiteMoon from "@/assets/treatments/white-moon.jpg";
import biodrogaSpa from "@/assets/treatments/biodroga-spa.jpg";
import arkanaNeurokozmetika from "@/assets/treatments/arkana-neurokozmetika.jpg";
import juchheim from "@/assets/treatments/juchheim.jpg";

export interface TreatmentIllustration {
  /** Stabil azonosító (slug-szerű) */
  id: string;
  /** A kategória neve a makovskybeauty.hu/szolgaltatasok oldalról */
  title: string;
  image: string;
  alt: string;
}

export const TREATMENT_ILLUSTRATIONS: TreatmentIllustration[] = [
  { id: "biodroga-bioscience", title: "Biodroga Bioscience arckezelések", image: biodrogaBioscience, alt: "Biodroga Bioscience — molekuláris rózsa illusztráció" },
  { id: "gms-beauty", title: "GMS Beauty Anti-age arctisztító kezelések", image: gmsBeauty, alt: "GMS Beauty — peptidlánc és virágzó virág illusztráció" },
  { id: "szervzonas-masszazs", title: "Szervzónás arcmasszázs", image: szervzonasMasszazs, alt: "Szervzónás arcmasszázs — reflexpontok a hátamon" },
  { id: "arcszepito-masszazs", title: "Arc(sz)építő masszázs", image: arcszepitoMasszazs, alt: "Arc(sz)építő masszázs — lifting vonalak" },
  { id: "mei-luxusrituale", title: "MEI BEAUTY luxusrituálék", image: meiLuxusrituale, alt: "MEI luxusrituálé — bölénygomba és szantálfa" },
  { id: "bright-formula", title: "Bright Formula folthalványító és hámlasztó", image: brightFormula, alt: "Bright Formula — áttetsző hámló rétegek" },
  { id: "biodroga-organic", title: "BIODROGA ORGANIC fitoterápiás", image: biodrogaOrganic, alt: "Biodroga Organic — alchemilla és echinacea" },
  { id: "hipererzekeny", title: "Hiperérzékeny bőr nyugtató kezelése", image: hipererzekeny, alt: "Hiperérzékeny bőr — gyöngyszem nyugtató kezelés" },
  { id: "bordiagnosztika", title: "Gépi bőrdiagnosztika és konzultáció", image: bordiagnosztika, alt: "Bőrdiagnosztika — nagyító és analitikai rács" },
  { id: "plusz-szolgaltatasok", title: "Plusz szolgáltatások — dekoltázs, kézápolás", image: pluszSzolgaltatasok, alt: "Plusz szolgáltatások — kézápolás és dekoltázs" },
  { id: "lagylezer", title: "Lágylézer kezelések", image: lagylezer, alt: "Lágylézer — fényterápia illusztráció" },
  { id: "japan-arcmasszazs", title: "Japán arcmasszázs", image: japanArcmasszazs, alt: "Japán arcmasszázs — enso kör és meridián vonalak" },
  { id: "dehidratalt-bor", title: "Dehidratált bőr kezelései", image: dehidrataltBor, alt: "Dehidratált bőr — vízcseppek hálója" },
  { id: "biodroga-medical", title: "Biodroga Medical Institute bőrfiatalító", image: biodrogaMedical, alt: "Biodroga Medical — egzózóma mikroszkopikus világ" },
  { id: "roza-ceas-bor", title: "Érzékeny, rozáceás bőr kezelései", image: rozaCeasBor, alt: "Rozáceás bőr — Csipkerózsika rózsa" },
  { id: "vagheggi-masszazsok", title: "Különleges Vagheggi arcmasszázsok", image: vagheggiMasszazsok, alt: "Vagheggi arcmasszázsok — levendula és hegyikristály" },
  { id: "ferfi-arckezeles", title: "Férfi arckezelések", image: ferfiArckezeles, alt: "Férfi arckezelés — erős kontúr fenyőággal" },
  { id: "celzott-teruletek", title: "Célzott területek — szem, toka, ajak", image: celzottTeruletek, alt: "Célzott területek — szem és ajak keretezés" },
  { id: "vagheggi-testkezelesek", title: "Vagheggi testkezelések", image: vagheggiTestkezelesek, alt: "Vagheggi testkezelés — szárazkefe body shaping" },
  { id: "savas-bormegujito", title: "Savas bőrmegújító kezelések (EXKLUZÍV)", image: savasBormegujito, alt: "Savas bőrmegújítás — citrom és molakula" },
  { id: "testmasszazsok", title: "Testmasszázsok", image: testmasszazsok, alt: "Testmasszázs — tölgyfa és emelt kanál gyógynövény" },
  { id: "arctisztito", title: "Arctisztító kezelések", image: arctisztito, alt: "Arctisztítás — hab és eukaliptusz" },
  { id: "zsiros-szeborreas", title: "Zsíros, szeborreás bőrök kezelései", image: zsirosSzeborreas, alt: "Zsíros bőr — lótuszlevel és mérleg" },
  { id: "white-moon", title: "Halványító, bőrszín homogenizáló (White Moon)", image: whiteMoon, alt: "White Moon — fénylő hold homogenizáló kezelés" },
  { id: "biodroga-spa", title: "Biodroga Institute SPA kezelések", image: biodrogaSpa, alt: "Biodroga SPA — orchidea és kristály" },
  { id: "arkana-neurokozmetika", title: "Arkana Neurokozmetikai kezelések", image: arkanaNeurokozmetika, alt: "Arkana — neurális háló és molekula" },
  { id: "juchheim", title: "Juchheim kezelések", image: juchheim, alt: "Juchheim — arany selyemfonalak" },
];
