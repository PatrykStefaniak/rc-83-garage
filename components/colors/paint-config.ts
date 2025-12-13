export interface PaintType {
    id: string;
    translationKey: string;
    roughness: number;
    metalness: number;
}

export const PAINT_TYPES: PaintType[] = [
    {
        id: "solid",
        translationKey: "colors.paintTypes.solid",
        roughness: 0.6,
        metalness: 0.0,
    },
    {
        id: "metallic",
        translationKey: "colors.paintTypes.metallic",
        roughness: 0.3,
        metalness: 0.8,
    },
    {
        id: "pearlescent",
        translationKey: "colors.paintTypes.pearlescent",
        roughness: 0.25,
        metalness: 0.6,
    },
    {
        id: "matte",
        translationKey: "colors.paintTypes.matte",
        roughness: 0.9,
        metalness: 0.0,
    },
    {
        id: "glossy",
        translationKey: "colors.paintTypes.glossy",
        roughness: 0.15,
        metalness: 0.1,
    },
    {
        id: "chrome",
        translationKey: "colors.paintTypes.chrome",
        roughness: 0.0,
        metalness: 1.0,
    },
    {
        id: "candy",
        translationKey: "colors.paintTypes.candy",
        roughness: 0.2,
        metalness: 0.7,
    },
    {
        id: "chameleon",
        translationKey: "colors.paintTypes.chameleon",
        roughness: 0.3,
        metalness: 0.75,
    },
];

export const COLORS = [
    { id: "red", translationKey: "colors.colors.red", value: "#ff0000" },
    { id: "blue", translationKey: "colors.colors.blue", value: "#0000ff" },
    { id: "green", translationKey: "colors.colors.green", value: "#00ff00" },
    { id: "yellow", translationKey: "colors.colors.yellow", value: "#ffff00" },
    { id: "orange", translationKey: "colors.colors.orange", value: "#ff8800" },
    { id: "purple", translationKey: "colors.colors.purple", value: "#8800ff" },
    { id: "white", translationKey: "colors.colors.white", value: "#ffffff" },
    { id: "black", translationKey: "colors.colors.black", value: "#000000" },
    { id: "silver", translationKey: "colors.colors.silver", value: "#c0c0c0" },
    { id: "gold", translationKey: "colors.colors.gold", value: "#ffd700" },
];
