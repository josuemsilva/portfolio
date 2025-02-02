import { useEffect, useState } from "react";

const Overlay = () => {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 500);

    const removeRenderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeRenderTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-white transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 9999 }}
    />
  );
};

export default Overlay;
