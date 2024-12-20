export interface Content {
  idSite: number;
  idSiteHsr?: number;
  type: string;
  path: string;
}

export interface StyleConfig {
  selector: string;
  styles: { [key: string]: string };
}

export interface JsonEntry {
  selector: string;
  shadowChildSelector?: string;
  classNames?: string;
  elementToApplyStyles?: string | StyleConfig[];
  styles?: { [key: string]: string };
  stylesDes?: { [key: string]: string };
  shadow?: boolean;
  append?: string;
  content: Content;
}

export type ReplaceImgSrc = {
  [idSite: number]: {
    idSiteHsr: number;
    selector: string;
    src: string;
  };
};
