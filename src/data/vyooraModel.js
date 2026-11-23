export const POST_STATUSES = Object.freeze([
    "idea",
    "draft",
    "scheduled",
    "published",
    "failed"
]);

function createStudioSettings(settings = {}) {
    const copyright = settings.copyright || {};
    return {
        tags: Array.isArray(settings.tags) ? settings.tags.map(String) : [],
        mediaName: String(settings.mediaName ?? ""),
        thumbnailName: String(settings.thumbnailName ?? ""),
        platforms: Array.isArray(settings.platforms) ? settings.platforms.map(String) : [],
        accountsByPlatform: settings.accountsByPlatform
            && typeof settings.accountsByPlatform === "object"
            ? { ...settings.accountsByPlatform }
            : {},
        selectedPlatform: String(settings.selectedPlatform ?? ""),
        format: String(settings.format ?? "short"),
        playlist: String(settings.playlist ?? ""),
        visibility: String(settings.visibility ?? "public"),
        madeForKids: Boolean(settings.madeForKids),
        audience: String(settings.audience ?? "everyone"),
        language: String(settings.language ?? ""),
        location: String(settings.location ?? ""),
        allowComments: settings.allowComments !== false,
        allowRemix: settings.allowRemix !== false,
        paidPromotion: Boolean(settings.paidPromotion),
        productLink: String(settings.productLink ?? ""),
        copyright: {
            status: String(copyright.status ?? ""),
            music: String(copyright.music ?? ""),
            video: String(copyright.video ?? ""),
            caption: String(copyright.caption ?? ""),
            scanned: Boolean(copyright.scanned)
        }
    };
}

export function createPost(post = {}) {
    return {
        id: String(post.id ?? ""),
        parentId: post.parentId ?? null,
        title: String(post.title ?? ""),
        idea: String(post.idea ?? ""),
        script: String(post.script ?? ""),
        caption: String(post.caption ?? ""),
        voiceStyle: String(post.voiceStyle ?? ""),
        status: POST_STATUSES.includes(post.status) ? post.status : "idea",
        scheduledDate: post.scheduledDate == null ? null : String(post.scheduledDate),
        platformVersions: {
            tiktok: post.platformVersions?.tiktok ?? null,
            instagram: post.platformVersions?.instagram ?? null,
            youtube: post.platformVersions?.youtube ?? null,
            facebook: post.platformVersions?.facebook ?? null,
            twitter: post.platformVersions?.twitter ?? null
        },
        studioSettings: createStudioSettings(post.studioSettings),
        hookScore: Math.max(0, Math.min(100, Number(post.hookScore ?? 0))),
        assets: Array.isArray(post.assets) ? [...post.assets] : [],
        metrics: {
            views: Number(post.metrics?.views ?? 0),
            likes: Number(post.metrics?.likes ?? 0),
            comments: Number(post.metrics?.comments ?? 0),
            saves: Number(post.metrics?.saves ?? 0),
            shares: Number(post.metrics?.shares ?? 0)
        },
        campaignId: post.campaignId ?? null,
        createdFrom: String(post.createdFrom ?? "manual")
    };
}

export function isPost(value) {
    return value !== null
        && typeof value === "object"
        && typeof value.id === "string"
        && typeof value.title === "string"
        && typeof value.idea === "string"
        && typeof value.script === "string"
        && typeof value.caption === "string"
        && typeof value.voiceStyle === "string"
        && POST_STATUSES.includes(value.status)
        && (value.scheduledDate === null || typeof value.scheduledDate === "string")
        && value.platformVersions !== null
        && typeof value.platformVersions === "object"
        && Array.isArray(value.assets)
        && value.metrics !== null
        && typeof value.metrics === "object";
}
