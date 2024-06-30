// // src/global.d.ts
// interface Window {
//     Telegram: {
//       WebApp: {
//         ready: () => void;
//         initDataUnsafe: {
//           user?: {
//             id: number;
//           };
//         };
//       };
//     };
//   }
// src/global.d.ts
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        initDataUnsafe: {
          user?: {
            id: number;
          };
        };
        openLink: (url: string) => void;
      };
    };
  }
  