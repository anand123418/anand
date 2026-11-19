export const getImageUrl = (folder, filename, staticPath) => {
    if (!filename) return "";
    if (/^https?:\/\//i.test(filename)) return filename;

    if (staticPath && /^https?:\/\//i.test(staticPath)) {
        return `${staticPath.replace(/\/+$/, "")}/${encodeURIComponent(filename)}`;
    }

    const apiBaseUrl = import.meta.env.VITE_APIBASEURL || "http://localhost:8000/admin";
    const imageBaseUrl = import.meta.env.VITE_APIIMAGEURL;

    let baseUrl = apiBaseUrl;
    if (imageBaseUrl) {
        baseUrl = imageBaseUrl;
    } else {
        try {
            baseUrl = new URL(apiBaseUrl).origin;
        } catch {
            baseUrl = "http://localhost:8000";
        }
    }

    return `${baseUrl.replace(/\/+$/, "")}/uploads/${folder}/${encodeURIComponent(filename)}`;
};
