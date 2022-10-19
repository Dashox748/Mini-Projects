import React, { useEffect, useState } from "react";
import "./generator.css";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

function Generator({ generatePassword, generatedPassword }) {
  const [value, setNewValue] = useState(6);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let str = 0;
    if (upper) str += 1;
    if (lower) str += 1;
    if (numbers) str += 1;
    if (symbols) str += 1;
    setStrength(str);
  }, [upper, lower, numbers, symbols]);

  const handleChange = (event, newValue) => {
    setNewValue(newValue);
  };
  return (
    <div className="generator__container">
      <div className="generator__container-password">
        <h1>{generatedPassword}</h1>
        <ContentCopyOutlinedIcon
          className="icon"
          onClick={() => navigator.clipboard.writeText(generatedPassword)}
        />
      </div>
      <div className="generator__container-config">
        <div className="generator__container-config-flex">
          <h3>Character Length</h3>
          <h1>{value}</h1>
        </div>
        <Slider
          step={1}
          defaultValue={6}
          min={6}
          max={16}
          onChange={handleChange}
          sx={{
            color: "#a4ffaf",
            height: "6px",
            background: "none",
            borderRadius: "0",
            "& .MuiSlider-thumb": {
              height: 24,
              width: 24,
              backgroundColor: "#fff",
              border: "2px solid currentColor",
              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
              },
            },
            "& .MuiSlider-rail": {
              color: "#bfbfbf",
            },
          }}
        />
        <div className="generator__container-config-checkboxes">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                color: "#a4ffaf",
                "&.Mui-checked": {
                  color: "#a4ffaf",
                },
              }}
              onChange={() => setUpper(!upper)}
            />
            <h1 className="label">Include Uperrcase Letters</h1>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                color: "#a4ffaf",
                "&.Mui-checked": {
                  color: "#a4ffaf",
                },
              }}
              onChange={() => setLower(!lower)}
            />
            <h1 className="label">Include Lowercase Letters</h1>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                color: "#a4ffaf",
                "&.Mui-checked": {
                  color: "#a4ffaf",
                },
              }}
              onChange={() => setNumbers(!numbers)}
            />
            <h1 className="label">Include Numbers</h1>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                color: "#a4ffaf",
                "&.Mui-checked": {
                  color: "#a4ffaf",
                },
              }}
              onChange={() => setSymbols(!symbols)}
            />
            <h1 className="label">Include Symbols</h1>
          </Box>
        </div>
        <div className="generator__container-strength">
          <h2>STRENGTH</h2>
          <div className="generator__container-strength-percent">
            <div className={strength > 0 ? "active" : null}></div>
            <div className={strength > 1 ? "active" : null}></div>
            <div className={strength > 2 ? "active" : null}></div>
            <div className={strength > 3 ? "active" : null}></div>
          </div>
        </div>
        <button
          className="generate"
          onClick={() =>
            generatePassword(upper, lower, numbers, symbols, value)
          }
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default Generator;
