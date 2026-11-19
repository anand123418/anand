const getStaticBaseUrl = (req, folder) => {
    const forwardedProtocol = req.get("x-forwarded-proto");
    const protocol = forwardedProtocol
        ? forwardedProtocol.split(",")[0].trim()
        : req.protocol;
    const host = req.get("host");

    return `${protocol}://${host}/uploads/${folder}/`;
};

module.exports = { getStaticBaseUrl };
