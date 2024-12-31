const fs = require("fs");
const path = require("path");

// List of component files to create
const components = [
  "accordion.tsx",
  "alert-dialog.tsx",
  "alert.tsx",
  "aspect-ratio.tsx",
  "avatar.tsx",
  "badge.tsx",
  "breadcrumb.tsx",
  "button.tsx",
  "calendar.tsx",
  "card.tsx",
  "carousel.tsx",
  "chart.tsx",
  "checkbox.tsx",
  "collapsible.tsx",
  "command.tsx",
  "context-menu.tsx",
  "dialog.tsx",
  "drawer.tsx",
  "dropdown-menu.tsx",
  "form.tsx",
  "hover-card.tsx",
  "input-otp.tsx",
  "input.tsx",
  "label.tsx",
  "menubar.tsx",
  "navigation-menu.tsx",
  "pagination.tsx",
  "popover.tsx",
  "progress.tsx",
  "radio-group.tsx",
  "resizable.tsx",
  "scroll-area.tsx",
  "select.tsx",
  "separator.tsx",
  "sheet.tsx",
  "sidebar.tsx",
  "skeleton.tsx",
  "slider.tsx",
  "sonner.tsx",
  "switch.tsx",
  "table.tsx",
  "tabs.tsx",
  "textarea.tsx",
  "toast.tsx",
  "toaster.tsx",
  "toggle-group.tsx",
  "toggle.tsx",
  "tooltip.tsx",
  "use-toast.ts",
];

// Target directory for components
const targetDir = path.join(__dirname, "src/components/ui");

// Create the directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Template content for each file
const template = (componentName) => `
import React from "react";

// ${componentName} component
export function ${componentName.replace(/\.tsx$/, "")}() {
  return <div>${componentName.replace(/\.tsx$/, "")}</div>;
}
`;

// Generate files
components.forEach((file) => {
  const filePath = path.join(targetDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template(file), "utf8");
    console.log(`Created: ${file}`);
  } else {
    console.log(`Skipped (already exists): ${file}`);
  }
});

console.log("All components generated!");
