import { useState } from "react";
import useStore from "./store/useStore";
import { AppCategory, GifGrid } from "./components";

export const GifsExpertApp = () => {
  const { theme, changeTheme } = useStore();
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    /* setCategories((cate) => [...cate, "Prueba"]); */
  };

  /* const onChangeCheckbox = () => {
    setCheckbox(!checkbox);
    console.log(checkbox);
  } */

  return (
    <main className={theme ? "main-dark" : "main-light"}>
      <div>
        <h1>GifsExpertApp</h1>
        <div>
          Theme: { theme ? 'Ligth': 'Dark'}
          <input
            type="checkbox"
            className="toggle"
            checked={theme}
            onChange={changeTheme}
          />
        </div>
      </div>
      <AppCategory
        //onAddCategory={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </main>
  );
};
