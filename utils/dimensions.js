import { Dimensions, Platform } from "react-native";

export const IS_ANDROID = Platform.OS === "android";
export const { height, width } = Dimensions.get("window");

export const ANDROID_STATUSBAR = 24;
export const DEVICE_HEIGHT = IS_ANDROID ? height - ANDROID_STATUSBAR : height;
export const DEVICE_WIDTH = width;

export const IMAGE_WIDTH = DEVICE_WIDTH * 0.65;
