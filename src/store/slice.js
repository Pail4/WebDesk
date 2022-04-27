import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        },
        {
            id: 5,
            name: '',
            coords: {
                x1: 1,
                y1: 2,
                x2: 1,
                y2: 2
            },
            link: '',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: '../src/img/add-block.svg',
                    color: '#3A5967'
                }
            }
        },
        {
            id: 6,
            name: '',
            coords: {
                x1: 2,
                y1: 2,
                x2: 2,
                y2: 2
            },
            link: '',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: '../src/img/add-block.svg',
                    color: '#3A5967'
                }
            }
        },
        {
            id: 7,
            name: '',
            coords: {
                x1: 3,
                y1: 2,
                x2: 3,
                y2: 2
            },
            link: '',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: '../src/img/add-block.svg',
                    color: '#3A5967'
                }
            }
        },
        {
            id: 8,
            name: '',
            coords: {
                x1: 4,
                y1: 2,
                x2: 4,
                y2: 2
            },
            link: '',
            design: {
                name: {
                    displayName: false,
                    fontColor: '#000000'
                },
                background: {
                    displayImage: true,
                    image: '../src/img/add-block.svg',
                    color: '#3A5967'
                }
            }
        }
    ],
    lastBlock: {
        id: 0,
        name: '',
        link: '',
        displayName: false,
        fontColor: '#e4e3e9',
        displayImage: false,
        image: '../src/img/add-block.svg',
        background: '#144973'
    },
    modalVisible: false,
    settingsMode: false
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeLastBlock: (state, action) => {
            state.lastBlock = Object.assign({}, state.lastBlock, action.payload);
        },
        changeBlock: (state, action) => {
            const newBlock = action.payload;
            state.blocks = state.blocks.map((block) => {
                if (block.id === newBlock.id) return Object.assign({}, block, newBlock);
                return block;
            });
        },
        changeModalVisible: (state, action) => {
            state.modalVisible = action.payload;
        },
        settingsModeHandler: (state, action) => {
            state.settingsMode = action.payload;
        }
    }
});

const { actions, reducer } = mainSlice;

export default reducer;
export const {
    changeLastBlock,
    changeBlock,
    changeModalVisible,
    settingsModeHandler
} = actions;
