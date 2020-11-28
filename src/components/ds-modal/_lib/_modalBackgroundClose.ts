import config from "./_config";
import modalComponentAnimation from "./_modalComponentAnimation";
import { message } from "./_log";

async function addInlineStylesToModalBackground(backgroundClass:string) {
  const background:HTMLElement = document.querySelector(backgroundClass);
  background.classList.remove(config.containerBlockClass);
}

async function showLogWhenAnimationEnd(dataValue:string) {
  message(`ds-modal: ${dataValue} opened`, config.logs);
}

export default async function modalBackgroundOpen() {
  try {
    await modalComponentAnimation(config.backgroundClass, config.backgroundOutClass);
    await addInlineStylesToModalBackground(config.backgroundClass);
    await showLogWhenAnimationEnd("background");
  } catch (e) {
    console.log(e);
  }
}
