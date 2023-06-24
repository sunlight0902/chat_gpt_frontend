// const overrides = {
//     MuiAvatar: {
//         styleOverrides: {
//             root: {
//                 borderRadius: 6
//             }
//         }
//     },
//     MuiIconButton: {
//         styleOverrides: {
//             root: {
//                 borderRadius: 6,
//                 '&:hover': {
//                     boxShadow: 'unset',
//                     backgroundColor: 'transparent'
//                 }
//             }
//         }
//     },
//     MuiMenuItem: {
//         styleOverrides: {
//             root: {
//                 '&.Mui-selected': {
//                     backgroundColor: '#4584ff'
//                 },
//                 '&:hover': {
//                     backgroundColor: '#54aeff52'
//                 }
//             }
//         }
//     },
//     MuiListItemButton: {
//         styleOverrides: {
//             root: {
//                 borderRadius: 0,
//                 '&:hover': {
//                     backgroundColor: '#54aeff52'
//                 }
//             }
//         }
//     },
//     MuiButtonBase: {
//         defaultProps: {
//             disableRipple: true
//         },
//         styleOverrides: {
//             root: {
//                 '&:hover': {
//                     boxShadow: 'unset'
//                 }
//             }
//         }
//     },
//     MuiButton: {
//         styleOverrides: {
//             root: {
//                 boxShadow: 'unset',
//                 '&:hover': {
//                     boxShadow: 'unset',
//                     backgroundColor: '#286EF6'
//                 }
//             }
//         }
//     }
// };

export const light = {
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: 'Helvetica Neue Light',
        fontSize: 14
    },
    shape: {
        borderRadius: 4
    },
    // components: overrides
};

export const dark = {
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Helvetica Neue Light',
        fontSize: 14
    },
    shape: {
        borderRadius: 4
    },
    // components: overrides
};
