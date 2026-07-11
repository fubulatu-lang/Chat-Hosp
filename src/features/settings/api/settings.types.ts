export type ThemeMode =
    | "LIGHT"
    | "DARK"
    | "SYSTEM";

export interface AppSettings {

    hospitalName: string;

    hospitalAddress: string;

    hospitalPhone: string;

    hospitalEmail: string;

    timezone: string;

    language: string;

    currency: string;

    theme: ThemeMode;

    notifications: boolean;

    updatedAt: string;

}
