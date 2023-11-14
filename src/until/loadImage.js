export const loadImage = async (baseUrl, type, name, setFunction, currentImg, imgType) => {
    const image = await import(`../media/${baseUrl}/${name}${type}.${imgType}`);
    if (image.default !== currentImg) setFunction(image.default);
}