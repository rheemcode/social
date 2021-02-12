// type declaration to keep code dry

// moment can either be a string, number or a Date object
declare type Moment = string | number | (string | number)[] | Date;

export declare interface ActionType {
  type: "CREATE" | "FETCH_ALL" | "UPDATE" | "DELETE" | "LIKE";
  payload: any;
  id: any;
}

export interface PostMessage {
  id?: string | number;
  title?: string;
  message?: string;
  creator?: string;
  tags: string;
  selectedFile?: string;
  likeCount?: number | string | { type: number; default?: 0 };
  createdDate?: Moment;
}
