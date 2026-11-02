
class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
  }

  render() {
    const fieldsHTML = this.fields.map((f, i) => {
      const id = `field_${i}`;
      if (f.type === "textarea") {
        return `<div><label for="${id}">${f.label}</label><br><textarea id="${id}"></textarea></div>`;
      }
      if (f.type === "select") {
        const opts = (f.options || []).map((o) => `<option value="${o}">${o}</option>`).join("");
        return `<div><label for="${id}">${f.label}</label><br><select id="${id}">${opts}</select></div>`;
      }
      return `<div><label for="${id}">${f.label}</label><br><input id="${id}" type="${f.type}"></div>`;
    }).join("");

    this.container.innerHTML = `
      <form id="dynamicForm" style="font-family:sans-serif;max-width:320px">
        ${fieldsHTML}
        <br><button type="submit">Submit</button>
      </form>
      <pre id="output"></pre>`;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      console.log(data);
    });
  }

  getFormData() {
    const data = {};
    this.fields.forEach((f, i) => {
      const el = document.getElementById(`field_${i}`);
      data[f.label] = f.type === "checkbox" ? el.checked : el.value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Country", options: ["India", "USA", "UK"] },
  { type: "textarea", label: "Bio" },
  { type: "checkbox", label: "Subscribe" },
];

const root = document.createElement("div");
document.body.appendChild(root);
new FormBuilder(fields, root).render();
