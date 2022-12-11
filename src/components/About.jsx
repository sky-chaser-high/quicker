import React from "react";

export const About = ({ dialog }) => {
    return (
        <>
            <sp-heading size='L'>Quicker</sp-heading>
            <sp-divider style={{ marginTop: '2px', marginBottom: '14px' }}></sp-divider>

            <sp-body>
                This plugin changes a quick mask color and an alpha channel color for Photoshop.
            </sp-body>

            <sp-heading size='S'>Version</sp-heading>
            <sp-body>0.9.0</sp-body>

            <sp-heading size='S'>Homepage</sp-heading>
            <sp-body>
                <sp-link href='https://github.com/sky-chaser-high/quicker'>
                    github.com/sky-chaser-high/quicker
                </sp-link>
            </sp-body>

            <sp-heading size='S'>License</sp-heading>
            <sp-body>
                Released under the MIT license.<br></br>
                <sp-link href='https://opensource.org/licenses/mit-license.php'>https://opensource.org/licenses/mit-license.php</sp-link>
            </sp-body>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <sp-button
                    autofocus='autofocus'
                    variant='primary'
                    onClick={() => dialog.close('ok')}
                >
                    OK
                </sp-button>
            </div>
        </>
    );
};
