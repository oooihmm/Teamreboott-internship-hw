import { useEffect } from "react";

export default function useClickOutside(
	ref: React.RefObject<HTMLDivElement>,
	handler: (open: boolean) => void
) {
	useEffect(() => {
		const listener = (event: CustomEvent<MouseEvent>) => {
			if (!ref.current || ref.current.contains(event.target as Element)) {
				return;
			}
			handler(false);
		};

		document.addEventListener("mousedown", listener as EventListener);
		return () => {
			document.removeEventListener("mousedown", listener as EventListener);
		};
	}, [ref, handler]);
}
