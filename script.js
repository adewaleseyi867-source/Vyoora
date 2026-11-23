import { createPost } from "./src/data/vyooraModel.js";
import { clearPosts, deletePost, getPosts, savePost, updatePostStatus } from "./src/data/vyooraStore.js";

const STORAGE_KEY = "veltrixa.conversations.v1";

const dashboardView = document.getElementById("dashboard-view");
const chatView = document.getElementById("chat-view");
const studioView = document.getElementById("studio-view");
const contentStudioView = document.getElementById("content-studio-view");
const calendarView = document.getElementById("calendar-view");
const accountsView = document.getElementById("accounts-view");
const settingsView = document.getElementById("settings-view");
const accountsStatus = document.getElementById("accounts-status");
const dashboardConnectedCount = document.getElementById("dashboard-connected-count");
const calendarGrid = document.getElementById("calendar-grid");
const calendarMonth = document.getElementById("calendar-month");
const calendarEmpty = document.getElementById("calendar-empty");
const scheduleAtInput = document.getElementById("schedule-at");
const newContentBtn = document.getElementById("new-content-btn");
const newStudioContentBtn = document.getElementById("new-studio-content-btn");
const creatorForm = document.getElementById("creator-form");
const creatorEmpty = document.getElementById("creator-empty");
const studioDraftList = document.getElementById("studio-draft-list");
const studioDraftEmpty = document.getElementById("studio-draft-empty");
const creatorTitle = document.getElementById("creator-title");
const creatorCaption = document.getElementById("creator-caption");
const creatorCaptionCount = document.getElementById("creator-caption-count");
const creatorMediaInput = document.getElementById("creator-media-file");
const creatorImagePreview = document.getElementById("creator-image-preview");
const creatorVideoPreview = document.getElementById("creator-video-preview");
const creatorMediaPlaceholder = document.getElementById("creator-media-placeholder");
const creatorMediaName = document.getElementById("creator-media-name");
const removeCreatorMediaBtn = document.getElementById("remove-creator-media-btn");
const creatorStatus = document.getElementById("creator-status");
const saveCreatorDraftBtn = document.getElementById("save-creator-draft-btn");
const sendToPublisherBtn = document.getElementById("send-to-publisher-btn");
const creatorPlatformPicker = document.getElementById("creator-platform-picker");
const creatorPreviewPlatform = document.getElementById("creator-preview-platform");
const creatorAccountSelect = document.getElementById("creator-account-select");
const creatorConnectAccountBtn = document.getElementById("creator-connect-account");
const creatorScheduleDate = document.getElementById("creator-schedule-date");
const creatorScheduleTime = document.getElementById("creator-schedule-time");
const creatorTagInput = document.getElementById("creator-tag-input");
const creatorTagsList = document.getElementById("creator-tags-list");
const creatorThumbnailInput = document.getElementById("creator-thumbnail-file");
const creatorThumbnailPreview = document.getElementById("creator-thumbnail-preview");
const creatorThumbnailImage = document.getElementById("creator-thumbnail-image");
const creatorThumbnailName = document.getElementById("creator-thumbnail-name");
const creatorLiveThumbnail = document.getElementById("creator-live-thumbnail");
const creatorMediaLibrarySelect = document.getElementById("studio-media-library-select");
const creatorCopyrightStatus = document.getElementById("creator-copyright-status");
const importStudioBtn = document.getElementById("import-studio-btn");
const previewPlatformSelect = document.getElementById("live-preview-platform-select");
const livePreviewAccountName = document.getElementById("live-preview-account-name");
const livePostPreview = document.getElementById("live-post-preview");
const libraryList = document.getElementById("library-list");
const libraryEmpty = document.getElementById("library-empty");
const studioPreview = document.getElementById("studio-preview");
const previewPlaceholder = document.getElementById("preview-placeholder");
const contentForm = document.getElementById("content-form");
const editTitle = document.getElementById("edit-title");
const editCaption = document.getElementById("edit-caption");
const captionCount = document.getElementById("caption-count");
const editPlatform = document.getElementById("edit-platform");
const publisherAccountPicker = document.getElementById("publisher-account-picker");
const importStudioSelect = document.getElementById("import-studio-select");
const livePreviewPlatformLabel = document.getElementById("live-preview-platform-label");
const livePreviewCaption = document.getElementById("live-preview-caption");
const livePreviewPlaceholder = document.getElementById("live-preview-placeholder");
const livePreviewImage = document.getElementById("live-preview-image");
const livePreviewVideo = document.getElementById("live-preview-video");
const contentVideoFileInput = document.getElementById("content-media-file");
const contentVideoPreview = document.getElementById("content-video-preview");
const contentImagePreview = document.getElementById("content-image-preview");
const contentVideoName = document.getElementById("content-video-name");
const removeContentVideoBtn = document.getElementById("remove-content-video-btn");
const saveContentBtn = document.getElementById("save-content-btn");
const saveDraftBtn = document.getElementById("save-draft-btn");
const markFailedBtn = document.getElementById("mark-failed-btn");
const youtubeDetailsPanel = document.getElementById("youtube-details");
const socialPlatformDetailsHost = document.getElementById("social-platform-details");
const thumbnailSource = document.getElementById("youtube-thumbnail-source");
const thumbnailUrlField = document.getElementById("youtube-thumbnail-url-field");
const thumbnailFileField = document.getElementById("youtube-thumbnail-file-field");
const thumbnailFileInput = document.getElementById("youtube-thumbnail-file");
const thumbnailVideoField = document.getElementById("youtube-thumbnail-video-field");
const thumbnailVideoFileInput = document.getElementById("youtube-thumbnail-video-file");
const thumbnailVideo = document.getElementById("youtube-thumbnail-video");
const captureThumbnailFrame = document.getElementById("youtube-capture-frame");
const thumbnailPreview = document.getElementById("youtube-thumbnail-preview");
const thumbnailImage = document.getElementById("youtube-thumbnail-image");
const thumbnailName = document.getElementById("youtube-thumbnail-name");
const youtubeFields = {
    title: document.getElementById("youtube-title"),
    description: document.getElementById("youtube-description"),
    thumbnailUrl: document.getElementById("youtube-thumbnail"),
    visibility: document.getElementById("youtube-visibility"),
    audience: document.getElementById("youtube-audience"),
    tags: document.getElementById("youtube-tags"),
    category: document.getElementById("youtube-category"),
    language: document.getElementById("youtube-language"),
    license: document.getElementById("youtube-license"),
    comments: document.getElementById("youtube-comments"),
    embedding: document.getElementById("youtube-embedding"),
    notifySubscribers: document.getElementById("youtube-notify")
};
const youtubeLanguageOptions = document.getElementById("youtube-language-options");
const youtubeLanguageCodes = "aa ab ae af ak am an ar as av ay az ba be bg bh bi bm bn bo br bs ca ce ch co cr cs cu cv cy da de dv dz ee el en eo es et eu fa ff fi fj fo fr fy ga gd gl gn gu gv ha he hi ho hr ht hu hy ia id ie ig ii ik io is it iu ja jv ka kg ki kj kk kl km kn ko kr ks ku kv kw ky la lb lg li ln lo lt lu lv mg mh mi mk ml mn mr ms mt my na nb nd ne ng nl nn no nr nv ny oc oj om or os pa pi pl ps pt qu rm rn ro ru rw sa sc sd se sg si sk sl sm sn so sq sr ss st su sv sw ta te te th ti tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa wo xh yi yo za zh zu".split(" ");
if (window.Intl && Intl.DisplayNames) {
    const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
    youtubeLanguageCodes.forEach((code) => {
        const option = document.createElement("option");
        option.value = languageNames.of(code);
        youtubeLanguageOptions.append(option);
    });
}
const schedulePostBtn = document.getElementById("schedule-post-btn");
const publishNowBtn = document.getElementById("publish-now-btn");
const conversationList = document.getElementById("conversation-list");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatStatus = document.getElementById("chat-status");
const navigationButtons = document.querySelectorAll("[data-view]");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const mobileSidebarQuery = window.matchMedia("(max-width: 700px)");
const dashboardOrbit = document.querySelector(".dashboard-orbit");
const socialOrbit = document.querySelector(".social-orbit");

let conversations = [];
let activeConversationId = null;
let storageError = "";
let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

// Let the dashboard's social icons follow a drag, then roll them back on release.
if (dashboardOrbit && socialOrbit) {
    let dragPointerId = null;
    let previousPointerAngle = 0;
    let dragRotation = 0;
    let returnTimer;

    const pointerAngle = (event) => {
        const bounds = dashboardOrbit.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        return Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI;
    };

    dashboardOrbit.addEventListener("pointerdown", (event) => {
        if (!event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
        if (event.target.closest(".orbit-icon")) return;
        clearTimeout(returnTimer);

        const matrix = new DOMMatrixReadOnly(getComputedStyle(socialOrbit).transform);
        dragRotation = Math.atan2(matrix.b, matrix.a) * 180 / Math.PI;
        previousPointerAngle = pointerAngle(event);
        dragPointerId = event.pointerId;
        dashboardOrbit.classList.remove("is-returning");
        dashboardOrbit.classList.add("is-dragging");
        socialOrbit.style.transform = `rotate(${dragRotation}deg)`;
        dashboardOrbit.setPointerCapture(event.pointerId);
    });

    dashboardOrbit.addEventListener("pointermove", (event) => {
        if (event.pointerId !== dragPointerId) return;
        const angle = pointerAngle(event);
        let delta = angle - previousPointerAngle;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        dragRotation += delta;
        previousPointerAngle = angle;
        socialOrbit.style.transform = `rotate(${dragRotation}deg)`;
    });

    const finishOrbitDrag = (event) => {
        if (event.pointerId !== dragPointerId) return;
        dragPointerId = null;
        dashboardOrbit.classList.remove("is-dragging");
        dashboardOrbit.classList.add("is-returning");
        socialOrbit.style.transform = "rotate(0deg)";
        returnTimer = setTimeout(() => {
            dashboardOrbit.classList.remove("is-returning");
            socialOrbit.style.removeProperty("transform");
        }, 600);
    };

    dashboardOrbit.addEventListener("pointerup", finishOrbitDrag);
    dashboardOrbit.addEventListener("pointercancel", finishOrbitDrag);
}

function isConversation(value) {
    return value !== null
        && typeof value === "object"
        && typeof value.id === "string"
        && typeof value.title === "string"
        && typeof value.updatedAt === "number"
        && Array.isArray(value.messages)
        && value.messages.every((message) => message
            && message.role === "user"
            && typeof message.content === "string"
            && typeof message.createdAt === "number");
}

function loadConversations() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === null) {
            return [];
        }

        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed) || !parsed.every(isConversation)) {
            throw new Error("Saved chat history has an unexpected format.");
        }

        return parsed.sort((first, second) => second.updatedAt - first.updatedAt);
    } catch (error) {
        storageError = error instanceof Error ? error.message : "Could not read saved chat history.";
        return [];
    }
}

function saveConversations() {
    if (storageError) {
        throw new Error(`History was not saved: ${storageError}`);
    }

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch (error) {
        const reason = error instanceof Error ? error.message : "Browser storage is unavailable.";
        throw new Error(`History could not be saved: ${reason}`);
    }
}

const statusTimers = new WeakMap();

function setTransientStatus(element, message) {
    const timer = statusTimers.get(element);
    if (timer) {
        clearTimeout(timer);
        statusTimers.delete(element);
    }
    element.classList.remove("is-shaking");
    element.textContent = message;
    if (!message) return;

    void element.offsetWidth;
    element.classList.add("is-shaking");
    statusTimers.set(element, setTimeout(() => {
        if (element.textContent === message) {
            element.textContent = "";
        }
        element.classList.remove("is-shaking");
        statusTimers.delete(element);
    }, 2500));
}

function setStatus(message = "") {
    setTransientStatus(chatStatus, message);
}

function setStudioStatus(message = "") {
    setTransientStatus(document.getElementById("studio-status"), message);
}

function setCreatorStatus(message = "") {
    setTransientStatus(creatorStatus, message);
}

function setSidebarOpen(isOpen) {
    document.body.classList.toggle("sidebar-open", isOpen);
    sidebarToggle.setAttribute("aria-expanded", String(isOpen));
    sidebarToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

setSidebarOpen(!mobileSidebarQuery.matches);
sidebarToggle.addEventListener("click", () => {
    setSidebarOpen(!document.body.classList.contains("sidebar-open"));
});
sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
mobileSidebarQuery.addEventListener("change", (event) => setSidebarOpen(!event.matches));
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("sidebar-open")) {
        setSidebarOpen(false);
    }
});

function showView(viewName) {
    const showChat = viewName === "chat";
    const showPublisher = viewName === "library";
    const showCreator = viewName === "creator";
    const showCalendar = viewName === "calendar";
    const showAccounts = viewName === "accounts";
    const showSettings = viewName === "settings";
    dashboardView.hidden = showChat || showCreator || showPublisher || showCalendar || showAccounts || showSettings;
    chatView.hidden = !showChat;
    contentStudioView.hidden = !showCreator;
    studioView.hidden = !showPublisher;
    calendarView.hidden = !showCalendar;
    accountsView.hidden = !showAccounts;
    settingsView.hidden = !showSettings;
    if (mobileSidebarQuery.matches) {
        setSidebarOpen(false);
    }
    navigationButtons.forEach((button) => {
        const selected = button.dataset.view === viewName;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-current", selected ? "page" : "false");
    });

    if (showChat) {
        renderMessages();
        chatInput.focus();
    }
    if (showCalendar) {
        renderCalendar();
    }
    if (showCreator) {
        renderStudioDrafts();
    }
    if (showPublisher) {
        renderLibrary();
        renderStudioImportOptions();
        renderPublisherAccountPicker();
        renderPublisherCommand();
    }
    if (showAccounts) {
        renderSocialAccounts();
    }
    if (viewName === "dashboard") {
        updateDashboardStats();
    }
}

function activeConversation() {
    return conversations.find((conversation) => conversation.id === activeConversationId) || null;
}

function renderConversationList() {
    conversationList.replaceChildren();

    if (conversations.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.className = "empty-history";
        emptyItem.textContent = storageError ? "History could not be loaded." : "Your conversations will appear here.";
        conversationList.append(emptyItem);
        return;
    }

    conversations.forEach((conversation) => {
        const row = document.createElement("li");
        row.className = "conversation-row";

        const selectButton = document.createElement("button");
        selectButton.type = "button";
        selectButton.className = "conversation-button";
        selectButton.classList.toggle("active", conversation.id === activeConversationId);
        selectButton.textContent = conversation.title;
        selectButton.title = conversation.title;
        selectButton.addEventListener("click", () => {
            activeConversationId = conversation.id;
            setStatus("");
            renderConversationList();
            showView("chat");
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-conversation";
        deleteButton.textContent = "×";
        deleteButton.setAttribute("aria-label", `Delete ${conversation.title}`);
        deleteButton.addEventListener("click", () => deleteConversation(conversation.id));

        row.append(selectButton, deleteButton);
        conversationList.append(row);
    });
}

function renderMessages() {
    chatMessages.replaceChildren();
    const conversation = activeConversation();

    if (!conversation || conversation.messages.length === 0) {
        const empty = document.createElement("div");
        empty.className = "chat-empty";
        const heading = document.createElement("h2");
        heading.textContent = conversation ? "What are we creating today?" : "Let's create something worth sharing.";
        const description = document.createElement("p");
        description.textContent = "Share a post, caption, or campaign idea. Your content is saved in this browser.";
        empty.append(heading, description);
        chatMessages.append(empty);
        return;
    }

    conversation.messages.forEach((message) => {
        const bubble = document.createElement("article");
        bubble.className = "message user";
        const role = document.createElement("span");
        role.className = "message-role";
        role.textContent = "You";
        const content = document.createElement("div");
        content.textContent = message.content;
        bubble.append(role, content);
        chatMessages.append(bubble);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createConversation() {
    const conversation = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        title: "New conversation",
        updatedAt: Date.now(),
        messages: []
    };

    conversations.unshift(conversation);
    activeConversationId = conversation.id;
    setStatus("");
    try {
        saveConversations();
    } catch (error) {
        setStatus(error.message);
    }

    renderConversationList();
    showView("chat");
}

function deleteConversation(conversationId) {
    const previousConversations = conversations;
    conversations = conversations.filter((conversation) => conversation.id !== conversationId);
    if (activeConversationId === conversationId) {
        activeConversationId = null;
    }

    try {
        saveConversations();
        setStatus("");
    } catch (error) {
        conversations = previousConversations;
        setStatus(error.message);
    }

    renderConversationList();
    renderMessages();
}

navigationButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        showView(button.dataset.view);
    });
});

document.querySelectorAll("[data-social-connect]").forEach((button) => {
    button.addEventListener("click", () => {
        addLocalAccount(button.dataset.socialConnect);
    });
});

document.querySelectorAll("[data-open-chat]").forEach((button) => {
    button.addEventListener("click", createConversation);
});

document.getElementById("new-chat-button").addEventListener("click", createConversation);
document.getElementById("chat-new-button").addEventListener("click", createConversation);

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = chatInput.value.trim();
    if (!content) {
        return;
    }

    let conversation = activeConversation();
    if (!conversation) {
        conversation = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            title: "New conversation",
            updatedAt: Date.now(),
            messages: []
        };
        conversations.unshift(conversation);
        activeConversationId = conversation.id;
    }

    conversation.messages.push({ role: "user", content, createdAt: Date.now() });
    if (conversation.title === "New conversation") {
        conversation.title = content.length > 38 ? `${content.slice(0, 38).trimEnd()}…` : content;
    }
    conversation.updatedAt = Date.now();
    conversations.sort((first, second) => second.updatedAt - first.updatedAt);
    chatInput.value = "";

    try {
        saveConversations();
        setStatus("");
    } catch (error) {
        setStatus(error.message);
    }

    renderConversationList();
    renderMessages();
});

conversations = loadConversations();
if (conversations.length > 0) {
    activeConversationId = conversations[0].id;
}
renderConversationList();
if (storageError) {
    setStatus(`History could not be loaded: ${storageError}`);
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function isContentItem(value) {
    return value !== null
        && typeof value === "object"
        && typeof value.id === "string"
        && typeof value.title === "string"
        && typeof value.platform === "string"
        && typeof value.content === "string"
        && typeof value.status === "string"
        && typeof value.updatedAt === "number";
}

function loadContentItems() {
    try {
        const saved = localStorage.getItem("veltrixa.content.v1");

        if (saved === null) return [];

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed) || !parsed.every(isContentItem)) {
            throw new Error("Saved content library has an unexpected format.");
        }

        return parsed.sort((a, b) => b.updatedAt - a.updatedAt);

    } catch (error) {
        console.error("Content loading error:", error);
        return [];
    }
}

function saveContentItems() {
    try {
        localStorage.setItem(
            "veltrixa.content.v1",
            JSON.stringify(contentItems)
        );
    } catch (error) {
        throw new Error("Content could not be saved.");
    }
}

function loadConnectedAccounts() {
    try {
        const saved = localStorage.getItem("veltrixa.socialAccounts.v1");
        if (saved === null) return [];
        const parsed = JSON.parse(saved);
        const validPlatforms = new Set(["facebook", "instagram", "linkedin", "snapchat", "tiktok", "twitter", "youtube"]);
        if (!Array.isArray(parsed) || !parsed.every((account) =>
            account && typeof account.id === "string"
            && validPlatforms.has(account.platform)
            && typeof account.name === "string")) {
            throw new Error("Saved social accounts have an unexpected format.");
        }
        return parsed;
    } catch (error) {
        console.error("Social account loading error:", error);
        return [];
    }
}

function saveConnectedAccounts() {
    try {
        localStorage.setItem("veltrixa.socialAccounts.v1", JSON.stringify(connectedAccounts));
    } catch (error) {
        throw new Error("Social accounts could not be saved.");
    }
}

let studioItems = getPosts().filter((post) => ["idea", "draft"].includes(post.status));
let contentItems = [];
let activeContentId = null;
let activeStudioId = null;
let activeStudioPost = null;
let studioMediaFile = null;
let studioThumbnailBlob = null;
let studioThumbnailName = "";
let studioThumbnailObjectUrl = null;
let studioThumbnailRemovalPending = false;
let studioTags = [];
let studioAccountsByPlatform = {};
let studioCopyrightTimer = null;
let thumbnailObjectUrl = null;
let thumbnailVideoUrl = null;
let contentVideoObjectUrl = null;
let studioMediaObjectUrl = null;
let contentVideoRemovalPending = false;
let studioMediaRemovalPending = false;
const sessionThumbnails = new Map();
const publisherThumbnailUrls = [];
const platformNames = {
    tiktok: "TikTok",
    youtube: "YouTube",
    instagram: "Instagram",
    facebook: "Facebook",
    twitter: "X",
    snapchat: "Snapchat",
    linkedin: "LinkedIn"
};
let connectedAccounts = loadConnectedAccounts();
const socialPlatformSchemas = {
    instagram: [
        { key: "format", label: "Post format", options: [["reel", "Reel"], ["feed", "Feed post"], ["story", "Story"], ["carousel", "Carousel"]], default: "reel" },
        { key: "audience", label: "Audience", options: [["public", "Public"], ["close-friends", "Close Friends"]], default: "public" },
        { key: "allowComments", label: "Allow comments", type: "checkbox", default: true },
        { key: "hideLikeCount", label: "Hide like count", type: "checkbox", default: false },
        { key: "brandedContent", label: "Branded content disclosure", type: "checkbox", default: false },
        { key: "location", label: "Location", type: "text", placeholder: "Add a location" },
        { key: "collaborators", label: "Collaborators", type: "text", placeholder: "Add collaborator usernames" }
    ],
    tiktok: [
        { key: "format", label: "Post format", options: [["video", "Video"], ["photo", "Photo"], ["story", "Story"]], default: "video" },
        { key: "privacy", label: "Who can view", options: [["everyone", "Everyone"], ["friends", "Friends"], ["only-you", "Only you"]], default: "everyone" },
        { key: "allowComments", label: "Allow comments", type: "checkbox", default: true },
        { key: "allowDuet", label: "Allow Duet", type: "checkbox", default: true },
        { key: "allowStitch", label: "Allow Stitch", type: "checkbox", default: true },
        { key: "brandedContent", label: "Content disclosure (brand or business promotion)", type: "checkbox", default: false },
        { key: "aiGenerated", label: "AI-generated content disclosure", type: "checkbox", default: false }
    ],
    facebook: [
        { key: "format", label: "Post format", options: [["video", "Video"], ["reel", "Reel"], ["story", "Story"], ["photo", "Photo post"]], default: "video" },
        { key: "audience", label: "Audience", options: [["public", "Public"], ["friends", "Friends"], ["only-you", "Only me"]], default: "public" },
        { key: "allowComments", label: "Allow comments", type: "checkbox", default: true },
        { key: "brandedContent", label: "Paid partnership disclosure", type: "checkbox", default: false },
        { key: "location", label: "Location", type: "text", placeholder: "Add a location" }
    ],
    snapchat: [
        { key: "format", label: "Post format", options: [["spotlight", "Spotlight"], ["public-story", "Public Story"], ["story", "My Story"]], default: "spotlight" },
        { key: "description", label: "Spotlight description or topic", type: "text", placeholder: "Add a description or #topic" },
        { key: "location", label: "Location", type: "text", placeholder: "Add a location" },
        { key: "shareToStory", label: "Also share to Story", type: "checkbox", default: false },
        { key: "allowRemix", label: "Allow others to remix", type: "checkbox", default: false },
        { key: "showOnPublicProfile", label: "Show on Public Profile", type: "checkbox", default: false }
    ],
    twitter: [
        { key: "format", label: "Post format", options: [["post", "Post"], ["video", "Video post"]], default: "post" },
        { key: "replyAudience", label: "Who can reply", options: [["everyone", "Everyone"], ["following", "Accounts you follow"], ["mentioned", "Only accounts you mention"], ["verified", "Verified accounts"]], default: "everyone" },
        { key: "allowVideoDownloads", label: "Allow video downloads", type: "checkbox", default: true },
        { key: "altText", label: "Media alt text", type: "text", placeholder: "Describe media for accessibility" }
    ],
    linkedin: [
        { key: "format", label: "Post format", options: [["video", "Video"], ["post", "Text post"]], default: "video" },
        { key: "audience", label: "Audience", options: [["anyone", "Anyone"], ["connections", "Connections"]], default: "anyone" },
        { key: "comments", label: "Comment control", options: [["anyone", "Anyone"], ["no-one", "No one"]], default: "anyone" },
        { key: "autoCaptions", label: "Use automatic captions for video", type: "checkbox", default: true },
        { key: "altText", label: "Media alt text", type: "text", placeholder: "Describe media for accessibility" }
    ]
};

function buildSocialPlatformDetails() {
    Object.entries(socialPlatformSchemas).forEach(([platform, fields]) => {
        const panel = document.createElement("section");
        panel.className = "social-details-panel";
        panel.dataset.platform = platform;
        panel.hidden = true;
        const heading = document.createElement("h3");
        heading.textContent = `${platformNames[platform]} details`;
        panel.append(heading);

        fields.forEach((field) => {
            const wrapper = document.createElement("div");
            wrapper.className = "preview-field";
            const id = `social-${platform}-${field.key}`;
            if (field.type === "checkbox") {
                const label = document.createElement("label");
                label.className = "youtube-checkbox";
                const input = document.createElement("input");
                input.type = "checkbox";
                input.id = id;
                input.dataset.setting = field.key;
                label.append(input, document.createTextNode(` ${field.label}`));
                wrapper.append(label);
            } else {
                const label = document.createElement("label");
                label.htmlFor = id;
                label.textContent = field.label;
                let input;
                if (field.options) {
                    input = document.createElement("select");
                    field.options.forEach(([value, text]) => {
                        const option = document.createElement("option");
                        option.value = value;
                        option.textContent = text;
                        input.append(option);
                    });
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                    input.placeholder = field.placeholder || "";
                }
                input.id = id;
                input.dataset.setting = field.key;
                wrapper.append(label, input);
            }
            panel.append(wrapper);
        });
        socialPlatformDetailsHost.append(panel);
    });
}

buildSocialPlatformDetails();

function selectedPlatforms() {
    return [...editPlatform.querySelectorAll("input[type='checkbox']:checked")]
        .map((checkbox) => checkbox.value);
}

function setSelectedPlatforms(platforms) {
    const selected = new Set(platforms);
    editPlatform.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = selected.has(checkbox.value);
    });
    renderPublisherAccountPicker();
}

function itemPlatforms(item) {
    return Array.isArray(item.platforms) && item.platforms.length
        ? item.platforms
        : [item.platform];
}

function updateLivePostPreview() {
    const platforms = selectedPlatforms();
    const previousPlatform = previewPlatformSelect.value;
    previewPlatformSelect.replaceChildren();
    if (!platforms.length) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Choose a platform";
        previewPlatformSelect.append(option);
    } else {
        platforms.forEach((platform) => {
            const option = document.createElement("option");
            option.value = platform;
            option.textContent = platformNames[platform] || platform;
            previewPlatformSelect.append(option);
        });
        previewPlatformSelect.value = platforms.includes(previousPlatform) ? previousPlatform : platforms[0];
    }

    const platform = previewPlatformSelect.value;
    livePostPreview.dataset.platform = platform;
    livePostPreview.dataset.hasMedia = String(!livePreviewImage.hidden || !livePreviewVideo.hidden);
    const formats = {
        facebook: "Page post preview",
        instagram: "Feed post preview",
        linkedin: "Professional post preview",
        snapchat: "Story preview",
        tiktok: "Short video preview",
        twitter: "X post preview",
        youtube: "Video post preview"
    };
    const platformLabel = platformNames[platform] || "Choose a platform";
    livePreviewPlatformLabel.textContent = platform
        ? `${platformLabel} · ${formats[platform] || "Post preview"}`
        : "Choose a platform";
    const selectedIds = selectedPublisherAccounts();
    const account = connectedAccounts.find((entry) =>
        entry.platform === platform && selectedIds.includes(entry.id));
    livePreviewAccountName.textContent = account ? account.name : "Choose a connected account";

    const caption = editCaption.value.trim();
    livePreviewCaption.textContent = caption || "Your post text will appear here.";
    livePreviewCaption.classList.toggle("is-placeholder", !caption);
    captionCount.textContent = `${editCaption.value.length.toLocaleString()} / 2,200`;
}

function loadSocialPlatformDetails(item) {
    Object.entries(socialPlatformSchemas).forEach(([platform, fields]) => {
        const panel = socialPlatformDetailsHost.querySelector(`[data-platform="${platform}"]`);
        const values = item.socialDetails?.[platform] || {};
        fields.forEach((field) => {
            const control = panel.querySelector(`[data-setting="${field.key}"]`);
            if (field.type === "checkbox") {
                control.checked = values[field.key] ?? field.default ?? false;
            } else {
                control.value = values[field.key] ?? field.default ?? "";
            }
        });
    });
    refreshPlatformDetailsVisibility();
}

function saveSocialPlatformDetails(item) {
    item.socialDetails = item.socialDetails || {};
    Object.entries(socialPlatformSchemas).forEach(([platform]) => {
        const panel = socialPlatformDetailsHost.querySelector(`[data-platform="${platform}"]`);
        const values = {};
        panel.querySelectorAll("[data-setting]").forEach((control) => {
            values[control.dataset.setting] = control.type === "checkbox" ? control.checked : control.value;
        });
        item.socialDetails[platform] = values;
    });
}

function refreshPlatformDetailsVisibility() {
    const selected = new Set(selectedPlatforms());
    youtubeDetailsPanel.hidden = !selected.has("youtube");
    socialPlatformDetailsHost.querySelectorAll("[data-platform]").forEach((panel) => {
        panel.hidden = !selected.has(panel.dataset.platform);
    });
}

function updateThumbnailSourceFields() {
    thumbnailUrlField.hidden = thumbnailSource.value !== "url";
    thumbnailFileField.hidden = thumbnailSource.value !== "upload";
    thumbnailVideoField.hidden = thumbnailSource.value !== "video";
    if (thumbnailSource.value !== "video") {
        thumbnailVideo.pause();
        thumbnailVideo.hidden = true;
        captureThumbnailFrame.disabled = true;
    }
}

updateThumbnailSourceFields();

function showThumbnail(source, name = "") {
    if (thumbnailObjectUrl) URL.revokeObjectURL(thumbnailObjectUrl);
    thumbnailObjectUrl = null;
    if (!source) {
        thumbnailPreview.hidden = true;
        thumbnailImage.removeAttribute("src");
        thumbnailName.textContent = "";
        return;
    }
    if (source.startsWith("blob:")) thumbnailObjectUrl = source;
    thumbnailPreview.hidden = false;
    thumbnailImage.src = source;
    thumbnailName.textContent = name;
}

function openThumbnailDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("veltrixa-youtube-thumbnails", 1);
        request.onupgradeneeded = () => request.result.createObjectStore("thumbnails");
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function storeThumbnail(contentId, file) {
    sessionThumbnails.set(contentId, file);
    const db = await openThumbnailDatabase();
    await new Promise((resolve, reject) => {
        const request = db.transaction("thumbnails", "readwrite").objectStore("thumbnails").put(file, contentId);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error);
    });
    db.close();
}

async function getThumbnail(contentId) {
    if (sessionThumbnails.has(contentId)) return sessionThumbnails.get(contentId);
    const db = await openThumbnailDatabase();
    const file = await new Promise((resolve, reject) => {
        const request = db.transaction("thumbnails", "readonly").objectStore("thumbnails").get(contentId);
        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
    });
    db.close();
    return file;
}

async function removeThumbnail(contentId) {
    sessionThumbnails.delete(contentId);
    try {
        const db = await openThumbnailDatabase();
        await new Promise((resolve, reject) => {
            const request = db.transaction("thumbnails", "readwrite").objectStore("thumbnails").delete(contentId);
            request.onsuccess = resolve;
            request.onerror = () => reject(request.error);
        });
        db.close();
    } catch (error) {
        // Content deletion should continue if browser media storage is unavailable.
    }
}

function openContentMediaDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("veltrixa-content-media", 1);
        request.onupgradeneeded = () => request.result.createObjectStore("videos");
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function storeContentVideo(contentId, file) {
    const db = await openContentMediaDatabase();
    try {
        await new Promise((resolve, reject) => {
            const request = db.transaction("videos", "readwrite").objectStore("videos").put(file, contentId);
            request.onsuccess = resolve;
            request.onerror = () => reject(request.error);
        });
    } finally {
        db.close();
    }
}

async function getContentVideo(contentId) {
    const db = await openContentMediaDatabase();
    try {
        return await new Promise((resolve, reject) => {
            const request = db.transaction("videos", "readonly").objectStore("videos").get(contentId);
            request.onsuccess = () => resolve(request.result || null);
            request.onerror = () => reject(request.error);
        });
    } finally {
        db.close();
    }
}

async function removeContentVideo(contentId) {
    const db = await openContentMediaDatabase();
    try {
        await new Promise((resolve, reject) => {
            const request = db.transaction("videos", "readwrite").objectStore("videos").delete(contentId);
            request.onsuccess = resolve;
            request.onerror = () => reject(request.error);
        });
    } finally {
        db.close();
    }
}

function showContentVideo(file, name, mediaType = file?.type || "") {
    if (contentVideoObjectUrl) URL.revokeObjectURL(contentVideoObjectUrl);
    contentVideoObjectUrl = null;
    contentVideoPreview.pause();
    contentVideoPreview.removeAttribute("src");
    contentVideoPreview.load();
    livePreviewVideo.pause();
    livePreviewVideo.removeAttribute("src");
    livePreviewVideo.load();
    contentVideoPreview.hidden = true;
    contentImagePreview.hidden = true;
    contentImagePreview.removeAttribute("src");
    livePreviewImage.hidden = true;
    livePreviewImage.removeAttribute("src");
    livePreviewVideo.hidden = true;
    livePreviewPlaceholder.hidden = false;
    contentVideoName.textContent = name || "No media selected";
    removeContentVideoBtn.hidden = !name;
    if (file) {
        contentVideoObjectUrl = URL.createObjectURL(file);
        livePreviewPlaceholder.hidden = true;
        if (mediaType.startsWith("image/")) {
            contentImagePreview.src = contentVideoObjectUrl;
            contentImagePreview.hidden = false;
            livePreviewImage.src = contentVideoObjectUrl;
            livePreviewImage.hidden = false;
        } else {
            contentVideoPreview.src = contentVideoObjectUrl;
            contentVideoPreview.hidden = false;
            livePreviewVideo.src = contentVideoObjectUrl;
            livePreviewVideo.hidden = false;
        }
    }
    livePostPreview.dataset.hasMedia = String(!livePreviewImage.hidden || !livePreviewVideo.hidden);
}

function showStudioMedia(file, name = "", mediaType = file?.type || "") {
    if (studioMediaObjectUrl) URL.revokeObjectURL(studioMediaObjectUrl);
    studioMediaObjectUrl = null;
    creatorVideoPreview.pause();
    creatorVideoPreview.removeAttribute("src");
    creatorVideoPreview.load();
    creatorVideoPreview.hidden = true;
    creatorImagePreview.hidden = true;
    creatorImagePreview.removeAttribute("src");
    creatorMediaPlaceholder.hidden = false;
    creatorMediaName.textContent = name || "No media selected";
    removeCreatorMediaBtn.hidden = !name;
    studioMediaFile = file || null;
    document.getElementById("capture-studio-frame").disabled =
        !file || !mediaType.startsWith("video/");
    if (!file) return;

    studioMediaObjectUrl = URL.createObjectURL(file);
    creatorMediaPlaceholder.hidden = true;
    if (mediaType.startsWith("image/")) {
        creatorImagePreview.src = studioMediaObjectUrl;
        creatorImagePreview.hidden = false;
    } else {
        creatorVideoPreview.src = studioMediaObjectUrl;
        creatorVideoPreview.hidden = false;
    }
    updateStudioPreview();
}

function showStudioThumbnail(blob, name = "") {
    if (studioThumbnailObjectUrl) URL.revokeObjectURL(studioThumbnailObjectUrl);
    studioThumbnailObjectUrl = null;
    studioThumbnailBlob = blob || null;
    studioThumbnailName = blob ? name : "";
    creatorThumbnailPreview.hidden = !blob;
    if (!blob) {
        creatorThumbnailImage.removeAttribute("src");
        creatorThumbnailName.textContent = "";
        creatorLiveThumbnail.hidden = true;
        creatorLiveThumbnail.removeAttribute("src");
        updateStudioPreview();
        return;
    }
    studioThumbnailObjectUrl = URL.createObjectURL(blob);
    creatorThumbnailImage.src = studioThumbnailObjectUrl;
    creatorThumbnailName.textContent = name;
    creatorLiveThumbnail.src = studioThumbnailObjectUrl;
    creatorLiveThumbnail.hidden = false;
    updateStudioPreview();
}

function selectedStudioPlatforms() {
    return [...creatorPlatformPicker.querySelectorAll("input[type='checkbox']:checked")]
        .map((checkbox) => checkbox.dataset.creatorPlatform);
}

function renderStudioAccountOptions() {
    const platforms = selectedStudioPlatforms();
    const previousPlatform = creatorPreviewPlatform.value;
    creatorPreviewPlatform.replaceChildren();
    platforms.forEach((platform) => {
        const option = document.createElement("option");
        option.value = platform;
        option.textContent = platformNames[platform];
        creatorPreviewPlatform.append(option);
    });
    if (platforms.length) {
        creatorPreviewPlatform.value = platforms.includes(previousPlatform)
            ? previousPlatform
            : platforms[0];
    } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Select a platform";
        creatorPreviewPlatform.append(option);
        creatorPreviewPlatform.value = "";
    }

    const platform = creatorPreviewPlatform.value;
    const accounts = connectedAccounts.filter((account) => account.platform === platform);
    creatorAccountSelect.replaceChildren();
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = accounts.length ? "Select an account" : "No account connected";
    creatorAccountSelect.append(emptyOption);
    accounts.forEach((account) => {
        const option = document.createElement("option");
        option.value = account.id;
        option.textContent = account.name;
        creatorAccountSelect.append(option);
    });
    creatorAccountSelect.value = studioAccountsByPlatform[platform] || "";
    if (!accounts.some((account) => account.id === creatorAccountSelect.value)) {
        creatorAccountSelect.value = "";
        delete studioAccountsByPlatform[platform];
    }
    creatorConnectAccountBtn.hidden = accounts.length > 0 || !platform;
    updateStudioPreview();
}

function updateStudioPreview() {
    creatorCaptionCount.textContent = `${creatorCaption.value.length.toLocaleString()} / 5,000`;
    const title = creatorTitle.value.trim();
    const caption = creatorCaption.value.trim();
    document.getElementById("creator-live-title").textContent = title || "Your title will appear here";
    document.getElementById("creator-live-caption").textContent = caption || "Your caption will appear here.";

    const platform = creatorPreviewPlatform.value;
    const account = connectedAccounts.find((entry) =>
        entry.platform === platform && entry.id === studioAccountsByPlatform[platform]);
    const platformName = platformNames[platform] || "Platform";
    document.getElementById("creator-posting-target").textContent =
        account
            ? `Posting to: @${account.name.replace(/^@/, "")} on ${platformName}`
            : `Posting to: select an account on ${platformName}`;
}

function renderStudioTags() {
    creatorTagsList.replaceChildren();
    studioTags.forEach((tag, index) => {
        const item = document.createElement("li");
        const label = document.createElement("span");
        label.textContent = tag;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "×";
        remove.setAttribute("aria-label", `Remove ${tag}`);
        remove.addEventListener("click", () => {
            studioTags.splice(index, 1);
            renderStudioTags();
        });
        item.append(label, remove);
        creatorTagsList.append(item);
    });
}

function addStudioTag(value) {
    const tag = value.trim().replace(/^#/, "");
    if (!tag || studioTags.some((entry) => entry.toLowerCase() === tag.toLowerCase())) return;
    studioTags.push(tag);
    renderStudioTags();
}

function displayStudioCopyright(settings = {}, scanning = false) {
    const copyright = settings.copyright || {};
    const status = creatorCopyrightStatus;
    status.classList.remove("is-scanning", "is-ready", "is-review");
    if (scanning) {
        status.textContent = "Scanning media and caption...";
        status.classList.add("is-scanning");
    } else {
        status.textContent = copyright.status || "Upload media to run a copyright check.";
        if (copyright.scanned) {
            status.classList.add(copyright.status === "Needs Review" ? "is-review" : "is-ready");
        }
    }
    document.getElementById("creator-copyright-music").textContent =
        scanning ? "Scanning..." : copyright.music || "Not scanned";
    document.getElementById("creator-copyright-video").textContent =
        scanning ? "Scanning..." : copyright.video || "Not scanned";
    document.getElementById("creator-copyright-caption").textContent =
        scanning ? "Scanning..." : copyright.caption || "Not scanned";
}

function runStudioCopyrightScan() {
    if (studioCopyrightTimer) clearTimeout(studioCopyrightTimer);
    displayStudioCopyright({}, true);
    // TODO BACKEND: Replace this simulation with real AI automation for copyright scanning - audio, video, caption. Auto-suggest replacement sound, blur logo, block if HIGH risk.
    studioCopyrightTimer = setTimeout(() => {
        const brands = ["adidas", "apple", "coca-cola", "disney", "google", "mcdonald's", "nike", "pepsi", "starbucks"];
        const caption = creatorCaption.value;
        const brand = brands.find((name) =>
            new RegExp(`(^|[^a-z0-9])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(caption));
        const copyright = {
            status: brand ? "Needs Review" : "Ready to Publish",
            music: "No match found",
            video: "No match found",
            caption: brand ? `Flagged brand word: ${brand}` : "No match found",
            scanned: true
        };
        displayStudioCopyright({ copyright });
    }, 2000);
}

function studioScheduleValue() {
    const date = creatorScheduleDate.value;
    const time = creatorScheduleTime.value;
    if (!date && !time) return "";
    if (!date || !time) {
        setCreatorStatus("Choose both a schedule date and time, or leave both empty.");
        (date ? creatorScheduleTime : creatorScheduleDate).focus();
        return null;
    }
    const scheduledDate = new Date(`${date}T${time}`);
    if (Number.isNaN(scheduledDate.getTime())) {
        setCreatorStatus("Choose a valid schedule date and time.");
        return null;
    }
    return scheduledDate.toISOString();
}

function renderStudioDrafts() {
    studioItems = getPosts().filter((post) => ["idea", "draft"].includes(post.status));
    studioDraftList.replaceChildren();
    studioDraftEmpty.hidden = studioItems.length > 0;
    for (const item of studioItems) {
        const row = document.createElement("li");
        row.className = `library-item${item.id === activeStudioId ? " active" : ""}`;
        const info = document.createElement("button");
        info.type = "button";
        info.className = "library-item-info";
        const title = document.createElement("span");
        title.className = "library-item-title";
        title.textContent = item.title || "Untitled content";
        const meta = document.createElement("span");
        meta.className = "library-item-meta";
        meta.textContent = `Studio ${item.status}`;
        info.append(title, meta);
        info.addEventListener("click", () => selectStudioDraft(item.id));

        row.append(info);
        studioDraftList.append(row);
    }
}

async function selectStudioDraft(id) {
    const item = getPosts().find((draft) => draft.id === id);
    if (!item) return;
    if (studioCopyrightTimer) clearTimeout(studioCopyrightTimer);
    studioCopyrightTimer = null;
    activeStudioId = item.id;
    activeStudioPost = null;
    const settings = item.studioSettings || {};
    creatorForm.hidden = false;
    creatorEmpty.hidden = true;
    creatorTitle.value = item.title || "";
    creatorCaption.value = item.caption || "";
    studioTags = [...(settings.tags || [])];
    renderStudioTags();
    creatorTagInput.value = "";
    creatorPlatformPicker.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = (settings.platforms || []).length
            ? settings.platforms.includes(checkbox.dataset.creatorPlatform)
            : true;
    });
    studioAccountsByPlatform = { ...(settings.accountsByPlatform || {}) };
    creatorPreviewPlatform.value = settings.selectedPlatform || creatorPreviewPlatform.value;
    creatorFormat.value = settings.format || "short";
    creatorPlaylist.value = settings.playlist || "";
    creatorVisibility.value = settings.visibility || "public";
    creatorMadeForKids.value = settings.madeForKids ? "yes" : "no";
    creatorAudience.value = settings.audience || "everyone";
    creatorLanguage.value = settings.language || "";
    creatorLocation.value = settings.location || "";
    creatorProductLink.value = settings.productLink || "";
    creatorAllowComments.checked = settings.allowComments !== false;
    creatorAllowRemix.checked = settings.allowRemix !== false;
    creatorPaidPromotion.checked = Boolean(settings.paidPromotion);
    const schedule = toLocalDateTimeInput(item.scheduledDate);
    [creatorScheduleDate.value, creatorScheduleTime.value] = schedule
        ? schedule.split("T")
        : ["", ""];
    creatorMediaInput.value = "";
    creatorThumbnailInput.value = "";
    studioMediaRemovalPending = false;
    studioThumbnailRemovalPending = false;
    showStudioThumbnail(null, "");
    studioThumbnailName = settings.thumbnailName || "";
    const mediaName = item.assets[0] || "";
    studioMediaFile = null;
    showStudioMedia(null, mediaName);
    studioAccountsByPlatform = { ...(settings.accountsByPlatform || {}) };
    renderStudioAccountOptions();
    displayStudioCopyright(settings);
    updateStudioPreview();
    renderStudioDrafts();
    if (mediaName) {
        try {
            const file = await getContentVideo(item.id);
            if (activeStudioId !== item.id) return;
            if (file) {
                showStudioMedia(file, mediaName, file.type || "");
            } else {
                creatorMediaName.textContent = `${mediaName} (not available in this browser)`;
                setCreatorStatus("The saved Studio media is unavailable in this browser. Upload it again to restore the preview.");
            }
        } catch (error) {
            if (activeStudioId === item.id) {
                setCreatorStatus("The saved Studio media could not be loaded from browser storage.");
            }
        }
    }
    if (settings.thumbnailName) {
        try {
            const thumbnail = await getThumbnail(item.id);
            if (activeStudioId !== item.id) return;
            if (thumbnail) {
                showStudioThumbnail(thumbnail, settings.thumbnailName);
            }
        } catch (error) {
            if (activeStudioId === item.id) {
                setCreatorStatus("The saved thumbnail could not be loaded from browser storage.");
            }
        }
    }
    if (studioMediaFile && !settings.copyright?.scanned) runStudioCopyrightScan();
}

function createStudioDraft() {
    const item = createPost({
        id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: "",
        status: "idea",
        platformVersions: {}
    });
    activeStudioId = item.id;
    activeStudioPost = item;
    creatorForm.hidden = false;
    creatorEmpty.hidden = true;
    resetStudioFields(false);
    renderStudioAccountOptions();
    updateStudioPreview();
    renderStudioDrafts();
    creatorTitle.focus();
}

function resetStudioFields(markExistingMediaForRemoval = false) {
    if (studioCopyrightTimer) clearTimeout(studioCopyrightTimer);
    studioCopyrightTimer = null;
    creatorTitle.value = "";
    creatorCaption.value = "";
    creatorMediaInput.value = "";
    creatorThumbnailInput.value = "";
    creatorTagInput.value = "";
    creatorMediaLibrarySelect.value = "";
    document.getElementById("studio-media-library-picker").hidden = true;
    creatorFormat.value = "short";
    creatorPlaylist.value = "";
    creatorScheduleDate.value = "";
    creatorScheduleTime.value = "";
    creatorVisibility.value = "public";
    creatorMadeForKids.value = "no";
    creatorAudience.value = "everyone";
    creatorLanguage.value = "";
    creatorLocation.value = "";
    creatorProductLink.value = "";
    creatorAllowComments.checked = true;
    creatorAllowRemix.checked = true;
    creatorPaidPromotion.checked = false;
    creatorPlatformPicker.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = true;
    });
    studioAccountsByPlatform = {};
    studioTags = [];
    renderStudioTags();
    studioMediaRemovalPending = markExistingMediaForRemoval;
    studioThumbnailRemovalPending = markExistingMediaForRemoval;
    studioMediaFile = null;
    showStudioMedia(null, "");
    showStudioThumbnail(null, "");
    displayStudioCopyright();
    renderStudioAccountOptions();
    updateStudioPreview();
}

const creatorFormat = document.getElementById("creator-format");
const creatorPlaylist = document.getElementById("creator-playlist");
const creatorVisibility = document.getElementById("creator-visibility");
const creatorMadeForKids = document.getElementById("creator-made-for-kids");
const creatorAudience = document.getElementById("creator-audience");
const creatorLanguage = document.getElementById("creator-language");
const creatorLocation = document.getElementById("creator-location");
const creatorProductLink = document.getElementById("creator-product-link");
const creatorAllowComments = document.getElementById("creator-allow-comments");
const creatorAllowRemix = document.getElementById("creator-allow-remix");
const creatorPaidPromotion = document.getElementById("creator-paid-promotion");

async function saveStudioDraft(targetStatus = "draft") {
    if (!activeStudioId) {
        setCreatorStatus("Create or select a Studio draft first.");
        return false;
    }
    const item = getPosts().find((draft) => draft.id === activeStudioId) || activeStudioPost;
    if (!item) return false;
    if (!creatorForm.reportValidity()) return false;
    const platforms = selectedStudioPlatforms();
    if (!platforms.length) {
        setCreatorStatus("Select at least one platform.");
        creatorPlatformPicker.querySelector("input").focus();
        return false;
    }
    const scheduledDate = studioScheduleValue();
    if (scheduledDate === null) return false;
    const file = studioMediaFile;
    if (file && !file.type.startsWith("image/") && !file.type.startsWith("video/")) {
        setCreatorStatus("Choose a video or image file.");
        return false;
    }

    saveCreatorDraftBtn.disabled = true;
    sendToPublisherBtn.disabled = true;
    try {
        if (file) {
            await storeContentVideo(item.id, file);
            item.assets = [file.name];
        } else if (studioMediaRemovalPending) {
            item.assets = [];
            await removeContentVideo(item.id);
        }
        if (studioThumbnailBlob) {
            await storeThumbnail(item.id, studioThumbnailBlob);
        } else if (studioThumbnailRemovalPending) {
            await removeThumbnail(item.id);
        }
        item.title = creatorTitle.value.trim();
        item.idea = item.title;
        item.script = "";
        item.caption = creatorCaption.value.trim();
        item.status = targetStatus === "send" && scheduledDate ? "scheduled" : "draft";
        item.scheduledDate = scheduledDate || null;
        item.platformVersions = { ...item.platformVersions };
        platforms.forEach((platform) => {
            item.platformVersions[platform] = {
                ...(item.platformVersions[platform] || {}),
                title: item.title,
                caption: item.caption,
                scheduledAt: item.scheduledDate
            };
        });
        item.studioSettings = {
            tags: [...studioTags],
            mediaName: file?.name || "",
            thumbnailName: studioThumbnailBlob
                ? creatorThumbnailName.textContent
                : studioThumbnailRemovalPending ? "" : studioThumbnailName,
            platforms,
            accountsByPlatform: { ...studioAccountsByPlatform },
            selectedPlatform: creatorPreviewPlatform.value,
            format: creatorFormat.value,
            playlist: creatorPlaylist.value.trim(),
            visibility: creatorVisibility.value,
            madeForKids: creatorMadeForKids.value === "yes",
            audience: creatorAudience.value,
            language: creatorLanguage.value,
            location: creatorLocation.value.trim(),
            allowComments: creatorAllowComments.checked,
            allowRemix: creatorAllowRemix.checked,
            paidPromotion: creatorPaidPromotion.checked,
            productLink: creatorProductLink.value.trim(),
            copyright: {
                status: creatorCopyrightStatus.classList.contains("is-scanning")
                    ? "Scanning"
                    : creatorCopyrightStatus.textContent,
                music: document.getElementById("creator-copyright-music").textContent,
                video: document.getElementById("creator-copyright-video").textContent,
                caption: document.getElementById("creator-copyright-caption").textContent,
                scanned: !creatorCopyrightStatus.classList.contains("is-scanning")
                    && creatorCopyrightStatus.textContent !== "Upload media to run a copyright check."
            }
        };
        savePost(item);
    } catch (error) {
        setCreatorStatus(error.message || "Studio draft could not be saved.");
        return false;
    } finally {
        saveCreatorDraftBtn.disabled = false;
        sendToPublisherBtn.disabled = false;
    }

    creatorMediaInput.value = "";
    creatorThumbnailInput.value = "";
    studioMediaRemovalPending = false;
    studioThumbnailRemovalPending = false;
    activeStudioPost = item;
    publisherState.activePostId = item.id;
    studioItems = getPosts().filter((post) => ["idea", "draft"].includes(post.status));
    renderStudioDrafts();
    renderStudioImportOptions();
    renderPublisherCommand();
    renderCalendar();
    setCreatorStatus(targetStatus === "send"
        ? "Content saved with its settings and sent to Post Publisher."
        : "Studio draft saved to this browser.");
    return true;
}

function resetStudioForClear() {
    resetStudioFields(Boolean(activeStudioId && getPosts().some((post) => post.id === activeStudioId)));
    setCreatorStatus("");
}

function renderStudioMediaLibrary() {
    creatorMediaLibrarySelect.replaceChildren();
    const options = getPosts().filter((post) => post.assets?.length);
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = options.length ? "Choose saved media" : "No saved media available";
    creatorMediaLibrarySelect.append(placeholder);
    options.forEach((post) => {
        const option = document.createElement("option");
        option.value = post.id;
        option.textContent = post.assets[0];
        creatorMediaLibrarySelect.append(option);
    });
    document.getElementById("studio-media-library-load").disabled = options.length === 0;
}

async function useStudioLibraryMedia() {
    const post = getPosts().find((item) => item.id === creatorMediaLibrarySelect.value);
    if (!post) return;
    try {
        const file = await getContentVideo(post.id);
        if (!file) {
            setCreatorStatus("The selected media is unavailable in this browser.");
            return;
        }
        creatorMediaInput.value = "";
        studioMediaRemovalPending = false;
        showStudioMedia(file, post.assets[0], file.type);
        runStudioCopyrightScan();
        setCreatorStatus("Media selected from your saved posts.");
    } catch (error) {
        setCreatorStatus(error.message || "Saved media could not be loaded.");
    }
}

async function deleteStudioDraft(id) {
    const item = studioItems.find((draft) => draft.id === id);
    if (!item || !confirm(`Delete "${item.title || "Untitled content"}" from Content Studio?`)) return;
    try {
        deletePost(id);
    } catch (error) {
        setCreatorStatus(error.message);
        return;
    }
    if (activeStudioId === id) {
        activeStudioId = null;
        creatorForm.hidden = true;
        creatorEmpty.hidden = false;
    }
    renderStudioDrafts();
    renderPublisherCommand();
    renderCalendar();
    try {
        await removeContentVideo(id);
    } catch (error) {
        setCreatorStatus("Studio draft deleted, but its media could not be removed from browser storage.");
        return;
    }
    setCreatorStatus("Studio draft deleted.");
}

function renderStudioImportOptions() {
    const previousValue = importStudioSelect.value;
    importStudioSelect.replaceChildren();
    const placeholder = document.createElement("option");
    placeholder.value = "";
    studioItems = getPosts().filter((post) => ["idea", "draft"].includes(post.status));
    placeholder.textContent = studioItems.length ? "Select a studio draft" : "No Studio drafts available";
    importStudioSelect.append(placeholder);
    studioItems.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.title || "Untitled content";
        importStudioSelect.append(option);
    });
    if (studioItems.some((item) => item.id === previousValue)) {
        importStudioSelect.value = previousValue;
    }
    importStudioBtn.disabled = studioItems.length === 0;
}

function renderSocialAccounts() {
    document.querySelectorAll(".account-card[data-account-platform]").forEach((card) => {
        const platform = card.dataset.accountPlatform;
        const accounts = connectedAccounts.filter((entry) => entry.platform === platform);
        card.classList.toggle("is-connected", accounts.length > 0);
        card.querySelector(".account-state").textContent = accounts.length
            ? `${accounts.length} saved locally`
            : "Not connected";
        const button = card.querySelector("[data-social-connect]");
        button.textContent = card.querySelector("[data-account-name]")
            ? "Save account details"
            : "Add account details";
        button.setAttribute("aria-pressed", String(accounts.length > 0));
        let accountList = card.querySelector(".account-card-account-list");
        if (!accountList) {
            accountList = document.createElement("ul");
            accountList.className = "account-card-account-list";
            card.insertBefore(accountList, button);
        }
        accountList.replaceChildren();
        accounts.forEach((account) => {
            const row = document.createElement("li");
            const name = document.createElement("span");
            name.textContent = account.name;
            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "account-remove-button";
            remove.textContent = "Remove";
            remove.setAttribute("aria-label", `Remove ${account.name}`);
            remove.addEventListener("click", () => removeLocalAccount(account.id));
            row.append(name, remove);
            accountList.append(row);
        });
    });
    document.querySelector(".accounts-count").textContent =
        `${connectedAccounts.length} connected${connectedAccounts.length === 1 ? " account" : " accounts"}`;
    dashboardConnectedCount.textContent = String(connectedAccounts.length);
    renderStudioAccountOptions();
}

function addLocalAccount(platform) {
    const card = document.querySelector(`.account-card[data-account-platform="${platform}"]`);
    let nameInput = card.querySelector("[data-account-name]");
    if (!nameInput) {
        nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.dataset.accountName = "";
        nameInput.className = "account-name-input";
        nameInput.placeholder = "Account name or handle";
        nameInput.setAttribute("aria-label", `${platformNames[platform]} account name or handle`);
        card.insertBefore(nameInput, card.querySelector("[data-social-connect]"));
        card.querySelector("[data-social-connect]").textContent = "Save account details";
        nameInput.focus();
        return;
    }
    const name = nameInput.value.trim();
    if (!name) {
        accountsStatus.textContent = "Enter an account name or handle to save.";
        nameInput.focus();
        return;
    }
    const previous = connectedAccounts;
    connectedAccounts = [...connectedAccounts, {
        id: `${platform}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        platform,
        name
    }];
    try {
        saveConnectedAccounts();
    } catch (error) {
        connectedAccounts = previous;
        accountsStatus.textContent = error.message;
        return;
    }
    nameInput.remove();
    accountsStatus.textContent = `${platformNames[platform]} account details saved in this browser. Platform authorization is not enabled.`;
    renderSocialAccounts();
    renderPublisherAccountPicker();
    updateLivePostPreview();
}

function removeLocalAccount(id) {
    const previous = connectedAccounts;
    connectedAccounts = connectedAccounts.filter((account) => account.id !== id);
    try {
        saveConnectedAccounts();
    } catch (error) {
        connectedAccounts = previous;
        accountsStatus.textContent = error.message;
        return;
    }
    accountsStatus.textContent = "Account details removed.";
    renderSocialAccounts();
    renderPublisherAccountPicker();
    updateLivePostPreview();
}

function selectedPublisherAccounts() {
    return [...publisherAccountPicker.querySelectorAll("input[type='checkbox']:checked")]
        .map((checkbox) => checkbox.value);
}

function renderPublisherAccountPicker(selectedIds = selectedPublisherAccounts()) {
    publisherAccountPicker.replaceChildren();
    const platforms = selectedPlatforms();
    if (!platforms.length) {
        const message = document.createElement("p");
        message.className = "publisher-account-empty";
        message.textContent = "Select a platform to choose its connected account.";
        publisherAccountPicker.append(message);
        return;
    }
    platforms.forEach((platform) => {
        const group = document.createElement("fieldset");
        group.className = "publisher-account-group";
        const legend = document.createElement("legend");
        legend.textContent = platformNames[platform] || platform;
        group.append(legend);
        const accounts = connectedAccounts.filter((account) => account.platform === platform);
        if (!accounts.length) {
            const message = document.createElement("p");
            message.className = "publisher-account-empty";
            message.textContent = `No ${platformNames[platform] || platform} account details saved. Add one in Social Accounts.`;
            group.append(message);
        }
        accounts.forEach((account) => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = account.id;
            checkbox.checked = selectedIds.includes(account.id);
            checkbox.addEventListener("change", updateLivePostPreview);
            const name = document.createElement("span");
            name.textContent = account.name;
            label.append(checkbox, name);
            group.append(label);
        });
        publisherAccountPicker.append(group);
    });
    updateLivePostPreview();
}

async function importStudioDraft(id) {
    const source = studioItems.find((item) => item.id === id);
    if (!source) {
        setStudioStatus("Choose a Content Studio draft to import.");
        return;
    }
    const existing = contentItems.find((item) => item.sourceStudioId === source.id);
    if (existing) {
        showView("library");
        selectContent(existing.id);
        setStudioStatus("This Studio draft is already in Post Publisher.");
        return;
    }
    const content = [source.caption.trim(), source.hashtags.trim()].filter(Boolean).join("\n\n");
    const item = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        title: source.title || "Untitled content",
        platform: "instagram",
        platforms: ["instagram"],
        selectedAccountIds: [],
        content,
        scheduleAt: "",
        status: "draft",
        media: source.media || null,
        mediaType: source.mediaType || null,
        sourceStudioId: source.id,
        updatedAt: Date.now()
    };
    contentItems.unshift(item);
    try {
        if (source.media) {
            const file = await getContentVideo(source.id);
            if (!file) throw new Error("The Studio media file is unavailable. Re-upload it in Content Studio before importing.");
            await storeContentVideo(item.id, file);
        }
        saveContentItems();
    } catch (error) {
        contentItems = contentItems.filter((post) => post.id !== item.id);
        try {
            await removeContentVideo(item.id);
        } catch (cleanupError) {
            console.error("Imported media cleanup error:", cleanupError);
        }
        setStudioStatus(error.message || "Studio draft could not be imported.");
        return;
    }
    showView("library");
    selectContent(item.id);
    setStudioStatus("Content imported as a Post Publisher draft.");
}

async function loadContentVideo(item) {
    contentVideoFileInput.value = "";
    contentVideoRemovalPending = false;
    showContentVideo(null, item.media || "");
    if (!item.media) return;
    try {
        const file = await getContentVideo(item.id);
        if (activeContentId !== item.id) return;
        if (file) {
            showContentVideo(file, item.media, file.type || item.mediaType || "");
        } else {
            contentVideoName.textContent = `${item.media} (not available in this browser)`;
            setStudioStatus("The saved media file is unavailable in this browser. Upload it again to restore the preview.");
        }
    } catch (error) {
        if (activeContentId === item.id) {
            setStudioStatus("The saved media could not be loaded from browser storage.");
        }
    }
}

async function loadThumbnailPreview(item) {
    const details = item.youtubeDetails || {};
    updateThumbnailSourceFields();
    if (details.thumbnailSource === "none") {
        showThumbnail("");
    } else if (["upload", "video"].includes(details.thumbnailSource) && details.thumbnailUploadName) {
        try {
            const file = await getThumbnail(item.id);
            if (activeContentId !== item.id) return;
            if (file) {
                showThumbnail(URL.createObjectURL(file), details.thumbnailUploadName);
                return;
            }
        } catch (error) {
            // Show the URL field if the uploaded file is no longer available.
        }
        showThumbnail(details.thumbnailUrl || "", "");
    } else {
        showThumbnail(details.thumbnailUrl || "");
    }
}

thumbnailSource.addEventListener("change", () => {
    updateThumbnailSourceFields();
    if (thumbnailSource.value === "url") {
        showThumbnail(youtubeFields.thumbnailUrl.value.trim());
    } else if (thumbnailSource.value === "upload") {
        const file = thumbnailFileInput.files && thumbnailFileInput.files[0];
        if (file) {
            showThumbnail(URL.createObjectURL(file), file.name);
        } else {
            const item = contentItems.find((content) => content.id === activeContentId);
            if (item && item.youtubeDetails?.thumbnailUploadName) {
                getThumbnail(item.id).then((savedFile) => {
                    if (activeContentId === item.id && savedFile) {
                        showThumbnail(URL.createObjectURL(savedFile), item.youtubeDetails.thumbnailUploadName);
                    }
                }).catch(() => showThumbnail(""));
            } else {
                showThumbnail("");
            }
        }
    } else if (thumbnailSource.value === "video") {
        if (thumbnailVideoUrl) {
            thumbnailVideo.hidden = false;
            captureThumbnailFrame.disabled = !thumbnailVideo.videoWidth;
        }
        const item = contentItems.find((content) => content.id === activeContentId);
        if (item && item.youtubeDetails?.thumbnailUploadName) {
            getThumbnail(item.id).then((savedFile) => {
                if (activeContentId === item.id && savedFile) {
                    showThumbnail(URL.createObjectURL(savedFile), item.youtubeDetails.thumbnailUploadName);
                }
            }).catch(() => showThumbnail(""));
        } else {
            showThumbnail("");
        }
    } else {
        showThumbnail("");
    }
});

thumbnailVideoFileInput.addEventListener("change", () => {
    const file = thumbnailVideoFileInput.files && thumbnailVideoFileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("video/") && !file.type.startsWith("image/")) {
        setStudioStatus("Choose a video file.");
        return;
    }
    if (thumbnailVideoUrl) URL.revokeObjectURL(thumbnailVideoUrl);
    thumbnailVideoUrl = URL.createObjectURL(file);
    thumbnailVideo.src = thumbnailVideoUrl;
    thumbnailVideo.hidden = false;
    captureThumbnailFrame.disabled = true;
    thumbnailVideo.onloadeddata = () => {
        captureThumbnailFrame.disabled = false;
    };
});

captureThumbnailFrame.addEventListener("click", () => {
    if (!activeContentId || !thumbnailVideo.videoWidth || !thumbnailVideo.videoHeight) return;
    const canvas = document.createElement("canvas");
    canvas.width = thumbnailVideo.videoWidth;
    canvas.height = thumbnailVideo.videoHeight;
    canvas.getContext("2d").drawImage(thumbnailVideo, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
        if (!blob) {
            setStudioStatus("Could not capture that video frame.");
            return;
        }
        const frame = new File([blob], "video-frame.png", { type: "image/png" });
        const item = contentItems.find((content) => content.id === activeContentId);
        if (!item) return;
        thumbnailSource.value = "video";
        showThumbnail(URL.createObjectURL(frame), "Selected video frame");
        saveYouTubeDetails(item);
        item.youtubeDetails.thumbnailSource = "video";
        item.youtubeDetails.thumbnailUploadName = frame.name;
        try {
            await storeThumbnail(item.id, frame);
            saveContentItems();
            setStudioStatus("Video frame saved as the thumbnail.");
        } catch (error) {
            setStudioStatus("Video frame could not be saved in this browser.");
        }
    }, "image/png");
});

youtubeFields.thumbnailUrl.addEventListener("input", () => {
    if (thumbnailSource.value === "url") showThumbnail(youtubeFields.thumbnailUrl.value.trim());
});

thumbnailFileInput.addEventListener("change", async () => {
    const file = thumbnailFileInput.files && thumbnailFileInput.files[0];
    if (!file || !activeContentId) return;
    if (!file.type.startsWith("image/")) {
        setStudioStatus("Choose an image file for the thumbnail.");
        return;
    }
    const item = contentItems.find((content) => content.id === activeContentId);
    if (!item) return;
    thumbnailSource.value = "upload";
    updateThumbnailSourceFields();
    showThumbnail(URL.createObjectURL(file), file.name);
    saveYouTubeDetails(item);
    item.youtubeDetails.thumbnailSource = "upload";
    item.youtubeDetails.thumbnailUploadName = file.name;
    try {
        await storeThumbnail(item.id, file);
        saveContentItems();
        setStudioStatus("YouTube thumbnail uploaded.");
    } catch (error) {
        setStudioStatus("Thumbnail could not be saved in this browser.");
    }
});

function refreshYouTubeDetailsVisibility() {
    youtubeDetailsPanel.hidden = !selectedPlatforms().includes("youtube");
}

function loadYouTubeDetails(item) {
    const details = item.youtubeDetails || {};
    youtubeFields.title.value = details.title ?? item.title ?? "";
    youtubeFields.description.value = details.description ?? item.content ?? "";
    youtubeFields.thumbnailUrl.value = details.thumbnailUrl || "";
    thumbnailSource.value = details.thumbnailSource || "none";
    thumbnailFileInput.value = "";
    thumbnailVideoFileInput.value = "";
    if (thumbnailVideoUrl) URL.revokeObjectURL(thumbnailVideoUrl);
    thumbnailVideoUrl = null;
    thumbnailVideo.pause();
    thumbnailVideo.removeAttribute("src");
    thumbnailVideo.load();
    thumbnailVideo.hidden = true;
    captureThumbnailFrame.disabled = true;
    loadThumbnailPreview(item);
    youtubeFields.visibility.value = details.visibility || "public";
    youtubeFields.audience.value = details.audience || "not-made-for-kids";
    youtubeFields.tags.value = details.tags || "";
    youtubeFields.category.value = details.category || "people-blogs";
    youtubeFields.language.value = details.language || "";
    youtubeFields.license.value = details.license || "standard";
    youtubeFields.comments.value = details.comments || "allow";
    youtubeFields.embedding.checked = details.embedding !== false;
    youtubeFields.notifySubscribers.checked = details.notifySubscribers !== false;
    refreshYouTubeDetailsVisibility();
    loadSocialPlatformDetails(item);
}

function saveYouTubeDetails(item) {
    item.youtubeDetails = {
        title: youtubeFields.title.value.trim(),
        description: youtubeFields.description.value.trim(),
        thumbnailUrl: youtubeFields.thumbnailUrl.value.trim(),
        thumbnailSource: thumbnailSource.value,
        thumbnailUploadName: item.youtubeDetails?.thumbnailUploadName || "",
        visibility: youtubeFields.visibility.value,
        audience: youtubeFields.audience.value,
        tags: youtubeFields.tags.value.trim(),
        category: youtubeFields.category.value,
        language: youtubeFields.language.value.trim(),
        license: youtubeFields.license.value,
        comments: youtubeFields.comments.value,
        embedding: youtubeFields.embedding.checked,
        notifySubscribers: youtubeFields.notifySubscribers.checked
    };
    saveSocialPlatformDetails(item);
}

editPlatform.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        refreshPlatformDetailsVisibility();
        renderPublisherAccountPicker();
        updateLivePostPreview();
    });
});

editTitle.addEventListener("input", updateLivePostPreview);
editCaption.addEventListener("input", updateLivePostPreview);
previewPlatformSelect.addEventListener("change", updateLivePostPreview);

function renderLibrary() {
    libraryList.innerHTML = "";

    if (contentItems.length === 0) {
        libraryEmpty.hidden = false;
        return;
    }

    libraryEmpty.hidden = true;

    for (const item of contentItems) {
        const li = document.createElement("li");

        li.className = "library-item" +
            (item.id === activeContentId ? " active" : "");

        li.dataset.id = item.id;

        li.innerHTML = `
            <div class="library-item-info">
                <div class="library-item-title">
                    ${escapeHtml(item.title)}
                </div>
                <div class="library-item-meta">
                    ${escapeHtml(itemPlatforms(item).map((platform) => platformNames[platform] || platform).join(", "))} •
                    ${escapeHtml(item.status.charAt(0).toUpperCase() + item.status.slice(1))} •
                    ${new Date(item.updatedAt).toLocaleString()}
                </div>
            </div>

            <button
                type="button"
                class="library-item-delete"
                aria-label="Delete ${escapeHtml(item.title)}"
            >&times;</button>
        `;

        li.querySelector(".library-item-info").addEventListener("click", () => {
            selectContent(item.id);
        });

        li.querySelector(".library-item-delete").addEventListener("click", (event) => {
            event.stopPropagation();
            deleteContent(item.id);
        });

        libraryList.append(li);
    }
}

function renderCalendar() {
    const year = calendarCursor.getFullYear();
    const month = calendarCursor.getMonth();
    calendarMonth.textContent = calendarCursor.toLocaleDateString(undefined, {
        month: "long",
        year: "numeric"
    });
    calendarGrid.innerHTML = "";

    const firstOfMonth = new Date(year, month, 1);
    const gridStart = new Date(year, month, 1 - firstOfMonth.getDay());
    const calendarPosts = getPosts()
        .filter((post) => ["scheduled", "published"].includes(post.status) && post.scheduledDate)
    const scheduledItems = calendarPosts
        .map((post) => ({ item: post, date: new Date(post.scheduledDate) }))
        .filter(({ date }) => !Number.isNaN(date.getTime())
            && date.getFullYear() === year
            && date.getMonth() === month)
        .sort((first, second) => first.date - second.date);

    for (let dayOffset = 0; dayOffset < 42; dayOffset += 1) {
        const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + dayOffset);
        const dayCell = document.createElement("article");
        dayCell.className = "calendar-day";
        if (date.getMonth() !== month) {
            dayCell.classList.add("outside-month");
        }
        const today = new Date();
        if (date.getFullYear() === today.getFullYear()
            && date.getMonth() === today.getMonth()
            && date.getDate() === today.getDate()) {
            dayCell.classList.add("today");
        }
        dayCell.setAttribute("aria-label", date.toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }));

        const dayHeader = document.createElement("div");
        dayHeader.className = "calendar-day-header";
        const dayNumber = document.createElement("span");
        dayNumber.className = "calendar-day-number";
        dayNumber.textContent = String(date.getDate());
        const addButton = document.createElement("button");
        addButton.className = "calendar-add";
        addButton.type = "button";
        addButton.setAttribute("aria-label", `Create content for ${date.toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })}`);
        addButton.textContent = "+";
        addButton.addEventListener("click", () => {
            const scheduledDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9);
            createContent(toLocalDateTimeInput(scheduledDate));
        });
        dayHeader.append(dayNumber, addButton);
        dayCell.append(dayHeader);

        scheduledItems
            .filter(({ date: scheduledDate }) => scheduledDate.toDateString() === date.toDateString())
            .forEach(({ item, date: scheduledDate }) => {
                const event = document.createElement("button");
                event.className = "calendar-event";
                event.type = "button";
                event.title = item.title;
                const title = document.createElement("span");
                title.className = "calendar-event-title";
                title.textContent = item.title;
                const platforms = document.createElement("span");
                platforms.className = "calendar-event-platforms";
                const platformNamesText = Object.keys(item.platformVersions)
                    .filter((platform) => item.platformVersions[platform])
                    .map((platform) => platformNames[platform] || platform)
                    .join(", ");
                platforms.textContent = `${item.status === "published" ? "Published" : scheduledDate.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit"
                })} · ${platformNamesText}`;
                event.append(title, platforms);
                event.addEventListener("click", () => {
                    publisherState.activePostId = item.id;
                    showView("library");
                });
                dayCell.append(event);
            });

        calendarGrid.append(dayCell);
    }

    calendarEmpty.hidden = scheduledItems.length > 0;
    calendarEmpty.querySelector("p").textContent = calendarPosts.length
        ? "No scheduled content this month"
        : "No scheduled content yet";
    document.getElementById("calendar-first-post-button").textContent =
        calendarPosts.length ? "Schedule a post" : "Schedule your first post";
}

function toLocalDateTimeInput(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
}

function selectContent(id) {
    activeContentId = id;
    const item = contentItems.find((c) => c.id === id);
    if (!item) return;
    renderLibrary();
    previewPlaceholder.hidden = true;
    contentForm.hidden = false;
    editTitle.value = item.title;
    editCaption.value = item.content || "";
    scheduleAtInput.value = toLocalDateTimeInput(item.scheduleAt);
    setSelectedPlatforms(itemPlatforms(item));
    renderPublisherAccountPicker(item.selectedAccountIds || []);
    updateLivePostPreview();
    loadYouTubeDetails(item);
    loadContentVideo(item);
    studioPreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function clearPreview() {
    activeContentId = null;
    contentVideoFileInput.value = "";
    contentVideoRemovalPending = false;
    showContentVideo(null, "");
    renderLibrary();
    previewPlaceholder.hidden = false;
    contentForm.hidden = true;
}

function createContent(scheduleAt = "") {
    const item = createPost({
        id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        title: "Untitled content",
        idea: "",
        status: scheduleAt ? "scheduled" : "draft",
        scheduledDate: scheduleAt || null,
        platformVersions: { instagram: { caption: "", scheduledAt: scheduleAt || null } }
    });
    try {
        savePost(item);
    } catch (error) {
        setStudioStatus(error.message);
        return;
    }
    renderStudioDrafts();
    renderPublisherCommand();
    renderCalendar();
    if (scheduleAt) {
        calendarCursor = new Date(scheduleAt);
        renderCalendar();
    } else {
        publisherState.activePostId = item.id;
        showView("library");
    }
}

async function saveCurrentContent(targetStatus = "") {
    if (!activeContentId) return false;
    const item = contentItems.find((c) => c.id === activeContentId);
    if (!item) return false;
    const platforms = selectedPlatforms();
    if (!platforms.length) {
        setStudioStatus("Choose at least one social platform.");
        return false;
    }
    const selectedAccountIds = selectedPublisherAccounts();
    if (["scheduled", "published"].includes(targetStatus)) {
        const missingPlatforms = platforms.filter((platform) =>
            !connectedAccounts.some((account) =>
                account.platform === platform && selectedAccountIds.includes(account.id)));
        if (missingPlatforms.length) {
            setStudioStatus(`Connect and select an account for ${missingPlatforms.map((platform) => platformNames[platform]).join(", ")} before continuing.`);
            return false;
        }
    }

    const videoFile = contentVideoFileInput.files && contentVideoFileInput.files[0];
    if (videoFile && !videoFile.type.startsWith("image/") && !videoFile.type.startsWith("video/")) {
        setStudioStatus("Choose a video or image file.");
        return false;
    }

    const previousItem = { ...item };
    saveContentBtn.disabled = true;
    saveDraftBtn.disabled = true;
    try {
        if (videoFile) {
            await storeContentVideo(item.id, videoFile);
            item.media = videoFile.name;
            item.mediaType = videoFile.type;
        } else if (contentVideoRemovalPending) {
            item.media = null;
            item.mediaType = null;
        }

        item.title = editTitle.value.trim() || "Untitled content";
        item.content = editCaption.value;
        item.scheduleAt = scheduleAtInput.value;
        item.platforms = platforms;
        item.platform = platforms[0];
        item.selectedAccountIds = selectedAccountIds;
        if (targetStatus) item.status = targetStatus;
        saveYouTubeDetails(item);
        item.updatedAt = Date.now();
        saveContentItems();
        if (contentVideoRemovalPending && !videoFile) {
            await removeContentVideo(item.id);
        }
    } catch (error) {
        Object.assign(item, previousItem);
        setStudioStatus(error.message || "Changes could not be saved.");
        return false;
    } finally {
        saveContentBtn.disabled = false;
        saveDraftBtn.disabled = false;
    }

    contentVideoFileInput.value = "";
    contentVideoRemovalPending = false;
    if (videoFile) {
        showContentVideo(videoFile, videoFile.name);
    } else if (item.media === null) {
        showContentVideo(null, "");
    }
    renderLibrary();
    renderCalendar();
    setStudioStatus(targetStatus === "draft"
        ? "Draft saved in this browser."
        : targetStatus === "scheduled"
            ? "Post scheduled in this browser."
            : targetStatus === "published"
                ? "Marked as published in this browser (frontend preview only)."
                : targetStatus === "failed"
                    ? "Post marked as failed in this browser."
                : "Changes saved successfully.");
    return true;
}

async function deleteContent(id) {
    if (!confirm("Delete this content item?")) return;
    const previous = contentItems;
    contentItems = contentItems.filter((c) => c.id !== id);
    if (activeContentId === id) activeContentId = null;
    try {
        saveContentItems();
    } catch (error) {
        contentItems = previous;
        setStudioStatus(error.message);
        renderLibrary();
        return;
    }
    let videoRemovalFailed = false;
    try {
        await removeContentVideo(id);
    } catch (error) {
        videoRemovalFailed = true;
    }
    clearPreview();
    removeThumbnail(id);
    renderLibrary();
    renderCalendar();
    setStudioStatus(videoRemovalFailed
        ? "Content deleted, but its media could not be removed from browser storage."
        : "Content deleted.");
}

newContentBtn.addEventListener("click", createContent);
newStudioContentBtn.addEventListener("click", createStudioDraft);
document.getElementById("creator-empty-new-btn").addEventListener("click", createStudioDraft);
creatorForm.addEventListener("submit", (event) => event.preventDefault());
saveCreatorDraftBtn.addEventListener("click", () => saveStudioDraft("draft"));
sendToPublisherBtn.addEventListener("click", async () => {
    if (!await saveStudioDraft("send")) return;
    publisherState.activePostId = activeStudioId;
    renderStudioDrafts();
    renderPublisherCommand();
    showView("library");
});
importStudioBtn.addEventListener("click", () => importStudioDraft(importStudioSelect.value));
creatorMediaInput.addEventListener("change", () => {
    const file = creatorMediaInput.files && creatorMediaInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
        creatorMediaInput.value = "";
        setCreatorStatus("Choose a video or image file.");
        return;
    }
    studioMediaRemovalPending = false;
    showStudioMedia(file, file.name, file.type);
    runStudioCopyrightScan();
    setCreatorStatus("Media selected. Save the Studio draft to keep it.");
});
removeCreatorMediaBtn.addEventListener("click", () => {
    creatorMediaInput.value = "";
    studioMediaRemovalPending = true;
    showStudioMedia(null, "");
    if (studioCopyrightTimer) clearTimeout(studioCopyrightTimer);
    displayStudioCopyright();
    creatorMediaName.textContent = "Media will be removed when you save.";
    removeCreatorMediaBtn.hidden = true;
    setCreatorStatus("Save the Studio draft to remove its media.");
});
document.getElementById("clear-creator-form-btn").addEventListener("click", resetStudioForClear);
document.getElementById("studio-media-library-toggle").addEventListener("click", () => {
    const picker = document.getElementById("studio-media-library-picker");
    picker.hidden = !picker.hidden;
    if (!picker.hidden) renderStudioMediaLibrary();
});
document.getElementById("studio-media-library-load").addEventListener("click", useStudioLibraryMedia);
document.getElementById("creator-tag-input").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addStudioTag(creatorTagInput.value);
    creatorTagInput.value = "";
});
creatorThumbnailInput.addEventListener("change", () => {
    const file = creatorThumbnailInput.files && creatorThumbnailInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
        creatorThumbnailInput.value = "";
        setCreatorStatus("Choose an image file for the thumbnail.");
        return;
    }
    studioThumbnailRemovalPending = false;
    showStudioThumbnail(file, file.name);
});
document.getElementById("capture-studio-frame").addEventListener("click", () => {
    if (!creatorVideoPreview.videoWidth || !creatorVideoPreview.videoHeight) {
        setCreatorStatus("Play or seek the video to a frame first.");
        return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = creatorVideoPreview.videoWidth;
    canvas.height = creatorVideoPreview.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) {
        setCreatorStatus("The selected video frame could not be captured.");
        return;
    }
    context.drawImage(creatorVideoPreview, 0, 0);
    canvas.toBlob((blob) => {
        if (!blob) {
            setCreatorStatus("The selected video frame could not be captured.");
            return;
        }
        studioThumbnailRemovalPending = false;
        showStudioThumbnail(blob, `Frame from ${studioMediaFile.name}`);
    }, "image/jpeg", 0.9);
});
const creatorDropZone = document.getElementById("creator-drop-zone");
creatorDropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    creatorDropZone.classList.add("is-dragging");
});
creatorDropZone.addEventListener("dragleave", () => creatorDropZone.classList.remove("is-dragging"));
creatorDropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    creatorDropZone.classList.remove("is-dragging");
    const file = event.dataTransfer.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
        setCreatorStatus("Choose a video or image file.");
        return;
    }
    studioMediaRemovalPending = false;
    showStudioMedia(file, file.name, file.type);
    runStudioCopyrightScan();
    setCreatorStatus("Media selected. Save the Studio draft to keep it.");
});
creatorTitle.addEventListener("input", updateStudioPreview);
creatorCaption.addEventListener("input", () => {
    updateStudioPreview();
    if (studioMediaFile && !creatorCopyrightStatus.classList.contains("is-scanning")) {
        runStudioCopyrightScan();
    }
});
creatorPlatformPicker.addEventListener("change", renderStudioAccountOptions);
creatorPreviewPlatform.addEventListener("change", renderStudioAccountOptions);
creatorAccountSelect.addEventListener("change", () => {
    if (creatorPreviewPlatform.value) {
        studioAccountsByPlatform[creatorPreviewPlatform.value] = creatorAccountSelect.value;
    }
    updateStudioPreview();
});
creatorConnectAccountBtn.addEventListener("click", () => showView("accounts"));
document.getElementById("calendar-new-content").addEventListener("click", createContent);
document.getElementById("calendar-prev").addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    renderCalendar();
});
document.getElementById("calendar-next").addEventListener("click", () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    renderCalendar();
});
document.getElementById("calendar-today").addEventListener("click", () => {
    calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    renderCalendar();
});
saveContentBtn.addEventListener("click", () => saveCurrentContent());
saveDraftBtn.addEventListener("click", () => saveCurrentContent("draft"));
dashboardOrbit.querySelectorAll(".orbit-icon[data-platform]").forEach((icon) => {
    icon.addEventListener("click", () => {
        const platform = icon.dataset.platform;
        const hadActiveContent = contentItems.some((item) => item.id === activeContentId);
        if (!hadActiveContent) createContent();
        const selected = hadActiveContent ? selectedPlatforms() : [];
        setSelectedPlatforms([...new Set([...selected, platform])]);
        refreshPlatformDetailsVisibility();
        showView("library");
        setStudioStatus(`${platformNames[platform]} selected. Save changes to keep it.`);
    });
});
contentVideoFileInput.addEventListener("change", () => {
    const file = contentVideoFileInput.files && contentVideoFileInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("video/") && !file.type.startsWith("image/")) {
        contentVideoFileInput.value = "";
        setStudioStatus("Choose a video or image file.");
        return;
    }
    contentVideoRemovalPending = false;
    showContentVideo(file, file.name, file.type);
    setStudioStatus("Media selected. Save changes to keep it.");
});
removeContentVideoBtn.addEventListener("click", () => {
    contentVideoFileInput.value = "";
    contentVideoRemovalPending = true;
    showContentVideo(null, "");
    removeContentVideoBtn.hidden = true;
    contentVideoName.textContent = "Media will be removed when you save.";
    setStudioStatus("Save changes to remove the media.");
});
schedulePostBtn.addEventListener("click", () => {
    if (!activeContentId) {
        setStudioStatus("Select a content item first.");
        return;
    }
    if (!scheduleAtInput.value) {
        setStudioStatus("Choose a date and time before scheduling.");
        scheduleAtInput.focus();
        return;
    }
    saveCurrentContent("scheduled");
});
publishNowBtn.addEventListener("click", () => {
    if (!activeContentId) {
        setStudioStatus("Select a content item first.");
        return;
    }
    saveCurrentContent("published");
});
markFailedBtn.addEventListener("click", () => {
    if (!activeContentId) {
        setStudioStatus("Select a content item first.");
        return;
    }
    saveCurrentContent("failed");
});

function updateDashboardStats() {
    const posts = getPosts();
    const cards = document.querySelectorAll(".stats-grid .stat-card");
    if (cards[0]) cards[0].querySelector("h2").textContent = String(posts.length);
    if (cards[1]) cards[1].querySelector("h2").textContent =
        String(posts.filter((post) => post.status === "scheduled").length);
    if (cards[3]) cards[3].querySelector("h2").textContent =
        String(posts.filter((post) => ["idea", "draft"].includes(post.status)).length);
    document.getElementById("dashboard-welcome").textContent = "Welcome to VYOORA";
    document.getElementById("dashboard-subtitle").textContent =
        posts.length ? "Create and organize your social media content." : "Create your first post to get started.";
    document.getElementById("dashboard-create-button").textContent =
        posts.length ? "+ Create Content" : "Create your first post";
}

const publisherState = {
    activePostId: getPosts().find((post) => post.status === "draft")?.id || null,
    activeDayKey: null,
    hookScores: new Map()
};

function getPublisherDraftPosts() {
    return getPosts().filter((post) => post.status === "draft");
}

function publisherPlatformCopy(post, platform) {
    const version = post.platformVersions?.[platform];
    const baseHook = platform === "tiktok"
        ? `Stop scrolling: ${post.idea}`
        : platform === "instagram"
            ? `Most people miss this: ${post.idea}`
            : `Watch this before you skip: ${post.idea}`;
    const baseCaption = version?.caption || post.caption;
    return {
        hook: baseHook,
        caption: baseCaption
    };
}

function publisherHookScore(post, platform) {
    const key = `${post.id}:${platform}`;
    if (!publisherState.hookScores.has(key)) {
        const offset = platform === "tiktok" ? 4 : platform === "instagram" ? 8 : -3;
        publisherState.hookScores.set(key, Math.max(0, Math.min(100, post.hookScore + offset)));
    }
    return publisherState.hookScores.get(key);
}

function improvePublisherHook(post, platform) {
    const key = `${post.id}:${platform}`;
    const current = publisherHookScore(post, platform);
    const hookScore = Math.min(100, current + 12);
    try {
        savePost({ ...post, hookScore });
    } catch (error) {
        document.getElementById("publisher-schedule-warning").textContent = error.message;
        return;
    }
    publisherState.hookScores.set(key, hookScore);
    renderPublisherPreviews();
}

function publisherHookClass(score) {
    if (score < 50) return "red";
    if (score <= 75) return "yellow";
    return "lime";
}

function renderPublisherInbox() {
    const inbox = document.getElementById("publisher-inbox-list");
    const count = document.getElementById("publisher-draft-count");
    if (!inbox || !count) return;
    const publisherDraftPosts = getPublisherDraftPosts();
    inbox.replaceChildren();
    count.textContent = String(publisherDraftPosts.length);

    publisherDraftPosts.forEach((post) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "publisher-inbox-item";
        button.classList.toggle("active", post.id === publisherState.activePostId);

        const title = document.createElement("strong");
        title.textContent = post.title;
        const meta = document.createElement("span");
        meta.textContent = `${post.voiceStyle || "custom"} · Hook ${post.hookScore}`;
        button.append(title, meta);
        button.addEventListener("click", () => {
            publisherState.activePostId = post.id;
            renderPublisherCommand();
        });
        inbox.append(button);
    });
}

function renderPublisherPreviews() {
    const previewHost = document.getElementById("publisher-previews");
    const title = document.getElementById("publisher-selected-title");
    const statusSelect = document.getElementById("publisher-status");
    const post = getPosts().find((entry) => entry.id === publisherState.activePostId)
        || getPublisherDraftPosts()[0];
    if (!previewHost || !title || !statusSelect) return;

    if (!post) {
        title.textContent = "No draft posts in the inbox";
        previewHost.replaceChildren();
        const empty = document.createElement("div");
        empty.className = "publisher-empty-state";
        const message = document.createElement("p");
        message.textContent = "No posts ready to publish. Create one in Content Studio first";
        const goToStudio = document.createElement("button");
        goToStudio.type = "button";
        goToStudio.className = "publisher-action-primary";
        goToStudio.textContent = "Go to Content Studio";
        goToStudio.addEventListener("click", () => showView("creator"));
        empty.append(message, goToStudio);
        previewHost.append(empty);
        return;
    }

    title.textContent = post.title;
    statusSelect.value = post.status;

    previewHost.replaceChildren();
    const savedPlatforms = post.studioSettings?.platforms;
    const platforms = (savedPlatforms && savedPlatforms.length
        ? savedPlatforms
        : ["tiktok", "instagram", "youtube"])
        .map((key) => ({ key, label: key === "youtube" ? "YouTube Shorts" : platformNames[key] || key }));
    publisherThumbnailUrls.splice(0).forEach((url) => URL.revokeObjectURL(url));

    platforms.forEach((platform) => {
        const copy = publisherPlatformCopy(post, platform.key);
        const score = publisherHookScore(post, platform.key);
        const card = document.createElement("article");
        card.className = "publisher-preview";

        const header = document.createElement("div");
        header.className = "publisher-preview-header";
        const label = document.createElement("strong");
        label.textContent = platform.label;
        const scoreBadge = document.createElement("span");
        scoreBadge.className = `publisher-hook-score ${publisherHookClass(score)}`;
        scoreBadge.textContent = `Hook ${score}`;
        header.append(label, scoreBadge);

        const body = document.createElement("div");
        body.className = "publisher-preview-body";
        const format = document.createElement("div");
        format.className = `publisher-preview-format ${platform.key}`;
        const formatText = document.createElement("span");
        formatText.textContent = copy.hook;
        format.append(formatText);

        const hook = document.createElement("p");
        hook.className = "publisher-hook";
        hook.textContent = copy.hook;
        const caption = document.createElement("p");
        caption.className = "publisher-caption";
        caption.textContent = copy.caption;

        const improve = document.createElement("button");
        improve.type = "button";
        improve.className = "publisher-improve-btn";
        improve.textContent = "Improve Hook";
        improve.addEventListener("click", () => improvePublisherHook(post, platform.key));

        const details = document.createElement("div");
        details.className = "publisher-post-details";
        const settings = post.studioSettings || {};
        const accountId = settings.accountsByPlatform?.[platform.key];
        const account = connectedAccounts.find((entry) => entry.id === accountId);
        const accountLabel = account ? `@${account.name.replace(/^@/, "")}` : "Not selected";
        const detailTitle = document.createElement("strong");
        detailTitle.textContent = `Title: ${post.title}`;
        const to = document.createElement("span");
        to.textContent = `To: ${accountLabel}`;
        const platformDetail = document.createElement("span");
        platformDetail.textContent = `Platform: ${platform.label}`;
        const visibility = document.createElement("span");
        visibility.textContent = `Visibility: ${settings.visibility || "Public"}`;
        const copyrightStatus = document.createElement("span");
        copyrightStatus.textContent = `Copyright Status: ${settings.copyright?.status || "Not checked"}`;
        details.append(detailTitle, to, platformDetail);
        if (settings.thumbnailName) {
            const thumbnail = document.createElement("img");
            thumbnail.className = "publisher-post-thumbnail";
            thumbnail.alt = `Thumbnail for ${post.title}`;
            thumbnail.src = "";
            details.append(thumbnail);
            getThumbnail(post.id).then((file) => {
                if (!file || !thumbnail.isConnected) return;
                const url = URL.createObjectURL(file);
                publisherThumbnailUrls.push(url);
                thumbnail.src = url;
            }).catch((error) => {
                console.error("Publisher thumbnail loading error:", error);
            });
        } else {
            const thumbnail = document.createElement("span");
            thumbnail.textContent = "Thumbnail: Not selected";
            details.append(thumbnail);
        }
        details.append(visibility, copyrightStatus);
        body.append(format, hook, caption, improve, details);
        card.append(header, body);
        previewHost.append(card);
    });
}

function mondayOfCurrentWeek() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    const distance = (date.getDay() + 6) % 7;
    date.setDate(date.getDate() - distance);
    return date;
}

function publisherDayKey(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function publisherPostDateKey(post) {
    return post.scheduledDate ? publisherDayKey(new Date(post.scheduledDate)) : "";
}

function publisherDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}T09:00`;
}

function renderPublisherWeek() {
    const host = document.getElementById("publisher-week");
    if (!host) return;
    host.replaceChildren();
    const start = mondayOfCurrentWeek();

    for (let offset = 0; offset < 7; offset += 1) {
        const date = new Date(start);
        date.setDate(start.getDate() + offset);
        const key = publisherDayKey(date);
        const queuedPosts = getPosts().filter((post) =>
            post.status === "scheduled" && publisherPostDateKey(post) === key);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "publisher-day";
        button.classList.toggle("active", key === publisherState.activeDayKey);
        button.classList.toggle("has-post", queuedPosts.length > 0);
        const dayName = document.createElement("strong");
        dayName.textContent = date.toLocaleDateString(undefined, { weekday: "short" });
        const dateName = document.createElement("span");
        dateName.textContent = `${date.getMonth() + 1}/${date.getDate()}`;
        if (queuedPosts.length) dateName.textContent += ` · ${queuedPosts.map((post) => post.title).join(", ")}`;
        button.append(dayName, dateName);
        button.addEventListener("click", () => schedulePublisherPost(key, date));
        host.append(button);
    }
}

function schedulePublisherPost(dayKey, date) {
    const post = getPosts().find((entry) => entry.id === publisherState.activePostId);
    const warning = document.getElementById("publisher-schedule-warning");
    if (!post || post.status !== "draft" || !warning) return;

    publisherState.activeDayKey = dayKey;
    const existingPost = getPosts().find((entry) =>
        entry.id !== post.id && entry.status === "scheduled" && publisherPostDateKey(entry) === dayKey);
    if (existingPost) {
        warning.textContent = "This will cannibalize. Move to another day?";
        renderPublisherWeek();
        return;
    }

    try {
        savePost({ ...post, status: "scheduled", scheduledDate: publisherDateTime(date) });
    } catch (error) {
        warning.textContent = error.message;
        return;
    }
    warning.textContent = `${post.title} scheduled for ${date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric"
    })}.`;
    renderStudioDrafts();
    renderCalendar();
    renderPublisherInbox();
    renderPublisherPreviews();
    renderPublisherWeek();
}

function renderPublisherCommand() {
    const posts = getPosts();
    if (!posts.some((post) => post.id === publisherState.activePostId)) {
        publisherState.activePostId = posts.find((post) => post.status === "draft")?.id
            || posts[0]?.id
            || null;
    }
    renderPublisherInbox();
    renderPublisherPreviews();
    renderPublisherWeek();
    const hasPosts = getPosts().length > 0;
    document.getElementById("publisher-status").disabled = !hasPosts;
    document.getElementById("publisher-publish-btn").disabled = !hasPosts;
    document.getElementById("publisher-failed-btn").disabled = !hasPosts;
    if (!hasPosts) document.getElementById("publisher-analytics-btn").hidden = true;
}

const publisherStatusSelect = document.getElementById("publisher-status");
if (publisherStatusSelect) {
    publisherStatusSelect.addEventListener("change", () => {
        let post = getPosts().find((entry) => entry.id === publisherState.activePostId);
        if (!post) return;
        try {
            if (["scheduled", "published"].includes(publisherStatusSelect.value) && !post.scheduledDate) {
                post = savePost({ ...post, scheduledDate: publisherDateTime(new Date()) });
            }
            post = updatePostStatus(post.id, publisherStatusSelect.value);
        } catch (error) {
            document.getElementById("publisher-schedule-warning").textContent = error.message;
            publisherStatusSelect.value = post.status;
            return;
        }
        document.getElementById("publisher-analytics-btn").hidden = post.status !== "published";
        renderStudioDrafts();
        renderCalendar();
        renderPublisherCommand();
        updateDashboardStats();
    });
}

const publisherPublishBtn = document.getElementById("publisher-publish-btn");
if (publisherPublishBtn) {
    publisherPublishBtn.addEventListener("click", () => {
        let post = getPosts().find((entry) => entry.id === publisherState.activePostId);
        if (!post) return;
        try {
            if (!post.scheduledDate) {
                post = savePost({ ...post, scheduledDate: publisherDateTime(new Date()) });
            }
            updatePostStatus(post.id, "published");
        } catch (error) {
            document.getElementById("publisher-schedule-warning").textContent = error.message;
            return;
        }
        document.getElementById("publisher-analytics-btn").hidden = false;
        document.getElementById("publisher-schedule-warning").textContent =
            `${post.title} is published.`;
        renderStudioDrafts();
        renderCalendar();
        renderPublisherCommand();
        updateDashboardStats();
    });
}

const publisherFailedBtn = document.getElementById("publisher-failed-btn");
if (publisherFailedBtn) {
    publisherFailedBtn.addEventListener("click", () => {
        const post = getPosts().find((entry) => entry.id === publisherState.activePostId);
        if (!post) return;
        try {
            updatePostStatus(post.id, "failed");
        } catch (error) {
            document.getElementById("publisher-schedule-warning").textContent = error.message;
            return;
        }
        document.getElementById("publisher-analytics-btn").hidden = true;
        document.getElementById("publisher-schedule-warning").textContent =
            `${post.title} failed. Re-authentication may be required.`;
        renderStudioDrafts();
        renderCalendar();
        renderPublisherCommand();
        updateDashboardStats();
    });
}

const publisherAnalyticsBtn = document.getElementById("publisher-analytics-btn");
if (publisherAnalyticsBtn) {
    publisherAnalyticsBtn.addEventListener("click", () => {
        document.getElementById("publisher-schedule-warning").textContent =
            "Analytics placeholder: this post is ready for Module 7.";
    });
}

document.getElementById("dashboard-create-button").addEventListener("click", () => {
    showView("creator");
    createStudioDraft();
});

document.getElementById("calendar-first-post-button").addEventListener("click", () => {
    const draft = getPosts().find((post) => post.status === "draft");
    if (draft) {
        publisherState.activePostId = draft.id;
        showView("library");
    } else {
        showView("creator");
        createStudioDraft();
    }
});

document.getElementById("clear-posts-button").addEventListener("click", () => {
    if (!confirm("Clear all saved VYOORA posts from this browser?")) return;
    try {
        clearPosts();
        activeStudioId = null;
        activeStudioPost = null;
        publisherState.activePostId = null;
        creatorForm.hidden = true;
        creatorEmpty.hidden = false;
        renderStudioDrafts();
        renderCalendar();
        renderPublisherCommand();
        updateDashboardStats();
        document.getElementById("settings-status").textContent = "All posts were cleared.";
    } catch (error) {
        document.getElementById("settings-status").textContent = error.message;
    }
});

contentItems = [];
renderLibrary();
renderStudioDrafts();
renderStudioImportOptions();
renderSocialAccounts();
updateDashboardStats();
renderPublisherCommand();
