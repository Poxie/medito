import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "../input";

const MAX_HEIGHT = 250;

export type DropdownItem = {
    id: string;
    text: string;
}
export default function Dropdown({ items, selectedId, onSelect, className, selectedClassName, renderSelectedItem, emptyLabel='No items found' }: {
    items: DropdownItem[];
    selectedId: string;
    onSelect: (id: string) => void;
    className?: string;
    selectedClassName?: string;
    emptyLabel?: string;
    renderSelectedItem?: (selectedItem: DropdownItem) => React.ReactNode;
}) {
    const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    
    const ref = useRef<HTMLDivElement>(null);

    // Detect click outside div element
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(!ref.current || ref.current.contains(e.target as Node)) return;
            setOpen(false);
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Checks what direction the dropdown should open
    useEffect(() => {
        if(!ref.current) return;

        const { top, height } = ref.current.getBoundingClientRect();
        if(top + height + MAX_HEIGHT > window.innerHeight) {
            return setPosition('top');
        }
        setPosition('bottom');
    }, []);

    const handleClick = (id: string) => {
        onSelect(id);
        setOpen(false);
    }

    const filteredItems = items.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
    const selectedItem = items.find(item => item.id.toLowerCase() === selectedId.toLowerCase());
    return(
        <div 
            className={twMerge(
                "relative",
                className,
            )}
            ref={ref}
        >
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                className={twMerge(
                    "hover:bg-tertiary transition-colors",
                    selectedClassName,
                )}
            >
                {!selectedItem && (
                    <span>
                        Select an item
                    </span>
                )}
                {selectedItem && (
                    renderSelectedItem ? (
                        renderSelectedItem(selectedItem)
                    ) : (
                        selectedItem?.text
                    )
                )}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        exit={{ opacity: 0, translateY: 6, scale: 0.96 }}
                        initial={{ opacity: 0, translateY: 6, scale: 0.96 }}
                        animate={{ opacity: 1, translateY: 0, scale: 1 }}
                        transition={{ bounce: false, duration: .2 }}
                        className={twMerge(
                            "[--width:200px] [--spacing:.5rem] min-w-[--width] z-30 absolute left-0 bg-secondary border-[1px] border-secondary rounded-md box-shadow-lg overflow-auto",
                            position === 'bottom' && "top-[calc(100%+var(--spacing))]",
                            position === 'top' && "bottom-[calc(100%+var(--spacing))]",
                        )}
                        style={{ maxHeight: MAX_HEIGHT }}
                    >
                        <Input 
                            value={search}
                            onChange={setSearch}
                            placeholder="Search"
                            className="sticky top-0 rounded-none rounded-t-md outline-none"
                            focusOnMount
                        />
                        {filteredItems.length !== 0 && (
                            <ul className="p-2">
                                {filteredItems.map(item => (
                                    <li key={item.id}>
                                        <button 
                                            type="button"
                                            onClick={() => handleClick(item.id)}
                                            className="py-1 px-2 w-full text-left whitespace-nowrap rounded-md hover:bg-primary transition-colors"
                                        >
                                            {item.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {filteredItems.length === 0 && (
                            <span className="block p-3 text-center text-sm">
                                {emptyLabel}
                            </span>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}