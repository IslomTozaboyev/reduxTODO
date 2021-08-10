import { Provider as Pro } from "react-redux";
import store from "../../redux/store";
import Todo from "../Todo";
import AppWrapper from "./AppWrapper";
import colors from "../Data/colors";
import { useEffect, useState } from "react";
import ThemeContext from "../../themeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [selectedColors, setSelectedColors] = useState(colors.dark);

  useEffect(() => {
    setSelectedColors(colors[theme]);
  }, [theme]);

  return (
    <Pro store={store}>
      <ThemeContext.Provider
        value={{ theme, setTheme, colors: selectedColors }}
      >
        <AppWrapper className="App py-5" colors={colors}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6">
                <Todo />
              </div>
            </div>
          </div>
        </AppWrapper>
      </ThemeContext.Provider>
    </Pro>
  );
}

export default App;
