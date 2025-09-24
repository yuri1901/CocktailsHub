import { useState, useEffect } from "react";

export default function useOrderConfirmation() {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const confirmOrder = (onConfirm: () => void, onComplete?: () => void) => {
    onConfirm();
    setIsOrderConfirmed(true);

    // Зберігаємо callback для виклику після завершення
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  useEffect(() => {
    if (isOrderConfirmed) {
      const timer = setTimeout(() => {
        setIsOrderConfirmed(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOrderConfirmed]);

  return {
    isOrderConfirmed,
    confirmOrder,
    resetConfirmation: () => setIsOrderConfirmed(false),
  };
}
