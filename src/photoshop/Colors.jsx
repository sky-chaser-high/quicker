import { app, core, constants } from 'photoshop';

export const applyColor = ({ r, g, b }) => {
    const channels = app.activeDocument.activeChannels;
    const color = setRGBColor(r, g, b);
    core.executeAsModal(async () => {
        await setMaskColor(channels, color);
    }, { 'commandName': 'Quicker' });
};

export const setMaskColor = async (channels, color) => {
    for (const channel of channels) {
        try {
            if (channel.kind === constants.ChannelType.MASKEDAREA ||
                channel.kind === constants.ChannelType.SELECTEDAREA) {
                channel.color = color;
            }
        }
        catch (err) {
            await app.showAlert(`${err}`);
        }
    }
};

export const setRGBColor = (r, g, b) => {
    const color = new app.SolidColor();
    color.rgb.red = r;
    color.rgb.green = g;
    color.rgb.blue = b;
    return color;
};
