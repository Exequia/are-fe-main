export interface TimeLineItem {
  id: number;
  type: StudiesType;
  key: string;
  center: string;
  dateInit: string;
  endDate: string;
  qualify?: string;
  comments?: string;
  link?: string;
}

export enum StudiesType {
  All = "",
  Regular = "regular",
  Other = "other"
}
