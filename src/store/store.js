import { combineReducers } from 'redux';
import { modalVisible, settingsMode } from './reducers';

export const defaultStore = {
    blocks: [
        {
            id: 1,
            name: 'YouTube',
            coords: {
                x1: 1,
                y1: 1,
                x2: 1,
                y2: 1
            },
            link: 'https://youtube.com',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: 'https://www.youtube.com/img/desktop/yt_1200.png',
                    color: '#fff'
                }
            }
        },
        {
            id: 2,
            name: 'YouTube',
            coords: {
                x1: 2,
                y1: 1,
                x2: 2,
                y2: 1
            },
            link: 'https://youtube.com',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: 'https://www.youtube.com/img/desktop/yt_1200.png',
                    color: '#fff'
                }
            }
        },
        {
            id: 3,
            name: 'YouTube',
            coords: {
                x1: 3,
                y1: 1,
                x2: 4,
                y2: 1
            },
            link: 'https://youtube.com',
            design: {
                name: {
                    displayName: true,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: false,
                    image: 'https://www.youtube.com/img/desktop/yt_1200.png',
                    color: '#fff'
                }
            }
        },
        {
            id: 4,
            name: 'YouTube',
            coords: {
                x1: 5,
                y1: 1,
                x2: 6,
                y2: 2
            },
            link: 'https://youtube.com',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: 'https://www.youtube.com/img/desktop/yt_1200.png',
                    color: '#fff'
                }
            }
        }
    ],
    modalVisible: false,
    settingsMode: false
};

export const mainStore = combineReducers({ modalVisible, settingsMode });
