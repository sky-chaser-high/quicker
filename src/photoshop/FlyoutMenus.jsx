import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from '../components/About';
import { entrypoints, host } from 'uxp';

export const FlyoutMenus = () => {
    console.log(host);
    const locale = localize();

    entrypoints.setup({
        commands: {
            about: () => showAbout(),
        },
        panels: {
            Quicker: {
                show() {
                },
                menuItems: [
                    {
                        id: 'about',
                        label: `${locale.about}...`
                    }
                ],
                invokeMenu(id) {
                    handleFlyout(id);
                }
            }
        }
    });
};


const handleFlyout = (id) => {
    switch (id) {
        case 'about':
            showAbout();
            break;
    }
};


const showAbout = async () => {
    const locale = localize();
    const options = {
        title: locale.about,
        resize:'none',
        size: {
            width: 480,
            height: 480
        }
    };

    const dialog = document.createElement('dialog');
    const root = ReactDOM.createRoot(dialog);
    root.render(
        <About dialog={dialog} />
    );
    document.body.appendChild(dialog);
    await dialog.uxpShowModal(options);
    dialog.remove();
};


const localize = () => {
    const locale = host.uiLocale;
    const localization = {
        en: {
            about: 'About Quicker'
        },
        jp: {
            about: 'Quicker について'
        }
    };
    if (/jp/i.test(locale)) return localization.jp;
    return localization.en;
};
