export interface Content {
  idSite: number;
  type: string;
  path: string;
}

export interface JsonEntry {
  selector: string;
  shadowChildSelector?: string;
  classNames?: string;
  elementToApplyStyles?: string;
  styles?: { [key: string]: string };
  stylesDes?: { [key: string]: string };
  shadow?: boolean;
  content: Content;
}
