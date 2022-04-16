import { StrictMode } from "react";
import * as Survey from "survey-react";
import { createRoot } from "react-dom/client";

// import App from "./App";
// import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

Survey.StylesManager.applyTheme("winter");

var surveyJSON = {
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          isRequired: true,
          choices: ["item1", "item2", "item3"]
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "dropdown",
          name: "question2",
          isRequired: true,
          choices: ["item1", "item2", "item3"]
        }
      ]
    },
    {
      name: "page3",
      elements: [{ type: "boolean", name: "question3", isRequired: true }]
    }
  ]
};

function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

root.render(
  <StrictMode>
    <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />
  </StrictMode>
);
