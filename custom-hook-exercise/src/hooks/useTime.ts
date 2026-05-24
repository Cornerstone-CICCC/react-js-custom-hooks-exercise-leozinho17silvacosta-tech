import { useEffect, useState } from "react";

type TimeType = "hour" | "day";

export function useTime<T>(type: TimeType): T {
  const [value, setValue] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      if (type === "day") {
        const day = now.toLocaleDateString("en-US", {
          weekday: "long",
        });

        setValue(day);
      }

      if (type === "hour") {
        const hour = now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setValue(hour);
      }
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return value as T;
}
