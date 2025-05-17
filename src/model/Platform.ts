export interface Platform {
    id: number;
    slug: string;
    name: string;
};

interface PlatformRequirements {
    minimum: string;
    recommended: string;
}

export interface PlatformObject {
    platform: Platform;
    released_at: string;
    requirements: PlatformRequirements;
}