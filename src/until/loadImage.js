export const loadImage = async (baseUrl, type, name, setFunction, currentImg) => {
    const image = await import(`../media/${baseUrl}/${name}${type}.jpg`);
    if (image.default !== currentImg) setFunction(image.default);
}