import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'; // You need this to use createPortal

/**
 * A reusable Modal component that uses native <dialog> element
 * and React.createPortal for robust, accessible modals.
 *
 * @param {boolean} isOpen - Controls whether the modal is visible.
 * @param {function} onClose - Function to call when the modal needs to close.
 * @param {React.ReactNode} children - The content to display inside the modal.
 */
function Modal({ isOpen, onClose, children }) {
  // Create a ref to directly interact with the native <dialog> DOM element
  const dialogRef = useRef(null);

  // useEffect to manage the opening and closing of the native dialog
  useEffect(() => {
    // Access the current dialog DOM element via the ref
    const dialogElement = dialogRef.current;

    if (dialogElement) {
      if (isOpen) {
        // If isOpen is true, and the dialog is not already open, show it modally
        // showModal() makes the dialog appear on top and makes the rest of the page inert
        if (typeof dialogElement.showModal === 'function' && !dialogElement.open) {
          dialogElement.showModal();
        }
      } else {
        // If isOpen is false, and the dialog is open, close it
        if (typeof dialogElement.close === 'function' && dialogElement.open) {
          dialogElement.close();
        }
      }
    }
  }, [isOpen]); // Re-run this effect whenever the 'isOpen' prop changes

  // Handle the native 'close' event of the <dialog> element.
  // This fires when the dialog is closed by the browser (e.g., via the Esc key).
  // We need to sync our React state (isOpen) with this native event.
  const handleNativeClose = () => {
    onClose(); // Call the onClose prop passed from the parent (e.g., DisplayHeader)
  };

  // We only render the portal (and thus the dialog) if isOpen is true.
  // This helps prevent issues if you try to call showModal() on an element not in the DOM,
  // and efficiently handles mounting/unmounting of modal content.
  if (!isOpen) return null;

  // Use ReactDOM.createPortal to render the dialog element directly into the <body>.
  // This ensures the modal is at the top of the DOM stacking context,
  // preventing z-index issues with other page elements.
  return ReactDOM.createPortal(
    <dialog ref={dialogRef} onClose={handleNativeClose} className="my-custom-modal">
      {children} {/* The content passed into the Modal component */}
      <button onClick={onClose} aria-label="Close modal">Close</button> {/* A close button */}
    </dialog>,
    document.body // The target DOM node where the modal will be rendered
  );
}

export default Modal;