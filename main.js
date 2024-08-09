import { data_send } from "./js/send_data.js";

const send_button = document.querySelector("#send_button");
const text_area = document.querySelector(".main_container_edit");
const publish_section = document.querySelector(".publish_section");

const { publish } = data_send;

send_button.addEventListener("click", (e) => {
  text_area.value.replace(/\n/g, "<br/>");
  publish_on_site(text_area.value);
});

function publish_on_site(publish) {
  publish_section.insertAdjacentHTML(
    "afterbegin",
    `<p class="publish_text">${publish}</p>`
  );
  text_area.value = "";
}
