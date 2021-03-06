import { Color } from "tns-core-modules/color/color";
export declare type ScheduleInterval = "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
export interface NotificationAction {
    id: string;
    id_str?: string;
    type: "button" | "input";
    title?: string;
    launch?: boolean;
    submitLabel?: string;
    placeholder?: string;
    editable?: boolean;
    choices?: Array<string>;
}
export interface ScheduleOptions {
    id?: number;
    id_str?: string;
    title?: string;
    subtitle?: string;
    body?: string;
    ticker?: string;
    at?: Date;
    trigger?: "timeInterval";
    badge?: number;
    sound?: string;
    color?: Color;
    interval?: ScheduleInterval;
    icon?: string;
    silhouetteIcon?: string;
    thumbnail?: boolean | string;
    ongoing?: boolean;
    groupedMessages?: Array<string>;
    groupSummary?: string;
    image?: string;
    bigTextStyle?: boolean;
    notificationLed?: boolean | Color;
    channel?: string;
    forceShowWhenInForeground?: boolean;
    priority?: number;
    actions?: Array<NotificationAction>;
}
export interface ReceivedNotification {
    id: number;
    id_str?: string;
    foreground: boolean;
    title?: string;
    body?: string;
    event?: string;
    response?: string;
}
export interface LocalNotificationsApi {
    schedule(options: ScheduleOptions[]): Promise<Array<number>>;
    addOnMessageReceivedCallback(onReceived: (data: ReceivedNotification) => void): Promise<any>;
    getScheduledIds(): Promise<number[]>;
    cancel(id: number): Promise<boolean>;
    cancelAll(): Promise<any>;
    hasPermission(): Promise<boolean>;
    requestPermission(): Promise<boolean>;
}
export declare abstract class LocalNotificationsCommon {
    protected static defaults: {
        badge: number;
        interval: any;
        ongoing: boolean;
        groupSummary: any;
        bigTextStyle: boolean;
        channel: string;
        forceShowWhenInForeground: boolean;
    };
    protected static merge(obj1: {}, obj2: {}): any;
    protected static generateUUID(): string;
    protected static generateNotificationID(): number;
    protected static ensureID(opts: ScheduleOptions): number;
}
