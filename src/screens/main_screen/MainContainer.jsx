import React, { useState } from 'react';

import MusicApp from './apps/MusicApp.jsx';
import ProfileApp from './apps/ProfileApp.jsx';
import FilesApp from './apps/FilesApp.jsx';
import DesktopAppLayout from './apps/DesktopAppLayout.jsx';

const MainContainer = () => {

    const PROFILE_APP = "Profile";
    const MUSIC_APP = "Music";
    const PICTURES_APP = "My Wallpapers";
    const FILES_APP = "Files";

    const PROFILE_APP_ID = "PROFILE";
    const MUSIC_APP_ID = "MUSIC";
    const PICTURES_APP_ID = "PICTURES";
    const FILES_APP_ID = "FILES";

    return (
        <>
            <DesktopAppLayout AppId={PROFILE_APP_ID} AppName={PROFILE_APP} AppComponent={<ProfileApp />} />
            <DesktopAppLayout AppId={MUSIC_APP_ID} AppName={MUSIC_APP} AppComponent={<MusicApp />} />
            <DesktopAppLayout AppId={FILES_APP_ID} AppName={FILES_APP} AppComponent={<FilesApp />} />
        </>
    );
};

export default MainContainer;
