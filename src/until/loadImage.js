export const loadImage = async (baseUrl, type, name, setFunction) => {
    const image = await import(`../${baseUrl}${name}${type}.jpg`);
    setFunction(image.default);
}