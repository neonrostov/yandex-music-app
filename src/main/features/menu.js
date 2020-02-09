const { app, Menu } = require("electron");
const settings = require("electron-settings");
const { showOpenURLDialog } = require("../dialogs/openURL");
const { showHotkeysDialog } = require("../dialogs/hotkeys");
const navigation = require("./navigation");

const menu = Menu.buildFromTemplate([
  {
    label: app.name,
    submenu: [
      { role: "about", label: "About Yandex Music (Unofficial)" },
      { type: "separator" },
      { role: "services", submenu: [] },
      { type: "separator" },
      { role: "hide", label: "Hide Yandex Music (Unofficial)" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit", label: "Quit Yandex Music (Unofficial)" }
    ]
  },
  {
    role: "editMenu"
  },
  {
    label: "View",
    submenu: [
      {
        role: "reload"
      }
    ]
  },
  {
    label: "Navigate",
    submenu: [
      {
        label: "Back",
        accelerator: "CommandOrControl+[",
        click: navigation.goBack
      },
      {
        label: "Forward",
        accelerator: "CommandOrControl+]",
        click: navigation.goForward
      },
      {
        type: "separator"
      },
      {
        label: "Open URL",
        accelerator: "CommandOrControl+O",
        click: showOpenURLDialog
      }
    ]
  },
  {
    label: "Settings",
    submenu: [
      {
        label: "Enable notifications",
        type: "checkbox",
        checked: settings.get("notifications", true),
        click(menuItem) {
          settings.set("notifications", menuItem.checked);
        }
      },
      {
        label: "Global Hotkeys",
        click: showHotkeysDialog
      }
    ]
  },
  {
    role: "windowMenu"
  }
]);
Menu.setApplicationMenu(menu);
