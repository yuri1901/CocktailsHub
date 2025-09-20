// hook
import { useState } from "react";

export default function useInputValidation(inputValue: string) {
  const [isError, setIsError] = useState(false);

  const validateRequiredField = () => {
    if (!inputValue.trim()) {
      setIsError(true);
      return false;
    } else {
      setIsError(false);
      return true;
    }
  };

  return { isError, validateRequiredField };
}
