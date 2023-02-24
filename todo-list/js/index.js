const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todosUL.appendChild(todoEl);

    input.value = "";
  }
}

//https://gale.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384340#overview

function GTranslateGetCurrentLang() {
  var keyValue = document["cookie"].match("(^|;) ?googtrans=([^;]*)(;|$)");
  return keyValue ? keyValue[2].split("/")[2] : null;
}
function GTranslateFireEvent(element, event) {
  try {
    if (document.createEventObject) {
      var evt = document.createEventObject();
      element.fireEvent("on" + event, evt);
    } else {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true);
      element.dispatchEvent(evt);
    }
  } catch (e) {}
}
function doGTranslate(lang_pair) {
  if (lang_pair.value) lang_pair = lang_pair.value;
  if (lang_pair == "") return;
  var lang = lang_pair.split("|")[1];
  if (GTranslateGetCurrentLang() == null && lang == lang_pair.split("|")[0])
    return;
  if (typeof ga == "function") {
    ga(
      "send",
      "event",
      "GTranslate",
      lang,
      location.hostname + location.pathname + location.search
    );
  }
  var teCombo;
  var sel = document.getElementsByTagName("select");
  for (var i = 0; i < sel.length; i++)
    if (sel[i].className.indexOf("goog-te-combo") != -1) {
      teCombo = sel[i];
      break;
    }
  if (
    document.getElementById("google_translate_element2") == null ||
    document.getElementById("google_translate_element2").innerHTML.length ==
      0 ||
    teCombo.length == 0 ||
    teCombo.innerHTML.length == 0
  ) {
    setTimeout(function () {
      doGTranslate(lang_pair);
    }, 500);
  } else {
    teCombo.value = lang;
    GTranslateFireEvent(teCombo, "change");
    GTranslateFireEvent(teCombo, "change");
  }
}
