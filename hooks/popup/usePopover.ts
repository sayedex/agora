import { useState } from 'react';

export function usePopover() {
    const [isOpen, setIsOpen] = useState(false);
  
    function togglePopover() {
      setIsOpen(!isOpen);
    }
  
    function closePopover() {
      setIsOpen(false);
    }
  
    return {
      isOpen,
      togglePopover,
      closePopover
    };
  }
  