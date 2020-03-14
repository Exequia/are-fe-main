export interface BetModel {
    id: number;
    name: string;
    type: TypeBet;
    config: BetConfig;
}

export interface BetConfig {
    private: boolean;
    dateInit: Date;
    dateEnd: Date;
    active: boolean;
}

export enum TypeBet {
    Date,
    Import,
    Number,
    Options,
    Composed
}