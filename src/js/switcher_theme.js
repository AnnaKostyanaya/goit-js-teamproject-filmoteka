import { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt } from './tool-tip';

class ThemeSwitch {
    constructor( theme ) {
    this.refs = {
    toggleLang: document.querySelector('.theme-switch__toggle'),
    };
}

init() {
    const storageTheme = loadDataFromLocalSt("theme");
    if (storageTheme !== undefined) {
    if (storageTheme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
    } else {
    document.body.classList.add("light-theme");
    }
    this.refs.toggleLang.addEventListener('change', this.changeTheme.bind(this));
}

changeTheme() {
    if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    saveDataToLocalSt("dark");
    } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    saveDataToLocalSt("light");
    }
}
saveDataToLocalSt(theme) {
    saveDataToLocalSt("theme", theme);
}
}

const themeSwitch = new ThemeSwitch();
themeSwitch.init();

// const refs = {
//     toggleLang: document.querySelector('.theme-switch__toggle'),
// };

// const storageTheme = loadDataFromLocalSt("theme");
// if (storageTheme !== undefined) {
//     if (storageTheme === "dark") {
//         document.body.classList.remove("light-theme");
//         document.body.classList.add("dark-theme");
//     } else {
//         document.body.classList.remove("dark-theme");
//         document.body.classList.add("light-theme");
//     }
// } else {
//     document.body.classList.add("light-theme");
// }

// refs.toggleLang.addEventListener('change', changeTheme);


// function changeTheme(evt) {
//     if (document.body.classList.contains("light-theme")) {
//         document.body.classList.remove("light-theme");
//         document.body.classList.add("dark-theme");
//         saveDataToLocalSt("theme", "dark");
//     } else {
//         document.body.classList.remove("dark-theme");
//         document.body.classList.add("light-theme");
//         saveDataToLocalSt("theme", "light");
//     }
// }

export { refs, changeTheme };