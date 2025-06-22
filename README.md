# ⚡ RMG Mockup Generator – Client

Welcome to the **client-side** of the RMG JSX Mockup Generator!  
This is a powerful frontend application built with **React + Vite**, designed to generate ready-to-use React components (JSX) based on natural language prompts.

---
📦 The reusable components library published on NPM:  
[`rmg-components-lib`](https://www.npmjs.com/package/rmg-components-lib)

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/RMG-Frontend.git
cd RMG-Frontend
npm install
npm run dev
```

---
## ✨ Features

- 🔍 **Prompt-to-Component**: Type in a description like  
  _"Create a login page with email, password and a submit button"_  
  → get a fully functional code snippet instantly.
  
- 💻 **Live Preview**: Instantly visualize how the generated component will look and behave.

- ✅ **Copy to Clipboard**: Easily copy the JSX code with a single click.

- 📥 **Download Code**: Export the generated component into a `.tsx` file.

- 🎨 **Pre-Styled Components**: Based on reusable RMG UI components (`RMGButton`, `RMGInput`, `RMGText` and more), styled with TailwindCSS.

- 🔗 **Built-in Integration** with the [`rmg-components-lib`](https://www.npmjs.com/package/rmg-components-lib) NPM package.

---

## 🚀 Technologies Used

- ⚛️ **React 19** + **Vite**
- ⚛️ **Tailwind CSS**
- ⚛️ **Axios** for server communication
- 📦 [**rmg-components-lib**](https://www.npmjs.com/package/rmg-components-lib) – internal shared components library

---

## 📚 Example

🧠 **Prompt**:
Generate a user profile card with profile picture, name and follow button.

### ⚙️ Component Generated:
```jsx
<div className="flex flex-col items-center p-4">
  <RMGImage src="path/to/profile_picture.png" alt="Profile Picture" />
  <RMGText className="font-bold text-lg mt-2">John Doe</RMGText>
  <RMGButton title="Follow" onClick={handleFollow} />
</div>

